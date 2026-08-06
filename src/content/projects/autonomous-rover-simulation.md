---
title: "Autonomous Rover Simulation"
blurb: "Containerized Mars-rover simulation in Gazebo with multiple ROS2 packages."
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
featured: true
weight: 91
---

Containerized Mars-rover simulation in Gazebo with multiple ROS2 packages. System monitors temps and issues warnings when thresholds are exceeded. Obstacle sensors partition the surroundings into 6 sectors; a navigation algorithm recommends the next motion and iterates until the goal is reached. An AI model analyzes the rover’s camera feed to detect and classify plants.
