export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeCookie = "NEXT_LOCALE";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Every translatable field holds all locales, so adding an entry without a
// translation fails type checking instead of silently rendering a gap.
export type Localized = Record<Locale, string>;

export const ui = {
  en: {
    title: "Paweł Socha — AI/ML Engineer & Software Developer",
    description:
      "AI/ML Engineer & Software Developer based in Kraków. I build systems where machine learning meets production software.",
    ogDescription:
      "AI/ML Engineer & Software Developer based in Kraków. Machine learning in production software.",
    ogLocale: "en_US",
    nav: { work: "Work", experience: "Experience", contact: "Contact" },
    switchTo: { label: "PL", title: "Polska wersja" },
    intro: {
      lead: "AI/ML Engineer & Software Developer.",
      before: " I build systems where machine learning meets ",
      highlight: "production software",
      after:
        " — from classifying 3D building models to LLM-powered tools people use every day.",
    },
    degree: "M.Eng Applied CS — AI · 2026",
    work: "Selected Work",
    experience: "Experience",
    experienceRange: "2022 — now",
    stack: "Stack",
    stackNote: "Tools I ship with",
    education: "Education",
    educationNote: "+ Certs",
    contact: { before: "Let's ", link: "talk" },
  },
  pl: {
    title: "Paweł Socha — AI/ML Engineer i Software Developer",
    description:
      "AI/ML Engineer i Software Developer z Krakowa. Buduję systemy, w których uczenie maszynowe spotyka się z oprogramowaniem produkcyjnym.",
    ogDescription:
      "AI/ML Engineer i Software Developer z Krakowa. Uczenie maszynowe w oprogramowaniu produkcyjnym.",
    ogLocale: "pl_PL",
    nav: { work: "Projekty", experience: "Doświadczenie", contact: "Kontakt" },
    switchTo: { label: "EN", title: "English version" },
    intro: {
      lead: "AI/ML Engineer i Software Developer.",
      before: " Buduję systemy, w których uczenie maszynowe spotyka się z ",
      highlight: "oprogramowaniem produkcyjnym",
      after:
        " — od klasyfikacji modeli 3D budynków po narzędzia oparte na LLM, z których ludzie korzystają na co dzień.",
    },
    degree: "Mgr inż. informatyki — AI · 2026",
    work: "Wybrane projekty",
    experience: "Doświadczenie",
    experienceRange: "2022 — dziś",
    stack: "Stack",
    stackNote: "Narzędzia, których używam",
    education: "Edukacja",
    educationNote: "+ Certyfikaty",
    contact: { before: "", link: "Pogadajmy" },
  },
} satisfies Record<Locale, unknown>;
