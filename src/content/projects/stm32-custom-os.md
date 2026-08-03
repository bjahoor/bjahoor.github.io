---
title: "STM32 Custom OS"
blurb: "Operating system written from scratch in C for an STM32 Nucleo board."
tags:
  - "Embedded"
stack:
  - "C"
  - "STM32"
  - "ARM Cortex-M"
year: "2025"
cover: "/images/project-stm32.jpg"
featured: false
weight: 48
---

A custom operating system built in **C** on an **STM32 Nucleo** board — task scheduling, context
switching, and memory management on bare metal.

Writing a scheduler is the fastest way to stop treating an RTOS as magic. Once you have hand-saved a
register set on a context switch, every subsequent conversation about real-time behaviour and priority
inversion is grounded in something concrete.
