import { useRef } from "react";
import { DoubleSide } from "three";
import { RigidBody } from "@react-three/rapier";

export const Ground = () => {
  const rigidBodyRef = useRef(null);

  return (
    <group>
      <RigidBody
        ref={rigidBodyRef}
        type={"fixed"}
        rotation-x={-Math.PI / 2}
        colliders={"cuboid"}
        friction={0}
      >
        <mesh receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color={"#333"} side={DoubleSide} />
        </mesh>
      </RigidBody>
    </group>
  );
};
