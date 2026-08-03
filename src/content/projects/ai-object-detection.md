---
title: "AI Object Detection"
blurb: "ROS 2 package pairing RealSense RGB-D with zero-shot detection driven by runtime text prompts."
tags:
  - "Perception"
  - "AI/ML"
stack:
  - "ROS 2"
  - "OWL-ViT"
  - "Intel RealSense"
  - "OpenCV"
  - "Transformers"
year: "2025"
cover: "/images/project-ai-object-detection.jpg"
repo: "https://github.com/bjahoor/ai_cam_package"
demo: "/demos/ai-cam"
featured: false
weight: 86
---

A ROS 2 package that streams **Intel RealSense** RGB and depth into a zero-shot **OWL-ViT**
detector, with OpenCV overlays for real-time visualization.

The design decision that makes it useful: detection classes arrive as text on a ROS topic at runtime. You
change what the robot is looking for by publishing a string — no retraining, no redeploy, no fixed class
list baked in at build time.

It runs on CPU, which keeps it deployable on hardware that has no GPU budget left after the rest of the
stack.
