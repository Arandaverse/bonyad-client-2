"use client";

import { Character } from "@/sections/meet/Character/Character";
import { Room } from "@/sections/meet/Room/Room";
import { IExperienceProps } from "@/types/app/play/play.types";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { useLogics } from "./_logics";
import { Canvas } from "@react-three/fiber";
import { Actions } from "../Actions/Actions";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export const Experience = ({ room, character }: IExperienceProps) => {
  return (
    <>
      {/* <Canvas
        style={{ width: "100vw", height: "100vh", background: "#333" }}
        camera={{ fov: 40, near: 1, far: 1000, zoom: 6 }}
        shadows
        gl={{ preserveDrawingBuffer: process.env.NEXT_PUBLIC__IS_EDITOR }}
      >
        <Suspense fallback={null}>
          <Physics>
            <Room file={room} />
            <Character file={character} />
          </Physics>
        </Suspense>
      </Canvas> */}
      <VideoPlayer />
      <Actions />
    </>
  );
};

export default Experience;
