import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className='h-dvh'>
        <main className='h-[91%]'>
          {children}
          {modal}
        </main>
        <NavBar />
      </body>
    </html>
  );
}
