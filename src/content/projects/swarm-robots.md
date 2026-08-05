---
title: "SWARM Robots"
blurb: "HeRo 2.0 swarm robots assembled from bare PCBs, communicating over ROS2."
tags:
  - "Hardware"
  - "Embedded"
  - "Simulation"
stack:
  - "ESP32"
  - "ROS 2"
  - "Gazebo"
  - "Docker"
  - "SMD soldering"
year: "2024-2025"
cover: "../../assets/images/project-swarm.jpg"
docs: "https://verlab.github.io/hero_common/"
featured: false
weight: 72
---

A fleet of [**HeRo 2.0**](https://verlab.github.io/hero_common/) research robots assembled from scratch —
reflow-soldering SMD components onto bare PCBs, prototyping and modifying parts, and flashing firmware to
the **ESP32** on each unit. HeRo 2.0 is an open swarm-robotics platform out of VeRLab at UFMG; the build
starts at ordering bare boards.

Once running, the robots communicate over WiFi and IR, streaming IMU, encoder, and drive telemetry through
ROS 2 pipelines. **Gazebo** under Docker provides the simulation environment for testing swarm coordination
without needing every physical robot powered up.

Swarm behaviour is the payoff, but most of the work was at the soldering iron. A fleet is only as good as
its least reliable unit.
