"use client";

export const RoomLights = () => {
  return (
    <group dispose={null}>
      <directionalLight
        position={[-20, 10, -20]}
        intensity={2}
        color={"#ffffff"}
      />
      <directionalLight
        position={[30, 10, -20]}
        intensity={2}
        color={"#ffffff"}
      />
      <directionalLight
        position={[-2, 10, 10]}
        intensity={1}
        color={"#ffffff"}
      />
      <ambientLight intensity={0.6} color={"#ffffff"} />
      <rectAreaLight
        position={[4, 6, 2]}
        rotation={[-Math.PI / 2, 0, 0]}
        width={10}
        height={10}
        intensity={0.8}
        color={"#ffffff"}
      />
      <rectAreaLight
        position={[1, 8, -6]}
        rotation={[-Math.PI, Math.PI / 4, 0]}
        width={8}
        height={8}
        intensity={10}
        color={"#ffffff"}
      />
      <rectAreaLight
        position={[-1, 8, -6]}
        rotation={[-Math.PI, -Math.PI / 4, 0]}
        width={8}
        height={8}
        intensity={10}
        color={"#ffffff"}
      />
      <directionalLight
        position={[-10, 14, 4]}
        intensity={1}
        color={"#ffffff"}
      />
      <directionalLight
        position={[0, -20, 40]}
        intensity={0.5}
        color={"#ffffff"}
      />
    </group>
  );
};
