"use client";

import { useKeyboard } from "@/hooks/common/useKeyboard";
import { useMouseCapture } from "@/hooks/common/useMouseCapture";
import { useOpponentsStore } from "@/hooks/store/useOpponentsStore";
import { useSocketStore } from "@/hooks/store/useSocketStore";
import { useEffect } from 'react';

export const useLogics = () => {
    function getInput(
        keyboard: Record<string, boolean>,
        mouse: { x: number; y: number }
    ) {
        let [x, y, z] = [0, 0, 0];
        if (keyboard["s"] || keyboard["S"]) z += 1.0;
        if (keyboard["w"] || keyboard["W"]) z -= 1.0;
        if (keyboard["d"] || keyboard["D"]) x += 1.0;
        if (keyboard["a"] || keyboard["A"]) x -= 1.0;

        return {
            move: [x, y, z],
            movingForward: keyboard["w"] || keyboard["W"],
            movingBackward: keyboard["s"] || keyboard["S"],
            look: [mouse.x / window.innerWidth, mouse.y / window.innerHeight],
            running: keyboard["Shift"],
        };
    }

    const opponentsStore = useOpponentsStore((state) => state);
    const socket = useSocketStore((state) => state.socket);
    const keyboard = useKeyboard();
    const mouse = useMouseCapture();

    useEffect(() => {
        socket?.location?.on("user_updated_location", (data) => {
            opponentsStore.updateOpponent(
                data.wallet_address,
                {
                    x: data.user_location_x,
                    y: data.user_location_y,
                    z: data.user_location_z,
                },
                {
                    x: data.user_rotation_x,
                    y: data.user_rotation_y,
                    z: data.user_rotation_z,
                }
            );
        });

        socket?.meet?.on("user_left_meet", (data) => {
            opponentsStore.removeOpponent(data.participant_id);
        });
    }, []);

    return { getInput, opponentsStore, keyboard, mouse }
}