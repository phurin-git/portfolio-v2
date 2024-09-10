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
        className={`${inter.className} max-w-2xl dark:text-white dark:bg-black antialiased pt-4 mx-auto overscroll-none`}
      >
        {children}
      </body>
    </html>
  );
}
