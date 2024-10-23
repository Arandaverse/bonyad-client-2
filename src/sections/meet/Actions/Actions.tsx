"use client";

import {
  ActionsStyled,
  IconButtonStyled,
} from "@/sections/meet/Actions/Actions.styled";
import MicIcon from "@mui/icons-material/Mic";
import { RiMic2Line, RiStopLine } from "react-icons/ri";
import { useLogics } from "./_logics";

export const Actions = () => {
  const { handleMicrophone, isRecording } = useLogics();

  return (
    <ActionsStyled>
      <IconButtonStyled onClick={handleMicrophone}>
        {!isRecording ? <RiMic2Line /> : <RiStopLine />}
      </IconButtonStyled>
    </ActionsStyled>
  );
};
