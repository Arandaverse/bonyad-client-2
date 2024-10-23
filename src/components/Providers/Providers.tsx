"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { PropsWithChildren } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme, globalStyles } from "@/styles/theme/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyles } from "@mui/material";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { AuthProvider } from "./Auth";
import { PUBLUC_ROUTES, QUERY_CLIENT } from "./Providers.constants";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThirdwebProvider>
      <QueryClientProvider client={QUERY_CLIENT}>
        <AuthProvider publicRoutes={PUBLUC_ROUTES}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <GlobalStyles styles={globalStyles} />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThirdwebProvider>
  );
};
