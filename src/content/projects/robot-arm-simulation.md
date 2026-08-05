---
title: "Robot Arm Simulation"
blurb: "RL control policies for Franka and SO-ARM101 arms in CUDA-enabled Isaac Lab."
tags:
  - "Simulation"
  - "AI/ML"
  - "Manipulation"
stack:
  - "NVIDIA Isaac Sim"
  - "Isaac Lab"
  - "CUDA"
  - "Reinforcement Learning"
  - "Python"
year: "2025-2026"
cover: "../../assets/images/cube_play.webp"
featured: true
weight: 98
---
**Isaac Lab** runs many simulated arms in parallel on the GPU, which is what makes reinforcement
learning practical for manipulation.

I set up CUDA-enabled Isaac Lab on top of Isaac Sim and trained RL control policies for both the
**Franka** and the **SO-ARM101**, then validated sim-to-real readiness.
