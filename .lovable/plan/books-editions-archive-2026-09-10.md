# Books & Editions Archive

Add a full editions archive at `/books`, drawn from your catalogue file and the storefront screenshot, in exactly the existing ivory-and-charcoal typographic style. Nothing about the current look, fonts, or wording of the existing pages changes.

## What you'll get

**A new `/books` page** listing every edition of the three novels, grouped:

- The Secret History (1992) — 17 editions
- The Little Friend (2002) — 13 editions
- The Goldfinch (2013) — 20 editions
- Collections & Boxed Sets — 3 items

Each entry shows the title as published, the language, the format, the publisher/binding note, and a cover.

**A quiet filter bar** at the top: a search field, plus plain text filters for work, language and format. Set in small caps in the same tracking as the current navigation — no dropdapp-store chrome, no ratings, no price tags, no badges.

**Links from each novel's page.** Every book page gains a short line at the foot of the publication panel — "Editions in fifteen languages" — leading to that novel's section of the archive.

## Covers

Real jacket images for the principal English, French, German, Italian, Spanish, Dutch, Portuguese and Polish editions, sourced from the Open Library cover service by ISBN — a public bibliographic source, not AI-generated and not scraped from a storefront.

Everything else gets a typographic cover card: the title, language and format set in the archive's own serif on a tinted panel, with a small "cover unverified" note beneath it. No blank boxes, no invented artwork.

## Amazon links

The catalogue file carries no product URLs, so nothing is guessed. I'll look up and verify the links for the primary English editions of the three novels only. Every other entry simply has no button — there is no greyed-out or dead link anywhere.

## Excluded

Left off entirely, as your notes instruct: the J.F. Martel title, the Joyce mis-association, the Orange Prize bundle, the NYT Book Review issue, and the two unconfirmed short pieces ("Eine Strumpfbandnatter", "Christmas Pageant").

## Technical notes

- `src/data/editions.ts` — a typed `TarttEdition` module (`id`, `work`, `title`, `language`, `format`, `binding`, `isbn?`, `coverUrl?`, `coverVerified`, `amazonUrl?`, `note?`) plus grouped accessors. Single source of truth.
- `src/routes/books.index.tsx` — new leaf route; `src/routes/books.tsx` becomes a pass-through layout so `/books` and `/books/$slug` coexist.
- Filter state lives in the URL via `validateSearch` (`q`, `work`, `lang`, `format`) with `fallback()` defaults, so a filtered view is shareable and server-rendered.
- Semantics: `<section>` per work with an `<h2>`, edition list as a `<ul>`, labelled search input, `aria-pressed` on filter toggles, `loading="lazy"` and descriptive `alt` on every cover, visible focus rings.
- Route-level `head()` with its own title, description, og and twitter tags; a `Book`/`ItemList` JSON-LD block on the archive page.
- Responsive: single column on phones with a horizontally scrolling filter row; two to three columns from `md` up.
