"use client";

import { useAuth } from "@/hooks/auth/useAuth";
import { AuthProviderProps } from "@/types/app/auth/authProvider.types";
import { useConnectionStatus } from "@thirdweb-dev/react";
import { useRouter, usePathname } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export const AuthProvider = ({
  publicRoutes,
  children,
}: PropsWithChildren<AuthProviderProps>) => {
  const { token, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const connectionStatus = useConnectionStatus();

  useEffect(() => {
    if (!token || connectionStatus === "disconnected") {
      if (!publicRoutes?.includes(pathname)) {
        logout();
      }
    }
  }, [token, router, publicRoutes, connectionStatus]);

  return (
    <>
      {token || publicRoutes?.includes(pathname) || publicRoutes?.length === 0
        ? children
        : null}
    </>
  );
};
