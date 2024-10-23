"use client";

import { lexend } from "@/styles/theme/fonts";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: lexend.style.fontFamily,
  },
  palette: {
    primary: { main: '#2042EE' },
    secondary: { main: '#2042EE' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "16px 26px",
          width: "fit-content",
          borderRadius: 26,
          height: "auto",
          fontSize: 20,
          fontWeight: 700,
          gap: 10,
          color: "#000000",
          backgroundColor: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#333333",
            color: "#FFFFFF",
          },
          "& .MuiButton-startIcon": {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2042EE",
            color: "#FFFFFF",
            padding: "6px",
            borderRadius: 16,
          },
          "& .MuiButton-startIcon svg": {
            fontSize: 30,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: 407,
          height: 52,
          borderRadius: 20,
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 10px 40px 0px #2042EE66",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginBottom: 22,
          width: "100%",
          fontSize: 20,
          fontWeight: 700,
          color: "#FFFFFF",
          textAlign: "center",
        },
      },
    },
  },
});

export const globalStyles = {
  body: {
    backgroundImage: "url('/images/interface/background.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    margin: 0,
    padding: 0,
    height: "100vh",
  },
};
