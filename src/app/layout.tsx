import React, { ReactNode } from "react";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

type LayoutProps = {
  children: ReactNode;
  login: boolean; // Add this line
};

export default function RootLayout({ children, login }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
