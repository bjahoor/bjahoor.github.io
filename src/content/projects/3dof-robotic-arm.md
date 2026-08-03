---
title: "3-DOF Robotic Arm"
blurb: "Arm designed in CAD and 3D-printed from scratch, sorting tokens by colour from an overhead camera."
tags:
  - "Manipulation"
  - "Hardware"
  - "Perception"
stack:
  - "SolidWorks"
  - "3D printing"
  - "ROS 2"
  - "OpenCV"
  - "PWM"
  - "Raspberry Pi"
year: "2024"
cover: "/images/project-arm.jpg"
featured: false
weight: 68
---

A three-degree-of-freedom arm designed from nothing in **SolidWorks** and 3D-printed.

Motors are driven over **PWM**, internal communication runs on **ROS 2** on a **Raspberry Pi** under Ubuntu,
and an overhead camera feeds **OpenCV** doing HSV-space colour thresholding to classify tokens in real time.

HSV rather than RGB is the whole trick — it separates colour from brightness, so the classifier keeps
working when someone turns on the room lights.
