---
title: "UW RoboHub Research"
blurb: "Franka Emika Panda mirroring human arm motion from body-mounted IMUs."
tags:
  - "Manipulation"
  - "Perception"
stack:
  - "ROS 2"
  - "Franka Emika Panda"
  - "Xsens Awinda"
  - "Docker"
  - "Linux"
year: "2025"
cover: "/images/project-robohub.jpg"
featured: false
weight: 90
---

Research at the University of Waterloo **RoboHub** on a 7-axis **Franka Emika Panda**.

**Xsens Awinda IMUs** mount to a human operator's body and stream orientation into ROS 2, where the motion
is retargeted onto the arm so it mirrors what the person does. A human arm and a 7-DOF manipulator have
different kinematics, so the mapping has to resolve redundancy and respect joint limits while keeping the
resulting motion natural.

Containerized in Docker so results reproduce across the lab's machines.
