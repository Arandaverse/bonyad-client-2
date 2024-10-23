"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const useAuth = () => {
  const router = useRouter();

  const getToken = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  };

  const login = useCallback((token: string) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("token", token);
    }
    router.push("/");
  }, []);

  const logout = useCallback(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("token");
    }
    router.push(process.env.NEXT_PUBLIC__ROUTE_SIGNIN);
  }, []);

  return {
    token: getToken(),
    login,
    logout,
  };
};
