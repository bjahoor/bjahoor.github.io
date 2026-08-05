---
title: "AI Roommate"
blurb: "Edge AI assistant that watches a live camera feed and answers questions grounded in what it can actually see."
tags:
  - "AI/ML"
  - "Perception"
stack:
  - "NVIDIA Jetson"
  - "Ollama"
  - "Qwen2.5-0.5B"
  - "YOLOv8s"
  - "FastAPI"
year: "2025"
cover: "../../assets/images/ai-assistant.jpg"
repo: "https://github.com/bjahoor/ai_roommate_assistant"
demo: "/demos/assistant"
featured: true
weight: 94
---

Most chat assistants are blind. This one runs on a **Jetson Orin Nano** and grounds every answer
in a live camera feed.

**Ultralytics YOLOv8s** continuously detects objects in view and maintains a running scene state. That
state is injected into the context of a locally-hosted **Qwen2.5-0.5B** running under **Ollama**, so the
model can answer questions about what is actually present rather than guessing.

The whole thing is a **FastAPI** service — endpoints for video streaming, detection state, and chat — with
a separate YOLO inference server behind it. Nothing leaves the device; the LLM and the detector both run
locally, which is the entire argument for doing this at the edge instead of calling an API.
