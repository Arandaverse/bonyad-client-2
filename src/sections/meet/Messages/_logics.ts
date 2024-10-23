"use client";

import { useThree } from "@react-three/fiber";
import { useShallow } from "zustand/react/shallow";

export const useLogics = () => {
  const { scene } = useThree(
    useShallow((state) => ({
      scene: state.scene,
    }))
  );
  return { scene };
};
