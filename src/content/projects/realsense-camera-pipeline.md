---
title: "ROS2 RealSense Camera Pipeline"
blurb: "Custom ROS2 RealSense wrapper with compression and dynamic resolution selection."
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
Built for the **University of Waterloo Robotics Team**'s Mars-style rover, which is driven over a
wireless link with real bandwidth limits.

The launch configuration disables the streams the rover doesn't need — both infrared streams, the gyro,
the accelerometer, the point cloud, the colorizer and TF broadcasting — and the colour stream is
JPEG-compressed before it leaves the robot. The viewer subscribes to the compressed topics and decodes
on the operator's machine.

For resolution selection, a C++ node queries the camera's ROS parameter service and reads the
*descriptor* for the colour and depth profile parameters, which is where the RealSense wrapper publishes
its supported modes. The node parses them into a menu at runtime and sets the chosen profile live,
rather than working from a hard-coded list.
