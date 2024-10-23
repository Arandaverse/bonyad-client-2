"use client";

import { useOpponentsStore } from "@/hooks/store/useOpponentsStore";
import { IOpponentProps } from '@/types/app/meet/meet.types';
import { useAnimations, useGLTF } from "@react-three/drei";
import { vec3 } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { Group } from "three";

export const useLogics = ({ wallet_address, model_url }: IOpponentProps) => {
    const group = useRef<Group>();
    const { nodes, materials, animations, scene } = useGLTF(model_url);
    const { scene: scooterScene } = useGLTF("/model/characters/scooter.gltf");
    const { actions } = useAnimations(animations, group);

    const opponent = useOpponentsStore((state) =>
        state.opponents.find(
            (opponent) => opponent.wallet_address === wallet_address
        )
    );

    useEffect(() => {
        if (group.current && opponent) {
            group.current.position.copy(
                vec3({
                    x: opponent.position.x,
                    y: opponent.position.y,
                    z: opponent.position.z,
                })
            );

            group.current?.rotation.copy({
                x: opponent.rotation.x,
                y: opponent.rotation.y,
                z: opponent.rotation.z,
                w: opponent.rotation.w || 0,
            });
        }
    }, [opponent]);

    return { group, scene, scooterScene }
}