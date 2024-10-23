import { IMotion } from "@/types/generals/motion.types";

export const mo_content: IMotion = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    ease: "anticipate",
  },
};
export const mo_footer: IMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 2,
  },
};
