#!/usr/bin/env bash
# Live preview for resume.tex.
#
#   ./watch.sh            → http://localhost:8080/preview.html
#   ./watch.sh 9000       → pick another port
#
# Rebuilds on every save and reports the page count, so a two-page overflow is
# visible immediately rather than at deploy time.
set -uo pipefail
cd "$(dirname "$0")"

PORT="${1:-8080}"

status () {  # status <building|ok|err> [pages] [error]
  printf '{"building":%s,"ok":%s,"pages":%s,"error":"%s","time":"%s","stamp":"%s"}\n' \
    "$([ "$1" = building ] && echo true || echo false)" \
    "$([ "$1" = ok ] && echo true || echo false)" \
    "${2:-0}" "${3:-}" "$(date +%H:%M:%S)" "$(date +%s%N)" > status.json
}

build () {
  status building
  if latexmk -pdf -interaction=nonstopmode resume.tex >build.log 2>&1; then
    local p
    p=$(pdfinfo resume.pdf 2>/dev/null | awk '/^Pages:/ {print $2}')
    status ok "${p:-0}"
    if [ "${p:-0}" -eq 1 ]; then
      echo "  ✓ $(date +%H:%M:%S)  1 page"
    else
      echo "  ! $(date +%H:%M:%S)  ${p} PAGES — will fail CI"
    fi
  else
    local err
    err=$(grep -m1 '^!' build.log | tr -d '"' | cut -c1-90)
    status err 0 "${err:-compile failed}"
    echo "  ✗ $(date +%H:%M:%S)  ${err:-compile failed}"
  fi
}

cleanup () { kill "$SRV" 2>/dev/null; echo; echo "stopped."; }
trap cleanup EXIT INT TERM

python3 -m http.server "$PORT" --bind 0.0.0.0 >/dev/null 2>&1 &
SRV=$!

echo "resume live preview"
echo "  http://localhost:$PORT/preview.html"
ip=$(hostname -I 2>/dev/null | awk '{print $1}')
[ -n "$ip" ] && echo "  http://$ip:$PORT/preview.html   (same LAN)"
echo "  ctrl-c to stop"
echo

build

# inotifywait if available (instant); otherwise poll the mtime once a second.
if command -v inotifywait >/dev/null 2>&1; then
  while inotifywait -q -e close_write,move_self resume.tex >/dev/null 2>&1; do build; done
else
  last=$(stat -c %Y resume.tex)
  while sleep 1; do
    now=$(stat -c %Y resume.tex 2>/dev/null) || continue
    [ "$now" != "$last" ] && { last=$now; build; }
  done
fi
