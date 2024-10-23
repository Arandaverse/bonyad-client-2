"use client";

import { create } from "zustand";

export interface IPlayerStore {
  players?: IUser[];
  setPlayers: (players: IUser[]) => void;
  setPlayer: (player: IUser) => void;
  removePlayer: (player: IUser) => void;
}

export const usePlayerStore = create<IPlayerStore>((set, getState) => ({
  setPlayers: (players) => {
    set({ players });
  },

  setPlayer: (player) => {
    const prevPlayers = getState().players || [];
    prevPlayers.push(player);
    set({ players: prevPlayers });
  },

  removePlayer: (player) => {
    const prevPlayers = getState().players || [];
    set({ players: prevPlayers.filter((p) => p.id !== player.id) });
  },
}));
