import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { data } from "./data/resume";

const inter = Inter({ subsets: ["latin"], preload: true });

export const metadata: Metadata = {
  title: data.name,
  description: data.description,
  authors: [{ name: data.name, url: data.url }],
  abstract: 'Portfolio of a fullstack engineer',
  creator: data.name,
  generator: "Next.js",
  keywords: ["phurin", "nararat", "Phurin", "Nararat", "Phurin Nararat", "fullstack", "engineer", "portfolio", "resume",],
  publisher: 'Vercel',
  openGraph: {
    type: 'website',
    url: data.url,
    title: data.name,
    description: data.description,
    siteName: data.name,
    images: [data.url],
  },
  twitter: {
    card: "summary_large_image",
    title: data.name,
    description: data.description,
    images: [data.url],
  },
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
};