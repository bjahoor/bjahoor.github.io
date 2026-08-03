---
title: "Custom Agentic Harnesses"
blurb: "Self-hosted LLM infrastructure on Jetson hardware running autonomous agents on the local network."
tags:
  - "AI/ML"
  - "Embedded"
stack:
  - "llama.cpp"
  - "NVIDIA Jetson"
  - "Hermes"
  - "Claude Code"
  - "Docker"
year: "2026"
repo: "https://github.com/bjahoor/xavier-llm-server"
featured: false
weight: 64
---

Local LLM infrastructure running on a **Jetson AGX Xavier**, exposing OpenAI- and
Anthropic-compatible endpoints from an optimized **llama.cpp** build.

On top of that sits a set of agents — **Hermes** supergents with **Claude Code** delegates — that operate
autonomously against real tasks rather than sitting behind a chat box.

Getting llama.cpp to perform on Jetson hardware is its own exercise: aarch64, CUDA compatibility, and
quantization choices all interact, and the difference between a naive build and a tuned one is several
times the throughput.
