---
title: "AI Object Detection"
blurb: "ROS2 package pairing compressed RealSense RGB-D with OWL-ViT, retargeted by text on a live topic."
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
cover: "../../assets/images/project-ai-object-detection.jpg"
repo: "https://github.com/bjahoor/ai_cam_package"
demo: "/demos/ai-cam"
featured: false
weight: 86
---
A ROS 2 package that streams **Intel RealSense** RGB and depth into a zero-shot **OWL-ViT** detector,
with OpenCV overlays for visualization.

Detection classes arrive as text on a ROS topic at runtime, so what the robot looks for is changed by
publishing a string rather than by retraining.
