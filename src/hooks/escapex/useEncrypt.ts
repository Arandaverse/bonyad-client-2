"use client";

import Cryptr from "cryptr";

export const useEncrypt = (message: string | any, isObject: boolean) => {
  const cryptr = new Cryptr(process.env.NEXT_PUBLIC_SECRET_KEY as string);

  if (isObject) {
    return cryptr.encrypt(JSON.stringify(message));
  }
  return cryptr.encrypt(message as string);
};
