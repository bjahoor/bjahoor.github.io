---
title: "ROS2 RealSense Camera Pipeline"
blurb: "Bandwidth-conscious RealSense pipeline for ROS 2, with resolution switching discovered from the driver at runtime."
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

Built for the **University of Waterloo Robotics Team**'s Mars-style rover, which competes at CIRC and
is driven entirely over a wireless link. That link is the constraint the whole package is designed
around: streaming raw RGB and depth off an Intel RealSense saturates it immediately, and a saturated
link means the operator is driving on a frozen image.

So the pipeline spends bandwidth deliberately. The launch configuration turns off everything the rover
doesn't need — both infrared streams, the gyro, the accelerometer, the point cloud, the colorizer, TF
broadcasting — and the colour stream is JPEG-compressed before it leaves the robot. The viewer
subscribes to the compressed topics rather than the raw ones and decodes on the operator's machine, so
the wireless hop only ever carries the small version.

The part I'd point to is the resolution switching. A RealSense supports a long list of
resolution/format/framerate combinations, and which ones are valid depends on the camera. Hard-coding
that list means it goes stale the moment the hardware changes.

Instead, a C++ node queries the camera's ROS parameter service and reads the *descriptor* for the
colour and depth profile parameters — the RealSense wrapper publishes its supported modes in the
descriptor text. The node parses them into a menu at runtime and sets the chosen profile live. The
camera reports what it can do; nothing about its capabilities is written down in this package.

That's what makes the bandwidth tradeoff usable mid-drive. Losing the feed on a rover you can't walk
over to is the failure that matters, and dropping resolution is a much better outcome than dropping
the picture.
