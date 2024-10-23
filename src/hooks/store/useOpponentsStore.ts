import { create } from "zustand";

interface Vector3 {
  x: number;
  y: number;
  z: number;
  w?: number;
}

interface Opponent {
  character: ICharacter;
  wallet_address: string;
  position: Vector3;
  rotation: Vector3;
}

interface OpponentsStore {
  opponents: Opponent[];
  addOpponent: (opponent: Opponent) => void;
  updateOpponent: (
    wallet_address: string,
    position: Vector3,
    rotation: Vector3
  ) => void;
  removeOpponent: (wallet_address: string) => void;
}

export const useOpponentsStore = create<OpponentsStore>((set) => ({
  opponents: [],
  addOpponent: (opponent) =>
    set((state) => {
      if (
        !state.opponents.some(
          (o) => o.wallet_address === opponent.wallet_address
        )
      ) {
        return {
          opponents: [...state.opponents, opponent],
        };
      }
      return state;
    }),
  updateOpponent: (wallet_address, position, rotation) =>
    set((state) => {
      return {
        opponents: state.opponents.map((opp) =>
          opp.wallet_address === wallet_address
            ? { ...opp, position, rotation }
            : opp
        ),
      };
    }),
  removeOpponent: (wallet_address) =>
    set((state) => ({
      opponents: state.opponents.filter(
        (opp) => opp.wallet_address !== wallet_address
      ),
    })),
}));
