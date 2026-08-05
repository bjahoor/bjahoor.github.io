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

Built with BoxBots: a six-legged robot with **18 degrees of freedom**, CAD-modelled and 3D-printed
from scratch on **ST3215** servos.

Perception runs **nanoowl**, a Jetson-optimized build of the **OWL-ViT** zero-shot detector. Zero-shot is
the point — you type what the robot should follow, and it follows it, with no retraining for a new object
class. Detections stream over UDP to the locomotion controller, which turns them into a heading.

We then mounted a second **SO-101** arm for wireless teleoperation, so the platform can both navigate to a
target autonomously and grasp it under remote control.
