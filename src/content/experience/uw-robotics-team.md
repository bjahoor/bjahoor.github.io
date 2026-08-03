---
role: "Robotics Engineering (Co-op)"
org: "University of Waterloo Robotics Team"
location: "Ontario"
start: "June 2025"
end: "Aug 2025"
order: 6
robotics: true
bullets:
  - "Developed the ROS 2 RealSense RGB + depth pipeline with custom compression and dynamic resolution selection."
  - "Modelled the 6-wheel rocker-bogie drivetrain and solved forward and inverse kinematics, running on NVIDIA Jetson."
---

The team builds a Mars-style rover for the annual CIRC competition, where the rover is
driven over a wireless link with real bandwidth limits.

I owned the camera pipeline. Streaming raw RGB and depth off an Intel RealSense saturates the link
immediately, so I implemented custom compression and a rolling resolution selector that trades image
detail against available bandwidth on the fly — the operator keeps a usable feed instead of a frozen one.

Separately I modelled the **6-wheel rocker-bogie** drivetrain and solved both forward and inverse
kinematics for it. Rocker-bogie geometry is what lets a rover keep all six wheels loaded over uneven
terrain, and getting the kinematics right is what turns a drive command into coordinated wheel motion.
All of it ran on a **Jetson** on the rover itself.
