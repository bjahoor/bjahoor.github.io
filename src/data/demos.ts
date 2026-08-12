/**
 * Demo videos are served from their own project repos rather than committed
 * here — keeps this repo (and every Pages deploy) from carrying hundreds of MB.
 *
 * The Thalassa clip is the exception: it is co-op footage with no public repo
 * to host it, so it ships from `public/` instead. Re-encoded to ~3 MB first,
 * which is small enough not to defeat the rule above. Any future local video
 * gets the same treatment — compress it before committing.
 *
 * Lives in its own module because `getStaticPaths()` is hoisted out of the
 * component scope and can only see imports, not frontmatter consts.
 */
export const DEMOS = {
  assistant: {
    title: "AI Roommate",
    project: "ai-roommate",
    src: "https://raw.githubusercontent.com/bjahoor/ai_roommate_assistant/main/Ai%20Room%20Assistant%20Demo.mp4",
  },
  "ai-cam": {
    title: "AI Object Detection",
    project: "ai-object-detection",
    src: "https://github.com/bjahoor/ai_cam_package/raw/main/Realsense%20OWL-ViT%20AI%20Object%20Detection%20Demo.mp4",
  },
  rover: {
    title: "Autonomous Rover Simulation",
    project: "autonomous-rover-simulation",
    src: "https://github.com/bjahoor/ROS2_Construct_Rover/raw/main/Contruct%20Rover%20Demo%20(compressed).mp4",
  },
  thalassa: {
    title: "Thalassa Robotics Simulation Toolchain",
    project: "thalassa-simulation-toolchain",
    src: "/video/thalassa-simulation-toolchain.mp4",
  },
} as const;

export type DemoSlug = keyof typeof DEMOS;
