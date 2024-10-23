"use client";

import { styled } from "@mui/material";
import Image from "next/image";

export const ImageContainerStyled = styled("div")(({ theme }) => ({
  width: "160px",
  height: "180px",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  margin: "0 auto 40px auto",
}));

export const BrandLogoStyled = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));
