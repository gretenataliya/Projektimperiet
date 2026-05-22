import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Projektimperiet AB | Projektledning inom bygg och anläggning",
  description:
    "Projektimperiet AB erbjuder projektledning, projektstyrning och teknisk samordning för BRF:er, fastighetsägare, entreprenörer och beställare.",

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}