---
title: "Robot Arm Simulation"
blurb: "Trained reinforcement-learning control policies for Franka and SO-101 arms in Isaac Lab, then validated sim-to-real readiness."
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

**Isaac Lab** runs thousands of simulated arms in parallel on the GPU, which is what makes
reinforcement learning tractable for manipulation — a policy that would take months of wall-clock time on
one physical arm trains in hours.

I set up CUDA-accelerated Isaac Lab on top of Isaac Sim and trained control policies for both the
**Franka Panda** and the **SO-101**, then validated how well those policies would survive the transfer to
real hardware.

Sim-to-real is where most of this work actually lives. A policy can exploit inaccuracies in the simulator
and post a perfect training score while learning something physically impossible. Checking for that ahead
of deployment is the difference between a useful result and a demo video.
