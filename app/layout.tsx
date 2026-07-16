import type { Metadata } from "next";
import { Archivo, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--archivo",
  axes: ["wdth"],
});

const instrument = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--instrument",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--jetbrains",
});

export const metadata: Metadata = {
  title: "Paweł Socha — AI/ML Engineer & Software Developer",
  description:
    "AI/ML Engineer & Software Developer based in Kraków. I build systems where machine learning meets production software.",
  openGraph: {
    title: "Paweł Socha — AI/ML Engineer & Software Developer",
    description:
      "AI/ML Engineer & Software Developer based in Kraków. Machine learning in production software.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
