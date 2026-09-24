import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, localeCookie, type Locale } from "./app/i18n";

const oneYear = 60 * 60 * 24 * 365;

// Picks the best supported locale from an Accept-Language header such as
// "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7", honouring the q-weights.
function fromAcceptLanguage(header: string | null): Locale | undefined {
  if (!header) return undefined;
  return header
    .split(",")
    .map((part) => {
      const [tag, ...attrs] = part.trim().toLowerCase().split(";");
      const q = attrs.find((a) => a.trim().startsWith("q="));
      return { lang: tag.split("-")[0], q: q ? Number(q.split("=")[1]) : 1 };
    })
    .filter((entry) => entry.q > 0)
    .sort((a, b) => b.q - a.q)
    .map((entry) => entry.lang)
    .find(isLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1] ?? "";

  // Visiting /en or /pl (including via the nav switch) records the choice,
  // so the next visit to / goes straight there regardless of browser language.
  if (isLocale(segment)) {
    const response = NextResponse.next();
    if (request.cookies.get(localeCookie)?.value !== segment) {
      response.cookies.set(localeCookie, segment, {
        maxAge: oneYear,
        path: "/",
        sameSite: "lax",
      });
    }
    return response;
  }

  const saved = request.cookies.get(localeCookie)?.value;
  const locale =
    (saved && isLocale(saved) ? saved : undefined) ??
    fromAcceptLanguage(request.headers.get("accept-language")) ??
    defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(url, 307);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  // Skip Next internals and anything that looks like a file (favicon, images).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
