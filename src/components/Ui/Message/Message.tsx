"use client";

import { useLogics } from "./_logics";
import { Container, Text } from "@react-three/uikit";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { UIButton, UICard } from "@/components";
import { mo_box } from "./Message.motion";
import { motion } from "framer-motion-3d";
import { IMessage } from "@/types/components/message.types";
import { AnimatePresence } from "framer-motion";

export const UIMessage = ({
  title,
  buttonTitle,
  args,
  position,
  onSpace,
}: IMessage) => {
  const { messageRef, isShowMessage, isInsideCollider, setIsInsideCollider } =
    useLogics({ position, onSpace });

  return (
    <RigidBody ref={messageRef} colliders={false} type="fixed">
      <AnimatePresence>
        {isShowMessage && (
          <motion.group {...mo_box(isInsideCollider)}>
            <UICard lock>
              <Container
                flexDirection="column"
                justifyContent="center"
                alignItems={"center"}
                gap={16}
              >
                <Text fontWeight="medium" fontSize={24} lineHeight="100%">
                  {title}
                </Text>
                {buttonTitle && (
                  <UIButton
                    marginTop={12}
                    variant="pill"
                    size="lg"
                    selected
                    disabled={!isInsideCollider}
                  >
                    <Text fontWeight="bold">{buttonTitle}</Text>
                  </UIButton>
                )}
              </Container>
            </UICard>
          </motion.group>
        )}
      </AnimatePresence>
      <CuboidCollider
        args={args || [4, 4, 4]}
        sensor
        onIntersectionEnter={() => setIsInsideCollider(true)}
        onIntersectionExit={() => setIsInsideCollider(false)}
      />
    </RigidBody>
  );
};
