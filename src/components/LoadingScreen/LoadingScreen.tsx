"use client";

import { motion } from "framer-motion";
import { mo_spinner } from './LoadingScreen.motion';
import { LoadingScreenStyled, SpinnerStyled } from "./LoadingScreen.styled";

export const LoadingScreen = () => {
  return (
    <LoadingScreenStyled>
      <motion.div {...mo_spinner}>
        <SpinnerStyled>
        </SpinnerStyled>
      </motion.div>
    </LoadingScreenStyled >
  );
};
