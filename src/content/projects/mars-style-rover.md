---
title: "Mars-Style Rover"
blurb: "Competition rover for CIRC — bandwidth-aware camera streaming and rocker-bogie kinematics."
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
cover: "/images/project-rover.jpg"
featured: false
weight: 78
---

The University of Waterloo Robotics Team builds a Mars-style rover for the annual **CIRC**
competition. I contributed two pieces.

The first was the **RealSense** camera stream. Raw RGB-D saturates a wireless link immediately, so I added
custom compression and a rolling resolution selector that trades detail for bandwidth as conditions change
— the operator keeps a usable feed instead of a frozen one.

The second was the **6-wheel rocker-bogie** drivetrain: modelling it and solving both forward and inverse
kinematics. Rocker-bogie geometry is what keeps all six wheels loaded over uneven ground. Everything ran
on a **Jetson** aboard the rover.
