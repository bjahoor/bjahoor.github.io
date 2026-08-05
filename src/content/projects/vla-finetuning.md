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

A vision-language-action model takes camera frames and a language instruction and emits joint
commands directly — no hand-written perception stage, no scripted motion plan.

I fine-tuned **SmolVLA** through **LeRobot** to pick and place coloured blocks on a physical
**SO-ARM101** arm. The pipeline is end-to-end: teleoperate the arm to collect demonstrations, train
the policy on those episodes, then run it closed-loop on a **Jetson Orin Nano**.

The interesting failure mode is that a policy which looks convincing in playback can still fail on the
real arm, because the demonstrations encode the operator's habits alongside the task. Getting reliable
behaviour is mostly a data problem, not a training problem.
