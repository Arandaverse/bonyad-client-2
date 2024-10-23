import { create } from "zustand";

interface IMeetStore {
  activeVideoIndex?: string | number;
  setActiveVideoIndex: (index: string | number) => void;
}

export const useVideoPlayerStore = create<IMeetStore>((set) => ({
  activeVideoIndex: 0,
  setActiveVideoIndex: (activeVideoIndex) => {
    set({ activeVideoIndex });
  },
}));
