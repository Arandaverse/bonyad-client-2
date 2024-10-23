import { IModelProps } from "@/types/app/play/play.types";
import { RigidBody } from "@react-three/rapier";
import { useLogics } from "./_logics";

export const Room = ({ file }: IModelProps) => {
  const { renderLights, renderPostProcessing, roomModel } = useLogics({ file });

  return (
    <group dispose={null}>
      {renderLights()}
      {renderPostProcessing()}
      <RigidBody type={"fixed"} colliders={"trimesh"} position={[0, 0.5, -30]}>
        <primitive object={roomModel.scene} />
      </RigidBody>
    </group>
  );
};
