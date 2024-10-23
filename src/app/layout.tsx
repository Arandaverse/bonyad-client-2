import { Providers } from "@/components";
import { PropsWithChildren, useEffect, useState } from "react";
import "@/styles/css/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC__PROJECT_NAME,
  description: process.env.NEXT_PUBLIC__PROJECT_DESCRIPTION,
  icons: {
    // icon: "/images/brand/favicon.ico",
  },
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
