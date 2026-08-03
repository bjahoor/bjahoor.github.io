---
title: "Chess Robot"
blurb: "Custom robotic arm that plays a full game of chess, with its own UI and control API."
tags:
  - "Manipulation"
  - "Hardware"
  - "Controls"
stack:
  - "SO-ARM101"
  - "Placo"
  - "LeRobot"
  - "CAD"
  - "REST API"
year: "2026"
featured: false
weight: 92
---

Designed and prototyped a custom robotic arm that plays chess against a human opponent.

Motion planning uses **Placo** for inverse kinematics, driven through **LeRobot**. Chess pieces are an
unforgiving target — the tolerance between picking up a knight cleanly and knocking over its neighbour is
a few millimetres, and every square on the board is a different reach.

The arm is wrapped in a UI and a REST API, so the game logic and the motion layer stay independent of
each other.
