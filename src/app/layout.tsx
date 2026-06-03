import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Projektimperiet | Projektledning, Byggledning & Beställarstöd",
  description:
    "Projektledning, byggledning och beställarstöd för bygg- och anläggningsprojekt. Vi hjälper kommuner, fastighetsägare, BRF:er och fastighetsutvecklare från idé till överlämning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={inter.className}>{children}</body>
    </html>
  );
}