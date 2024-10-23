"use client";

import { styled } from "@mui/material";

export const MeetStyled = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const MeetItemStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  rowGap: "10px",
  backgroundColor: "#ffffff",
  width: "288px",
  height: "80px",
  borderRadius: "24px",
  padding: "0 20px",
  marginBottom: "68px",
}));

export const PStyled = styled("p")<{ onlineNumber?: boolean; white?: boolean }>(
  ({ theme, onlineNumber, white }) => ({
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "25px",
    margin: 0,
    ...(white && {
      color: "#ffffff",
    }),
    ...(onlineNumber && {
      fontSize: "12px",
      color: "#2042EE",
    }),
  })
);
