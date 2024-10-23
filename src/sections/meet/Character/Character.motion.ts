import { IMotion } from "@/types/generals/motion.types";

export const mo_character: IMotion = {
  initial: { y: 0 },
  animate: { y: 0.1 },
  transition: {
    duration: 1,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse",
    repeatDelay: 0,
  },
};
