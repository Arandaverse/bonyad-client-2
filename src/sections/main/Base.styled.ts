"use client";

import GroupsIcon from "@mui/icons-material/Groups";
import { Container, Paper, PaperProps, styled } from "@mui/material";
import { RiTeamFill } from "react-icons/ri";

interface PaperStyledProps extends PaperProps {
  important?: boolean;
}

export const BaseStyled = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const ListStyled = styled(Container)(({ theme }) => ({
  display: "flex",
  gap: "20px",
}));

export const PaperStyled = styled(Paper)<PaperStyledProps>(
  ({ theme, important }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    height: "400px",
    borderRadius: "60px",
    cursor: "pointer",
    overflow: "hidden",
  })
);

export const ImageContainerStyled = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
}));

export const PStyled = styled("p")(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 700,
  lineHeight: "25px",
  color: "#000000",
  margin: 0,
}));
