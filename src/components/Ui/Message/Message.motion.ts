import { IMotion } from "@/types/generals/motion.types";

export const mo_box = (active: boolean): IMotion => ({
  initial: { y: 0, scale: 1 },
  animate: active ? { y: 0.5, scale: 1.4 } : { y: 0, scale: 1 },
  exit: { y: 0, scale: 0 },
  transition: {
    duration: 0.8,
    ease: "anticipate",
  },
});
