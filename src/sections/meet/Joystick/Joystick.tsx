"use client";

import { useIsMobile } from "@/hooks/common/useIsMobile";

import { useJoystickStore } from "@/hooks/store/useJoystickStore";
import { useShallow } from "zustand/react/shallow";
import { JoystickStyled } from "@/sections/meet/Joystick/Joystick.styled";
import { useTheme } from "@mui/material";
import dynamic from "next/dynamic";

const ReactJoystick = dynamic(
  () => import("react-joystick-component").then((r) => r.Joystick),
  { ssr: false },
);

export const Joystick = () => {
  // Hooks
  const theme = useTheme();
  const isMobile = useIsMobile();

  const { setIsPressed, setJoystick } = useJoystickStore(
    useShallow((state) => ({
      setIsPressed: state.setIsPressed,
      setJoystick: state.setJoystickEvent,
    })),
  );

  if (!isMobile) return <></>;

  return (
    <JoystickStyled>
      <ReactJoystick
        size={120}
        baseColor="rgba(0, 0, 0, 0.2)"
        stickColor={theme.palette.primary.main}
        move={(e) => {
          setIsPressed(true);
          setJoystick(e);
        }}
        stop={(e) => {
          setIsPressed(false);
          setJoystick(e);
        }}
      />
    </JoystickStyled>
  );
};
