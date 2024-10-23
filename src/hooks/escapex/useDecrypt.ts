"use client";

import Cryptr from "cryptr";
import { IGameData } from "@/hooks/escapex/useInitialGameData";

export const useDecrypt = <Type>(
  message: string,
  isGameData: boolean,
): Type => {
  const secret_key = process.env.NEXT_PUBLIC_SECRET_KEY!;
  const cryptr = new Cryptr(secret_key);
  if (isGameData) {
    return JSON.parse(cryptr.decrypt(message)) as Type;
  }
  return cryptr.decrypt(message) as Type;
};
