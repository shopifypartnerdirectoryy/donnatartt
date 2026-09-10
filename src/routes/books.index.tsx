import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/archive-chrome";
import { EditionCard } from "@/components/edition-card";
import {
  editions,
  formats,
  languages,
  works,
  type WorkKey,
} from "@/data/editions";

type EditionSearch = { q: string; work: string; lang: string; format: string };

const str = (v: unknown) => (typeof v === "string" ? v : "");

const title = "Books & Editions — The Donna Tartt Archive";
const description =
  "A catalogue of every recorded edition of The Secret History, The Little Friend and The Goldfinch, in fifteen languages, with collections and boxed sets.";

export const Route = createFileRoute("/books/")({
  validateSearch: (search: Record<string, unknown>): EditionSearch => ({
    q: str(search["q"]),
    work: str(search["work"]),
    lang: str(search["lang"]),
    format: str(search["format"]),
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Donna Tartt — Books & Editions",
          numberOfItems: editions.length,
          itemListElement: editions.slice(0, 40).map((e, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Book",
              name: e.title,
              author: { "@type": "Person", name: "Donna Tartt" },
              inLanguage: e.language,
              bookFormat: e.format,
              ...(e.isbn ? { isbn: e.isbn } : {}),
            },
          })),
        }),
      },
    ],
  }),
  component: EditionsArchive,
});

function FilterRow({
  label,
  options,
  value,
  onSelect,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onSelect: (next: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 py-3">
      <span className="w-16 shrink-0 text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      <div className="-mx-1 flex flex-nowrap gap-x-4 gap-y-2 overflow-x-auto px-1 sm:flex-wrap sm:overflow-visible">
        {[{ value: "", label: "All" }, ...options].map((o) => {
          const active = value === o.value;
          return (
            <button
              key={o.value || "all"}
              type="button"
              aria-pressed={active}
              onClick={() => onSelect(active ? "" : o.value)}
              className={`whitespace-nowrap border-b pb-0.5 text-[0.65rem] uppercase tracking-[0.2em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring ${
                active
                  ? "border-accent-foreground/60 text-accent-foreground"
                  : "border-transparent text-muted-foreground hover:text-accent-foreground"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function EditionsArchive() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const set = (patch: Partial<EditionSearch>) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }) });

  const q = search.q.trim().toLowerCase();
  const filtered = editions.filter((e) => {
    if (search.work && e.work !== search.work) return false;
    if (search.lang && e.language !== search.lang) return false;
    if (search.format && e.format !== search.format) return false;
    if (
      q &&
      !`${e.title} ${e.language} ${e.format} ${e.binding}`
        .toLowerCase()
        .includes(q)
    )
      return false;
    return true;
  });

  const active = Boolean(q || search.work || search.lang || search.format);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6">
        <header className="grid gap-6 border-b border-border/60 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-8 md:col-start-2">
            <span className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
              The catalogue
            </span>
            <h1 className="mt-6 font-serif text-[2.4rem] leading-[1.08] text-foreground md:text-[3.8rem]">
              Books &amp; Editions
            </h1>
            <p className="mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-muted-foreground">
              Every recorded printing of the three novels &mdash; {editions.length}{" "}
              editions in {languages.length} languages, with the collections and
              boxed sets.
            </p>
          </div>
        </header>

        <section aria-label="Filter the catalogue" className="border-b border-border/60 py-8">
          <div className="md:ml-[8.333%]">
            <label
              htmlFor="edition-search"
              className="block text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground"
            >
              Search the catalogue
            </label>
            <input
              id="edition-search"
              type="search"
              value={search.q}
              onChange={(e) => set({ q: e.target.value })}
              placeholder="Title, language, publisher&hellip;"
              className="mt-3 w-full max-w-xl border-0 border-b border-border bg-transparent pb-2 font-serif text-xl text-foreground placeholder:text-muted-foreground/60 focus:border-accent-foreground focus:outline-none"
            />

            <div className="mt-6 divide-y divide-border/50 border-t border-border/50">
              <FilterRow
                label="Work"
                value={search.work}
                onSelect={(work) => set({ work })}
                options={works.map((w) => ({ value: w.key, label: w.title }))}
              />
              <FilterRow
                label="Language"
                value={search.lang}
                onSelect={(lang) => set({ lang })}
                options={languages.map((l) => ({ value: l, label: l }))}
              />
              <FilterRow
                label="Format"
                value={search.format}
                onSelect={(format) => set({ format })}
                options={formats.map((f) => ({ value: f, label: f }))}
              />
            </div>

            <p aria-live="polite" className="mt-6 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "edition" : "editions"}
              {active ? (
                <>
                  {" "}&middot;{" "}
                  <Link
                    to="/books"
                    search={{ q: "", work: "", lang: "", format: "" }}
                    className="border-b border-accent-foreground/50 pb-0.5 text-accent-foreground"
                  >
                    Clear
                  </Link>
                </>
              ) : null}
            </p>
          </div>
        </section>

        <div className="pb-16">
          {works.map((w) => {
            const rows = filtered.filter((e) => e.work === (w.key as WorkKey));
            if (rows.length === 0) return null;
            return (
              <section
                key={w.key}
                id={w.key}
                aria-labelledby={`${w.key}-heading`}
                className="grid gap-8 border-b border-border/60 py-16 md:grid-cols-12"
              >
                <div className="md:col-span-3 md:col-start-1">
                  <h2
                    id={`${w.key}-heading`}
                    className="font-serif text-2xl leading-tight text-foreground md:text-3xl"
                  >
                    {w.title}
                  </h2>
                  {w.year ? (
                    <p className="mt-2 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                      {w.year} &middot; {rows.length} editions
                    </p>
                  ) : (
                    <p className="mt-2 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                      {rows.length} items
                    </p>
                  )}
                  {w.slug ? (
                    <Link
                      to="/books/$slug"
                      params={{ slug: w.slug }}
                      className="mt-4 inline-block border-b border-accent-foreground/50 pb-0.5 text-[0.62rem] uppercase tracking-[0.22em] text-accent-foreground"
                    >
                      The book in full
                    </Link>
                  ) : null}
                </div>

                <ul className="grid gap-10 md:col-span-8 md:col-start-5 md:grid-cols-2">
                  {rows.map((e) => (
                    <EditionCard key={e.id} edition={e} />
                  ))}
                </ul>
              </section>
            );
          })}

          {filtered.length === 0 ? (
            <p className="py-24 text-center font-serif text-xl italic text-muted-foreground">
              No edition in the catalogue answers to that.
            </p>
          ) : null}
        </div>

        <p className="pb-20 text-xs leading-relaxed text-muted-foreground md:ml-[8.333%] md:max-w-2xl">
          Jacket images are reproduced from public bibliographic records. Where an
          edition&rsquo;s cover could not be matched to a verified record it is
          marked accordingly rather than illustrated. Purchase links appear only
          where the listing has been confirmed.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
