import { create } from "zustand";

interface IMeetStore {
  meets?: Meet[];
  setMeets: (meets: Meet[]) => void;
}

export const useMeetStore = create<IMeetStore>((set) => ({
  meets: [],
  setMeets: (meets) => {
    set({ meets });
  },
}));
