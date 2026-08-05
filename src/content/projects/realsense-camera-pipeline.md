---
title: "ROS2 RealSense Camera Pipeline"
blurb: "Developed the ROS2 RealSense RGB-D stream with custom compression and dynamic resolution for a bandwidth-limited link."
tags:
  - "Perception"
stack:
  - "ROS 2 Humble"
  - "Intel RealSense"
  - "OpenCV"
  - "C++"
  - "Python"
year: "2025"
cover: "../../assets/images/project-realsense.jpg"
repo: "https://github.com/bjahoor/cam_package"
featured: false
weight: 80
---

A ROS 2 package around the Intel RealSense driver, written for the University of Waterloo Robotics
Team's Mars-style rover.

The launch configuration disables the streams the package doesn't use — both infrared streams, the gyro,
the accelerometer, the point cloud, the colorizer and TF broadcasting — and runs colour at 848x480x60
and depth at 848x480x30, with JPEG quality 75 applied to the colour stream. The viewer subscribes to the
compressed topics rather than the raw ones, decodes them with **OpenCV**, and colormaps the depth image.

Resolution selection is a separate C++ node. It queries the camera's ROS parameter service and reads the
*descriptor* for the colour and depth profile parameters, which is where the RealSense wrapper lists the
modes it supports, then prints them as a menu and sets the chosen profile at runtime.
