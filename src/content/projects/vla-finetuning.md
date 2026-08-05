---
title: "VLA Finetuning"
blurb: "ACT and SmolVLA trained on teleoperated demos, running 30 Hz closed-loop on a Jetson."
tags:
  - "AI/ML"
  - "Manipulation"
stack:
  - "SmolVLA"
  - "LeRobot"
  - "SO-ARM101"
  - "NVIDIA Jetson"
  - "PyTorch"
year: "2026"
cover: "../../assets/images/so-arm101-act-demo.webp"
repo: "https://github.com/bjahoor/lerobot-cookbook"
featured: true
weight: 100
---
A vision-language-action model takes camera frames and a language instruction and emits joint commands
directly.

I trained **ACT** and **SmolVLA** through **LeRobot** on 50–100 teleoperated demonstrations per task, to
pick and place coloured blocks on a physical **SO-ARM101**. The policies run 30 Hz closed-loop on a
headless **Jetson Orin Nano**.

Profiling training on an **RTX 3060 Ti** showed it was GPU-bound at a 30:1 compute-to-dataloader ratio,
which set the batch and worker counts.
