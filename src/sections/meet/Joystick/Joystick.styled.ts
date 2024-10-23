"use client";

import { styled } from "@mui/material";

export const JoystickStyled = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  bottom: 0,
  padding: theme.spacing(1),
  margin: theme.spacing(4),
}));
