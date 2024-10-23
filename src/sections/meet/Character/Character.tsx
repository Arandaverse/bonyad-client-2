"use client";

import { IModelProps } from "@/types/app/play/play.types";
import { RigidBody, RoundCuboidCollider } from "@react-three/rapier";
import { useLogics } from "./_logics";
import { motion } from "framer-motion-3d";
import { mo_character } from "./Character.motion";

export const Character = ({ file }: IModelProps) => {
  const { rigidBody, groupRef, character } = useLogics({ file });

  return (
    <motion.group>
      <RigidBody
        ref={rigidBody}
        lockRotations
        colliders="cuboid"
        linearDamping={12}
        type={"fixed"}
      >
        <group
          ref={groupRef}
          position={[0, 0.7, 0]}
          rotation={[0, 0, 0]}
          dispose={null}
        >
          <primitive object={character.scene} />
          <RoundCuboidCollider
            args={[0.3, 1, 0.3, 0.2]}
            position={[0, 0.7, 0]}
          />
        </group>
      </RigidBody>
    </motion.group>
  );
};
