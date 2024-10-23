"use client";

import { IModelProps } from "@/types/app/play/play.types";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { RapierRigidBody } from "@react-three/rapier";
import { useCallback, useEffect, useRef } from "react";
import { Group, LoopOnce, Mesh, Vector3 } from "three";
import { useShallow } from "zustand/react/shallow";

export const useLogics = ({ file }: IModelProps) => {
  const rigidBody = useRef<RapierRigidBody | null>(null);
  const groupRef = useRef<Group | null>(null);
  const character = useGLTF(file);
  const initialPosition = useRef(new Vector3(0, 3, 10));
  const targetPosition = useRef(new Vector3(0, 5, 16));

  const { camera } = useThree(
    useShallow((state) => ({
      camera: state.camera,
    }))
  );

  const ANIMATION_FADE = 0.2;

  const { actions } = useAnimations(character.animations, groupRef);

  const setupAnimations = useCallback(() => {
    Object.keys(actions).map((action) => {
      actions[action]!.loop = LoopOnce;
      actions[action]!.clampWhenFinished = true;
    });
  }, [actions]);

  useEffect(() => {
    setupAnimations();
  }, []);

  useEffect(() => {
    character.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [character.scene]);

  useEffect(() => {
    // Object.keys(actions).map((action) => {
    //   console.log(action);
    // });
    setTimeout(() => {
      actions["metarig"]!.reset().fadeIn(ANIMATION_FADE).play();
    }, 1000);
  }, [actions]);

  useEffect(() => {
    camera.position.copy(initialPosition.current);
    camera.lookAt(0, 40, 0);
  }, [camera]);

  useFrame(() => {
    camera.position.lerp(targetPosition.current, 0.01);
    camera.lookAt(0, 5, 0);
  });

  return { rigidBody, groupRef, character };
};
