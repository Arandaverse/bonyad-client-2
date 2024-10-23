"use client";

export const useOpenDoor = (userPassword: string, realPassword: string) => {
  return userPassword === realPassword;
};
