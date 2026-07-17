import type { Metadata } from "next";
import {
  Archivo,
  JetBrains_Mono,
  Rubik_Spray_Paint,
  Saira_Stencil_One,
} from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--archivo",
  axes: ["wdth"],
});

const sprayPaint = Rubik_Spray_Paint({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--spray",
});

const stencil = Saira_Stencil_One({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--stencil",
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
      className={`${archivo.variable} ${sprayPaint.variable} ${stencil.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
