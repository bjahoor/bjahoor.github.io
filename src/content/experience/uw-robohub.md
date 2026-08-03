---
role: "Robotics Research Assistant"
org: "University of Waterloo RoboHub"
location: "Ontario"
start: "Sept 2025"
end: "Dec 2025"
order: 7
robotics: true
bullets:
  - "Synced Xsens Awinda IMUs to a 7-axis Franka Emika Panda so the arm mirrors human arm motion."
  - "Built in ROS 2 on Linux/Ubuntu, containerized with Docker for reproducibility across machines."
---

Teleoperation by joystick is slow and unintuitive. The premise of this research is that a
person should be able to move their own arm and have the robot follow.

The setup straps **Xsens Awinda IMUs** to a human operator and streams orientation data into ROS 2, where
it is retargeted onto the seven joints of a **Franka Emika Panda**. The hard part is that a human arm and a
7-DOF manipulator do not share a kinematic structure — mapping one onto the other means resolving
redundancy and staying inside joint limits while the motion still reads as natural.

The whole stack runs in Docker so that a result on one workstation reproduces on another, which matters
more than it sounds in a shared research lab.
