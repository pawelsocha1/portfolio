import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Archivo,
  JetBrains_Mono,
  Rubik_Spray_Paint,
  Saira_Stencil_One,
} from "next/font/google";
import { isLocale, locales, ui } from "../i18n";
import "../globals.css";

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

// Only /en and /pl exist; any other first segment is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = ui[lang];
  return {
    metadataBase: new URL("https://paboud.vercel.app"),
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", pl: "/pl", "x-default": "/" },
    },
    openGraph: {
      title: t.title,
      description: t.ogDescription,
      locale: t.ogLocale,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode } & Props>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html
      lang={lang}
      className={`${archivo.variable} ${sprayPaint.variable} ${stencil.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
