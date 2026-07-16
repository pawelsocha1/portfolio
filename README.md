# Paweł Socha — Portfolio

Osobiste portfolio: AI/ML Engineer & Software Developer.

**Stack:** Next.js 15 · React 19 · TypeScript · czysty CSS (bez frameworków UI)

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy na Vercel

Najprościej przez CLI:

```bash
npx vercel login   # jednorazowo
npx vercel --prod
```

Albo przez GitHub: wypchnij repo na GitHuba i zaimportuj projekt na [vercel.com/new](https://vercel.com/new) — zero konfiguracji, Vercel sam wykrywa Next.js.

## Struktura

- [app/page.tsx](app/page.tsx) — cała treść strony (projekty, doświadczenie, skills, edukacja)
- [app/globals.css](app/globals.css) — design system (zmienne CSS w `:root`)
- [app/reveal.tsx](app/reveal.tsx) — animacje przy scrollowaniu (IntersectionObserver)

Edycja treści = edycja tablic `projects` / `skills` na górze `page.tsx`.
