"use client";

import { useLogics } from "./_logics";
import { UIMessage } from "@/components";
import { Vector3 } from "three";

export const Messages = () => {
  const { scene } = useLogics();

  return (
    <>
      <UIMessage
        title="Wellcome to the Meet"
        buttonTitle="Press SPACE"
        args={[10, 3, 5]}
        position={
          scene.getObjectByName(`POINT-MESSAGE-MAIN`)?.position ||
          new Vector3(0, 0, 0)
        }
        onSpace={({ hideMe }) => hideMe()}
      />
    </>
  );
};
