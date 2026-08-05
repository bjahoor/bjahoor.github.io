---
title: "Autonomous Rover Simulation"
blurb: "ROS2/Nav2 stack with six-sector obstacle avoidance and plant classification for a Gazebo rover."
tags:
  - "Simulation"
  - "Autonomy"
  - "AI/ML"
stack:
  - "ROS 2 Humble"
  - "Gazebo"
  - "Nav2"
  - "Python"
  - "Docker"
year: "2025"
cover: "../../assets/images/construct-rover.jpg"
repo: "https://github.com/bjahoor/ROS2_Construct_Rover"
demo: "/demos/rover"
featured: false
weight: 84
---
A Mars-rover simulation built across multiple ROS 2 packages and run in **Gazebo** under Docker.

Obstacle sensors partition the rover's surroundings into six sectors; a navigation routine reads those
sectors, recommends the next motion, and iterates until the goal is reached. A separate model analyzes
the camera feed to detect and classify plants, and the system monitors temperatures and raises warnings
when they exceed threshold.

The Gazebo environment and the container setup were already in place; my work was the ROS 2 and **Nav2**
navigation nodes on top of them.
