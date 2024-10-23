import { useMouseStore } from "@/hooks/store/useMouseStore";
import { useEffect } from "react";

interface IUseMouseReturn {
  x: number;
  y: number;
}

export const useMouse = (): IUseMouseReturn => {
  const setMovement = useMouseStore((state) => state.setMovement);
  const movement = useMouseStore((state) => ({
    x: state.movementX,
    y: state.movementY,
  }));

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMovement(e.movementX / 1000, e.movementY / 1000);
    });
  }, [setMovement]);

  return movement;
};
