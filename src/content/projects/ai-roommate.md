---
title: "AI Roommate"
blurb: "Grounded a local LLM in live YOLOv8s detections so it answers questions about what the camera sees."
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
An assistant running on a **Jetson Orin Nano** that answers questions about what its camera sees.

**Ultralytics YOLOv8s** detects objects in view and maintains a running scene state, which is injected
into the context of a locally-hosted **Qwen2.5-0.5B** under **Ollama**. The service is built on
**FastAPI**, with a separate YOLO inference server behind it. Both the detector and the model run
on-device.
