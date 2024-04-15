import type { Metadata } from "next";
import { Inter, Comfortaa, IBM_Plex_Sans, Rubik } from "next/font/google";

import "./globals.css";
import NavBar from "../components/layout/NavBar";
import { twMerge } from "tailwind-merge";

const font = Rubik({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Controla",
  description: "App for your interior design projects control",
  keywords: [
    "nextjs",
    "react",
    "react server components",
    "interior design",
    "project management",
    "project",
  ],
  creator: "Anderboi",
  openGraph: {
    type: "website",
    title: "Controla",
    description: "App for your interior design projects control",
    url: "https://controla.app/",
    siteName: "Controla",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={twMerge("h-dvh", font.className)}>
        <main className="px-2 pb-2 space-y-2">
          {children}
          {modal}
        </main>
        <NavBar />
      </body>
    </html>
  );
}
