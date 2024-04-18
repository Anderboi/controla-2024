import type { Metadata } from "next";
import { Inter, Comfortaa, IBM_Plex_Sans, Rubik } from "next/font/google";

import "./globals.css";
import NavBar from "../components/layout/NavBar";
import { twMerge } from "tailwind-merge";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";

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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "#118A65" },
        layout: { socialButtonsVariant: "iconButton" },
      }}
    >
      <html lang="ru" className="h-full">
        <body
          className={twMerge(
            `
            flex 
            flex-col 
            min-h-dvh 
            bg-primary-bg-light
            dark:bg-primary-bg-dark
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
              pb-16
              mb-2
              space-y-2
              //h-[calc(100dvh-80px)]
              grow
              overflow-y-scroll
              flex
              flex-col
            "
            >
              {children}
              {modal}
            </main>
            <NavBar />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
