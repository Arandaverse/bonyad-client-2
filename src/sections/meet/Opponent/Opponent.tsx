"use client";

import { IOpponentProps } from '@/types/app/meet/meet.types';
import { useLogics } from './_logics';

export function Opponenet({ wallet_address, model_url }: IOpponentProps) {
  const { group, scene, scooterScene } = useLogics({ wallet_address, model_url })

  return (
    <group position={[0, 0.8, 0]}>
      <group ref={group} dispose={null}>
        <group name="Character">
          <primitive object={scene} />
        </group>
        <group name="Scooter" position={[0, 0.1, 0]}>
          <primitive object={scooterScene} />
        </group>
      </group>
    </group>
  );
}
