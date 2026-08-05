---
title: "Chess Robot"
blurb: "Custom robotic arm that plays chess over a calibrated board, addressed in chess notation."
tags:
  - "Manipulation"
  - "Hardware"
  - "Controls"
stack:
  - "SO-ARM101"
  - "Placo"
  - "LeRobot"
  - "Python"
  - "SolidWorks"
year: "2026"
featured: false
weight: 92
---

A custom robotic arm that plays chess against a human opponent, built on an SO-101 follower arm driven
through **LeRobot** with **Placo** solving the inverse kinematics.

The interface is deliberately small — two calls do the work:

```python
robot = startup()
pick_and_place("e2", "e4", robot)
```

Squares are addressed the way a chess player addresses them, `a1` through `h8`, rather than as Cartesian
coordinates. That mapping comes from a calibration routine that measures the physical board once and
writes the square positions to a config file. Point the arm at a different board, or a different arm at
the same board, and only that file changes.

Chess pieces are an unforgiving target. The tolerance between lifting a knight cleanly and clipping its
neighbour is a few millimetres, and every square sits at a different reach and approach angle — so
gripper heights, IK tolerances and the servo PID all had to be tuned against the real board rather than
a model of it.

A browser UI sits on top for running games, and disconnect is registered with `atexit`, so a crashed
script still releases the arm.
