import "./globals.css";
import type { ReactNode } from "react";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "VEKS - Forside",
  description: "VEKS - En af Danmarks største fjernvarmevirksomheder.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="da">
      <body className={`${sourceSans.variable} ${libre.variable}`}>
        {children}
      </body>
    </html>
  );
}
