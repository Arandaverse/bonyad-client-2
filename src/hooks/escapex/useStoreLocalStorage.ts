"use client";

export const useStoreLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") localStorage.setItem(key, value);
};
