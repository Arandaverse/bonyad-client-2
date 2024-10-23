"use client";

import { IGameData } from "@/hooks/escapex/useInitialGameData";

export const useGeneratePassword = (gameData: IGameData) => {
  let passwordString = "";

  gameData.passwordColors.map((passwordColor) => {
    const colorNumber = gameData.colorNumbersData.filter(
      (colorNumber) => colorNumber.colorName === passwordColor,
    );
    passwordString = passwordString + String(colorNumber[0].number);
  });

  return passwordString;
};
