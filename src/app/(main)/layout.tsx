import { Providers } from "@/components";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC__PROJECT_NAME,
  description: process.env.NEXT_PUBLIC__PROJECT_DESCRIPTION,
};

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
