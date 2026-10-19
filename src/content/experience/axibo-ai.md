---
role: "Robotics Software Engineering (Co-op)"
org: "Axibo AI"
sector: "Humanoids"
location: "Ontario"
start: "Sept 2026"
end: "April 2027"
order: 9
robotics: true
url: "https://www.axibo.com/"
bullets:
  - "Fine-tune, evaluate and deploy SOTA VLAs (π0.5, GR00T N1.7, DM0.5) end-to-end as generalizable bimanual and whole-body policies, both integrated with the WBC and locomotion policies, with a focus on cross-embodiment and sim-to-real."
  - "Created and designed a batched synthetic data generation toolchain for delta-EE bimanual policies using Genesis World, Isaac, MuJoCo and cuRobo (motion planning). Features like augmentation, domain-randomization, noise improve cross-embodiment."
  - "Accelerated SOTA VLA research iteration and cut compute cost with custom training pipelines and scripts forked from SOTA repos, primarily openpi (JAX/Orbax) (2.5× faster steps) and Isaac-GR00T (PyTorch), without sacrificing benchmarks."
  - "Optimized VLA training through sharding across multi-datacenter GPUs, upgraded version pins, selective weight and optimizer-state quantization, partial backbone freezing/pruning, selective rematerialization and batched checkpointing."
  - "Built batched sim evaluation toolchains with custom success criteria (per-component scoring with penalties) for SOTA bimanual & whole-body policies, ran sim-to-sim & sim-to-real evaluation on a variety of humanoids & bimanual arms, and raised benchmark scores by tuning training recipes & inference settings."
  - "Optimizing real-time inference via RTC & Mixture of Horizons (MoH), tuning denoising steps & prediction horizons."
  - "Productionizing the custom UMI pipeline and developed training recipes to maximize the efficacy of public data and synthetically generated data (including re-simulating public datasets with custom modifications) while minimizing required real-world data."
  - "Deploy bimanual and whole-body policies end-to-end, developing the deployment tooling, workflows and runtime as forks of SOTA systems, integrating WBC and RTC."
  - "Develop the team's agent-centric pipelines, workflows and tooling across the data, training and evaluation stack."
  - "Architect humanoid runtimes spanning LLM/agent-harness orchestration of VLA skills, VLA-driven whole-body control and manipulation policies, and an upper-body VLA with a lower-body locomotion policy, all coordinated through the WBC."
---
