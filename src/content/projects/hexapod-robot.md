---
title: "Hexapod Robot"
blurb: "Zero-shot OWL-ViT on an 18-DOF hexapod, letting it follow any object named in a text prompt."
tags:
  - "Perception"
  - "Hardware"
  - "Autonomy"
  - "Manipulation"
stack:
  - "NVIDIA Jetson"
  - "OWL-ViT"
  - "SO-ARM101"
  - "Intel RealSense"
  - "ST3215"
  - "UDP"
year: "2025"
cover: "../../assets/images/project-hexapod.jpg"
featured: true
weight: 96
---
Built with BoxBots: a six-legged robot with **18 degrees of freedom**, CAD-modelled and 3D printed on
**ST3215** servos.

I led the perception integration, running **nanoowl** — a Jetson-optimized build of the **OWL-ViT**
zero-shot detector — so the robot follows any object named in a text prompt, with no retraining for a
new class. Detections stream over UDP to the locomotion controller.

A second **SO-ARM101** arm was mounted for wireless teleoperation, so the platform can navigate to a
target autonomously and grasp it under remote control.
