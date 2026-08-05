---
title: "High-Fidelity Simulation Toolchain"
blurb: "Isaac Sim toolchain with integrated optics and hydrodynamics, and a control layer matching the real servos."
tags:
  - "Simulation"
  - "Controls"
stack:
  - "NVIDIA Isaac Sim"
  - "USD"
  - "Python"
  - "Controls"
year: "2026"
cover: "/images/thalassa-turret.jpg"
featured: false
weight: 99
---

Built during a co-op term at **Thalassa Robotics** in California, on their underwater vehicle
platform. Photographs published with the company's permission.

Isaac Sim is a strong general-purpose robotics simulator, but it does not model everything a vehicle
operating underwater cares about. Two domains had to be integrated and configured on top of it:
**optics**, for what the cameras would realistically see through water, and **hydrodynamics**, for how
a body actually moves through it. Neither comes out of the box.

Getting the robot into the simulator correctly was its own task. The CAD assembly had to be prepared
as a **USD** scene with every joint articulated to match the physical machine. If the model and the
real assembly disagree, everything downstream is measuring the wrong robot.

![Electronics stack](/images/thalassa-electronics.jpg)

The part I'd point to first is the control layer. I wrote abstractions over Isaac Sim's stack so that
**the simulated motors are driven through the same interface as the real servos**. That parity is the
whole argument for having a simulator: control code written against the sim behaves the same way on
hardware. On top of it sits path planning bounded by the machine's real acceleration limits — so the
simulator cannot produce motion the hardware could never execute — and an interpolation layer above
that for smooth motion profiles.

![Pressure housings with dome viewport](/images/thalassa-housing.jpg)

The toolchain was used across the team rather than by me alone, which meant usability mattered as much
as fidelity. A simulator nobody opens is worth nothing.
