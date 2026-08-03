---
role: "Robotics Engineering"
org: "Thalassa Robotics"
location: "California"
start: "Jan 2026"
end: "Apr 2026"
order: 8
robotics: true
bullets:
  - "Built a high-fidelity internal simulation tool on NVIDIA Isaac Sim, integrating controls, optics, and hydrodynamics that stock Isaac Sim does not model out of the box."
  - "Focused on usability so the team could mimic real controls and physics without fighting the tooling."
---

Thalassa's vehicles operate underwater, where the physics that matter most — drag,
buoyancy, added mass, and how light actually behaves in the water column — are exactly the physics a
general-purpose robotics simulator leaves out.

I built an internal simulation tool on top of Isaac Sim that closes that gap. The work spanned three
domains that normally live in separate tools: the **control** stack, an **optical** model for what the
vehicle's cameras would realistically see, and **hydrodynamics** for how the body moves through water.

The engineering judgment here was less about any single model and more about making the result something
the team would actually reach for. A simulator nobody opens is worth nothing, so a large share of the
effort went into making the controls behave the way the real hardware does.
