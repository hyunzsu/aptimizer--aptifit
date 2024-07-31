import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components";
import "./globals.css";

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "앱티마이저 | 스누로",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={pretendard.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
