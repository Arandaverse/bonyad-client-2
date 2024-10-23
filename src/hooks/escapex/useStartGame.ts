"use client";

import { useInitialGameData } from "@/hooks/escapex/useInitialGameData";
import { useGeneratePassword } from "@/hooks/escapex/useGeneratePassword";
import { useEncrypt } from "@/hooks/escapex/useEncrypt";
import { useStoreLocalStorage } from "@/hooks/escapex/useStoreLocalStorage";

export const useStartGame = () => {
  const gameData = useInitialGameData();
  const password = useGeneratePassword(gameData);

  const encryptedGameData = useEncrypt(gameData, true);
  const encryptedPassword = useEncrypt(password, false);

  useStoreLocalStorage("gameData", encryptedGameData);
  useStoreLocalStorage("password", encryptedPassword);
};
