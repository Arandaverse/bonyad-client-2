"use client";

import { useDecrypt } from "@/hooks/escapex/useDecrypt";

export const useGetLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(key);
    if (!value) {
      return "No such key";
    }
    return value;
  } else {
    return "Window is not available";
  }
};
