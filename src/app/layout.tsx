import type { Metadata } from "next";
import { Road_Rage, Roboto } from "next/font/google";
import "./globals.css";
import { jejuSerif, roadRage, roboto } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roadRage.variable} ${roboto.variable} ${jejuSerif.variable} antialiased bg-`}
      >
        {children}
      </body>
    </html>
  );
}
