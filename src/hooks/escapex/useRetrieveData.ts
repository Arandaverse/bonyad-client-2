"use client";

import { useGetLocalStorage } from "@/hooks/escapex/useGetLocalStorage";
import { useDecrypt } from "@/hooks/escapex/useDecrypt";
import { IGameData } from "@/hooks/escapex/useInitialGameData";

export interface IGameDataPassword {
  gameData: IGameData;
  password: string;
}
export const useRetrieveData = () => {
  const localStorageGameData = useGetLocalStorage("gameData");
  const localStoragePassword = useGetLocalStorage("password");
  const decryptedGameData = useDecrypt<IGameData>(localStorageGameData, true);
  const decryptedPassword = useDecrypt<string>(localStoragePassword, false);

  const gameDataPassword: IGameDataPassword = {
    gameData: decryptedGameData,
    password: decryptedPassword,
  };

  return gameDataPassword;
};
