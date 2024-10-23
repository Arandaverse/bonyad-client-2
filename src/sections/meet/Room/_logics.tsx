"use client";

import { RoomLights } from "@/sections/meet/Lights/RoomLights";
import { IModelProps } from "@/types/app/play/play.types";
import { useGLTF } from "@react-three/drei";
import { useCallback, useEffect } from "react";
import { Mesh } from "three";
import { PostProcessing } from "@/sections/meet/PostProcessing/PostProcessing";

export const useLogics = ({ file }: IModelProps) => {
  const roomModel = useGLTF(file);

  useEffect(() => {
    roomModel.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, []);

  const renderLights = useCallback(() => {
    return <RoomLights />;
  }, [file]);

  const renderPostProcessing = useCallback(() => {
    return <PostProcessing />;
  }, [file]);

  return { roomModel, renderPostProcessing, renderLights };
};
