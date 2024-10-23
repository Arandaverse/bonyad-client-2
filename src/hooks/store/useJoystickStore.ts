import { create } from "zustand";
import { IJoystickUpdateEvent } from "react-joystick-component/build/lib/Joystick";

export interface IJoystickStore {
  isPressed: boolean;
  setIsPressed: (isPressed: boolean) => void;

  joystickEvent?: IJoystickUpdateEvent;
  setJoystickEvent: (joystickEvent: IJoystickUpdateEvent) => void;
}

export const useJoystickStore = create<IJoystickStore>((set) => ({
  isPressed: false,
  setIsPressed: (isPressed: boolean) => {
    set({ isPressed });
  },

  setJoystickEvent: (joystickEvent: IJoystickUpdateEvent) => {
    set({ joystickEvent });
  },
}));
