import type { Metadata } from "next";
import { Inter, Comfortaa, IBM_Plex_Sans, Rubik } from "next/font/google";

import "./globals.css";
import NavBar from "../components/layout/NavBar";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "@/components/themeProvider";
import { Toaster } from "@/components/ui/sonner";

const font = Rubik({ subsets: ["cyrillic"] });

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
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
  login,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  login: React.ReactNode;
}>) {
  return (
    <html lang="ru" >
      <body
        className={twMerge(
          `
            flex 
            flex-col 
            min-h-dvh 
            bg-primary-bg-light
            dark:bg-primary-bg-dark
            max-sm:no-scrollbar
            `,
          font.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main
            className="
              px-2
              pb-20
              mb-1
              grow
              overflow-y-scroll
              flex
              flex-col
            "
          >
            {/* {user !==null ? children : login} */}
            {children}
            {modal}
          </main>
          <Toaster position="top-right" richColors />
          <NavBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
