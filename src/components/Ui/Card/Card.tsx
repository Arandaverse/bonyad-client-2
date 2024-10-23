"use client";

import { Defaults, GlassMaterial } from "@/components";
import { ICardProps } from "@/types/components/card.types";
import { useFrame, useThree } from "@react-three/fiber";
import { Container, Root } from "@react-three/uikit";
import { useRef } from "react";
import { Group, MeshBasicMaterial, Object3DEventMap, Quaternion } from "three";

export function UICard({ children, lock, glassy }: ICardProps) {
  const ref = useRef<Group<Object3DEventMap>>(null);
  const { camera } = useThree();
  const targetQuaternion = new Quaternion();

  useFrame(() => {
    if (!lock || !ref.current) return;
    targetQuaternion.copy(camera.quaternion);
    ref.current.quaternion.slerp(targetQuaternion, 0.05);
  });

  return (
    <group ref={ref}>
      <group>
        <_Box glassy={glassy}>{children}</_Box>
      </group>
      <group rotation={[Math.PI, 0, Math.PI]}>
        <_Box glassy={glassy} hiddenContent>
          {children}
        </_Box>
      </group>
    </group>
  );
}

function _Box({ children, hiddenContent, glassy }: ICardProps) {
  return (
    <Root flexDirection="column" pixelSize={0.01}>
      <Defaults>
        <Container
          backgroundColor={"rgba(255, 255, 255)"}
          dark={{ backgroundColor: 0x0 }}
          flexDirection="row"
          padding={40}
          alignItems="center"
          justifyContent="space-between"
          borderRadius={36}
          castShadow
          panelMaterialClass={glassy ? GlassMaterial : MeshBasicMaterial}
        >
          <Defaults visibility={hiddenContent ? "hidden" : "visible"}>
            {children}
          </Defaults>
        </Container>
      </Defaults>
    </Root>
  );
}
