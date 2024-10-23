"use client";

import { useOpponentsStore } from "@/hooks/store/useOpponentsStore";
import { useSocketStore } from "@/hooks/store/useSocketStore";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useAuth } from "../auth/useAuth";

export const useMeetSocket = (meet_uid: string) => {
  const socket = useSocketStore((state) => state.socket);
  const opponentsStore = useOpponentsStore((state) => state);
  const { token } = useAuth();

  useEffect(() => {
    if (!socket?.meet || !meet_uid) return;

    const initializeSocket = async () => {
      socket.meet?.connect();

      socket.meet?.on("connect", async () => {
        const user = token && jwtDecode<IUser>(token);

        if (!user) return;

        // console.log("CONNECTED_SOCKET: MEET");

        // socket.meet?.emit("leaveMeet", { meet_uid });
        socket.meet?.emit("joinMeet", { meet_uid }, (data) => {
          data.participants.forEach((participant) => {
            if (
              user.context.wallet_address !==
              participant.participant.wallet_address
            ) {
              opponentsStore.addOpponent({
                wallet_address: participant.participant.wallet_address,
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },
                character: participant.participant.character,
              });
            }
          });
        });

        socket.meet?.on("user_joined_meet", (data) => {
          if (user.wallet_address !== data.wallet_address) {
            opponentsStore.addOpponent({
              wallet_address: data.participant.wallet_address,
              position: { x: 0, y: 0, z: 0 },
              rotation: { x: 0, y: 0, z: 0 },
              character: data.participant.character,
            });
          }
        });

        socket.meet?.on("user_left_meet", (data) => {
          // console.log("User left:", data);
          opponentsStore.removeOpponent(data.participant.wallet_address);
        });
      });

      socket.meet?.on("disconnect", () => {
        // console.log("DISCONNECTED_SOCKET: MEET");
        socket.meet?.emit("leaveMeet", { meet_uid });
      });
    };

    initializeSocket();

    const handleBeforeUnload = () => {
      if (socket.meet?.connected) {
        socket.meet?.disconnect();
        socket.meet?.emit("leaveMeet", { meet_uid });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      if (socket.meet?.connected) {
        socket.meet?.disconnect();
        socket.meet?.emit("leaveMeet", { meet_uid });
      }
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [socket]);
};
