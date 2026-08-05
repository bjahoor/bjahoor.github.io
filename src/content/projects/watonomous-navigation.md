---
title: "WATonomous Navigation"
blurb: "Autonomous navigation stack for a differential-drive robot — LiDAR costmaps, A* planning, Pure Pursuit tracking."
tags:
  - "Autonomy"
  - "Perception"
stack:
  - "ROS 2"
  - "C++"
  - "LiDAR"
  - "A*"
  - "Pure Pursuit"
  - "Foxglove"
  - "Docker"
year: "2026"
cover: "../../assets/images/project-watonomous.jpg"
repo: "https://github.com/bjahoor/wato_asd_navigation"
featured: false
weight: 82
---

An in-progress ROS 2 navigation stack with **WATonomous**, the University of Waterloo's autonomous
vehicle team.

The pipeline turns raw **LiDAR** into an occupancy costmap, maintains a lightweight global map, plans paths
with **A\***, and tracks them with **Pure Pursuit** to publish velocity commands. Each stage is a place the
robot can fail in a different way — a costmap that inflates obstacles too aggressively makes gaps
impassable, one that inflates too little clips corners.

Written in C++ and Python, developed in Docker, debugged through **Foxglove**.
