import { Socket } from "socket.io-client";
import { create } from "zustand";

interface socketObject {
  meet: Socket
  location: Socket
}

export interface ISocketStore {
  socket?: Partial<socketObject>;
  setSocket: (key: keyof socketObject, socket: Socket) => void;
}

export const useSocketStore = create<ISocketStore>((set) => ({
  socket: {},
  setSocket: (key, socket) => set((state) => ({
    socket: {
      ...state.socket,
      [key]: socket,
    },
  })),
}));
