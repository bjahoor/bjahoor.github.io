import { useMemo, useState } from "react";

export interface FilterItem {
  id: string;
  title: string;
  blurb: string;
  year: string;
  tags: string[];
  stack: string[];
  cover?: string;
}

interface Props {
  projects: FilterItem[];
}

/**
 * The only interactive island on the site. Everything else is static HTML —
 * this hydrates on idle so the project grid is visible and clickable long
 * before the JS lands.
 */
export default function ProjectFilter({ projects }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of projects) {
      for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [projects]);

  const shown = active ? projects.filter((p) => p.tags.includes(active)) : projects;

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          aria-pressed={active === null}
          className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
            active === null
              ? "border-accent bg-accent/10 text-accent"
              : "border-line text-fg-muted hover:border-line-bright hover:text-fg"
          }`}
        >
          all <span className="text-fg-dim">{projects.length}</span>
        </button>

        {tags.map(([tag, count]) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(tag === active ? null : tag)}
            aria-pressed={tag === active}
            className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
              tag === active
                ? "border-accent bg-accent/10 text-accent"
                : "border-line text-fg-muted hover:border-line-bright hover:text-fg"
            }`}
          >
            {tag.toLowerCase()} <span className="text-fg-dim">{count}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <a
            key={p.id}
            href={`/projects/${p.id}`}
            className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-300 hover:border-line-bright"
          >
            <div className="aspect-4/3 overflow-hidden bg-surface-2">
              {p.cover ? (
                <img
                  src={p.cover}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-6">
                  <span className="font-mono text-xs tracking-widest text-fg-dim uppercase">
                    {p.tags[0]}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2 p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-semibold text-fg transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <span className="shrink-0 font-mono text-xs text-fg-dim">{p.year}</span>
              </div>
              <p className="text-sm leading-relaxed text-fg-muted">{p.blurb}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                {p.stack.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="rounded border border-line px-1.5 py-0.5 font-mono text-[11px] text-fg-dim"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="py-16 text-center font-mono text-sm text-fg-dim">
          nothing matches that filter
        </p>
      )}
    </div>
  );
}
