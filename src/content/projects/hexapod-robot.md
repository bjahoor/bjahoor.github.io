---
title: "Hexapod Robot"
blurb: "For BoxBots, I helped build a hexapod robot with a SO101 arm and Intel RealSense camera running on an NVIDIA Jetson with JetPack."
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
weight: 95
---

For BoxBots, I helped build a hexapod robot with a SO101 arm and Intel RealSense camera running on an NVIDIA Jetson with JetPack. We used the nanoowl OWL-ViT zero-shot model to turn text prompts into object detections and sent decisions over UDP so the robot could autonomously follow targets. The drivetrain was CAD modelled and 3D-printed from scratch using ST3215 servos for 18 degrees of freedom. We also integrated a second SO101 arm for wireless teleoperation, allowing remote grasping and manipulation of objects.
