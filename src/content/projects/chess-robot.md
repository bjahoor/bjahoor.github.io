---
title: "Chess Robot"
blurb: "CAD-modified an SO-ARM101 and developed a three-call Python API that plugs into a chess engine."
tags:
  - "Manipulation"
  - "Hardware"
  - "Controls"
stack:
  - "SO-ARM101 (follower)"
  - "Placo"
  - "LeRobot"
  - "Python"
  - "SolidWorks"
year: "2026"
featured: false
weight: 92
---
A robotic arm that plays chess against a human opponent, built on a CAD-modified **SO-ARM101 follower
arm** driven through **LeRobot** with **Placo** solving the inverse kinematics.

I extended the arm's reach and fused the wrist to drop a motor, updating the **URDF** model, the solver
constraints and the LeRobot driver to match. I also developed the playground it works over — the board,
the shell and the graveyard.

On top sits a three-call Python API that plugs straight into a chess engine:

```python
from api import startup, pick_and_place, shutdown

robot = startup()

pick_and_place("e2", "e4", robot)    # pawn forward two
pick_and_place("g8", "f6", robot)    # knight out

shutdown(robot)
```

Squares are addressed in
chess notation, `a1` through `h8`, rather than as Cartesian coordinates; that mapping comes from a
calibration routine that measures the physical board once and writes the square positions to a config
file.

The motion engine underneath is built over LeRobot and Placo IK: convergence loops, 1 mm waypoints, and
PID gravity compensation.
