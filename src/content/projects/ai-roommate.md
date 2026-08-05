---
title: "AI Roommate"
blurb: "AI Roommate is an edge AI assistant built for an NVIDIA Jetson that combines real-time computer vision with local, scene-aware conversation."
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

AI Roommate is an edge AI assistant built for an NVIDIA Jetson that combines real-time computer vision with local, scene-aware conversation. The system captures a live camera feed for a web dashboard and runs Ultralytics YOLOv8s object detection to continuously identify what is in view. These detections are maintained as the current scene state and provided to an Ollama-hosted Qwen2.5-0.5B LLM so chat responses are grounded in the live environment by answering questions about visible objects, confirming what is present, and providing context-aware assistance. The project is implemented as a FastAPI (REST) service with endpoints for video streaming, detection and state retrieval, and chat, alongside a separate YOLO inference server, creating a responsive on-device pipeline that connects perception to natural-language interaction.
