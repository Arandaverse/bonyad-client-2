"use client";

import { useSocketStore } from "@/hooks/store/useSocketStore";
import { useEffect } from "react";

export const useLocationSocket = (meet_uid: string) => {
  const socket = useSocketStore((state) => state.socket);

  useEffect(() => {
    if (!socket?.location || !meet_uid) return;

    const initializeLocationSocket = () => {
      socket.location?.connect();

      socket.location?.on("connect", () => {
        console.log("CONNECTED_SOCKET: LOCATION");

        socket.location?.on("user_updated_location", (data) => {
          // console.log("Location Changed: ", data);
        });
      });

      socket.location?.on("disconnect", () => {
        console.log("DISCONNECTED_SOCKET: LOCATION");
      });
    };

    initializeLocationSocket();

    const handleBeforeUnload = () => {
      if (socket.location?.connected) {
        socket.location?.disconnect();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      if (socket.location?.connected) {
        socket.location?.disconnect();
      }
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [socket]);
};
