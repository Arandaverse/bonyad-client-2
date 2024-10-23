import { create } from "zustand";

interface IMouseStore {
  movementX: number;
  movementY: number;
  setMovement: (x: number, y: number) => void;
}

export const useMouseStore = create<IMouseStore>((set) => ({
  movementX: 0,
  movementY: 0,
  setMovement: (x, y) => {
    set({ movementX: x, movementY: y });
  },
}));
