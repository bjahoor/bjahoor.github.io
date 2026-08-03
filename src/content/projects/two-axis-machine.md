---
title: "Two-Axis Machine"
blurb: "Embedded control for a two-axis positioning machine, written in C."
tags:
  - "Embedded"
  - "Controls"
stack:
  - "C"
  - "Microcontrollers"
  - "Motor control"
year: "2025"
repo: "https://github.com/bjahoor/two_axis_machine_project"
featured: false
weight: 44
---

Firmware for a two-axis positioning machine, written in **C**.

Coordinated motion across two axes means the axes cannot be treated as independent — moving each to its
target separately traces an L-shaped path, not a straight line. Interpolating between them is what turns
two motors into one machine.
