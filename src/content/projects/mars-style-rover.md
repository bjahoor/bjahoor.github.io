---
title: "Mars-Style Rover"
blurb: "Control and autonomy software for a Mars-style rover in ROS2, with 6-wheel drivetrain kinematics."
tags:
  - "Perception"
  - "Hardware"
  - "Controls"
stack:
  - "ROS 2"
  - "Intel RealSense"
  - "NVIDIA Jetson"
  - "Kinematics"
year: "2025"
cover: "../../assets/images/project-rover.jpg"
featured: false
weight: 78
---
The University of Waterloo Robotics Team builds a Mars-style rover for the annual **CIRC** competition.
I contributed two pieces.

The first was the **ROS 2 RealSense** RGB-D stream, with custom compression and dynamic resolution
selection for a bandwidth-limited wireless link.

The second was modelling the **6-wheel rocker-bogie** drivetrain and solving its forward and inverse
kinematics, running on an **Nvidia Jetson**.
