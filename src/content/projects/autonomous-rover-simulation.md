---
title: "Autonomous Rover Simulation"
blurb: "Containerized Mars-rover simulation in Gazebo with sector-based obstacle avoidance and plant classification."
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
sectors, recommends the next motion, and iterates until the goal is reached. A separate model analyzes the
rover's camera feed to detect and classify plants, and the system monitors temperatures and raises warnings
when they exceed threshold.

This is also where I worked through ROS 2 services, actions, and **Nav2** integration properly rather than
just topic pub/sub.
