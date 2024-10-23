"use client";

import { useKeyboard } from "@/hooks/common/useKeyboard";
import { ILogics } from "@/types/components/message.types";
import { RapierRigidBody, vec3 } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";

export const useLogics = ({ onSpace, position }: ILogics) => {
  const messageRef = useRef<RapierRigidBody | null>(null);
  const [isInsideCollider, setIsInsideCollider] = useState(false);
  const [isShowMessage, setIsShowMessage] = useState(true);
  const keyboard = useKeyboard();

  function getInput(keyboard: Record<string, boolean>) {
    return {
      accept: keyboard[" "],
    };
  }
  const { accept } = getInput(keyboard);

  useEffect(() => {
    messageRef.current?.setTranslation(vec3(position), true);
  }, [position]);

  useEffect(() => {
    if (!isInsideCollider) return;
    accept && onSpace && onSpace({ hideMe: () => setIsShowMessage(false) });
  }, [accept]);

  return { messageRef, isShowMessage, isInsideCollider, setIsInsideCollider };
};
