import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { data } from "./data/resume";

const inter = Inter({ subsets: ["latin"], preload: true });

export const metadata: Metadata = {
  title: data.name,
  description: data.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased max-w-2xl mx-auto pt-4`}
      >
        {children}
      </body>
    </html>
  );
}
