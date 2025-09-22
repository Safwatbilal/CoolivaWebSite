import type { Metadata } from "next";
import "./globals.css";
import {  IBM_Plex_Sans_Arabic } from "next/font/google";
export const metadata: Metadata = {
  title: "Cooliva",
  description: "Cooliva",
};

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100","200","300","400","500","600","700"],
  variable: "--font-ibmArabic",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="ar"  className={`${ibmArabic.variable}`}>
      <body >
        {children}
      </body>
    </html>
  );
}
