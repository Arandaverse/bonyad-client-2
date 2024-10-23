import { IMotion } from "@/types/generals/motion.types";

export const mo_over: IMotion = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  transition: {
    duration: 3,
    delay: 0.5,
    ease: "anticipate",
  },
};

export const mo_player: IMotion = {
  initial: { scale: 1.3 },
  animate: { scale: 1 },
  transition: {
    duration: 3,
    delay: 0.5,
    ease: "anticipate",
  },
};
