import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/archive-chrome";
import { books, getBook } from "@/lib/books";
import {
  editionCountForWork,
  languageCountForWork,
  type WorkKey,
} from "@/data/editions";

export const Route = createFileRoute("/books/$slug")({
  loader: ({ params }) => {
    const book = getBook(params.slug);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Unavailable — Donna Tartt Archive" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { book } = loaderData;
    const title = `${book.title} (${book.year}) — Donna Tartt`;
    const description = `${book.title}, published ${book.year} by ${book.publisher}. Opening lines, publication facts and reception.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: BookPage,
});

function BookPage() {
  const { book } = Route.useLoaderData();
  const others = books.filter((b) => b.slug !== book.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6">
        <header className="grid gap-6 border-b border-border/60 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-9 md:col-start-2">
            <span className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
              Novel &middot; {book.year}
            </span>
            <h1 className="mt-6 font-serif text-[2.8rem] leading-[1.05] text-foreground md:text-[4.5rem]">
              {book.title}
            </h1>
            <p className="mt-10 max-w-2xl font-serif text-xl italic leading-relaxed text-foreground/80">
              {book.opening}
            </p>
          </div>
        </header>

        <div className="grid gap-16 py-20 md:grid-cols-12">
          <div className="md:col-span-6 md:col-start-2">
            {book.summary.map((p) => (
              <p key={p} className="mb-6 leading-[1.9] text-foreground/85">
                {p}
              </p>
            ))}
            <p className="mt-10 text-sm italic text-muted-foreground">
              {book.epigraphNote}
            </p>
          </div>

          <aside className="md:col-span-3 md:col-start-9">
            <h2 className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
              Publication
            </h2>
            <dl className="mt-6 space-y-4">
              {book.facts.map((f, i) => (
                <div key={`${f.label}-${i}`} className="border-t border-border/60 pt-3">
                  <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground/85">{f.value}</dd>
                </div>
              ))}
              <div className="border-t border-border/60 pt-3">
                <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Extent
                </dt>
                <dd className="mt-1 text-sm text-foreground/85">
                  {book.pages} pages &middot; ISBN {book.isbn}
                </dd>
              </div>
            </dl>
            <Link
              to="/books"
              search={{ q: "", work: book.slug, lang: "", format: "" }}
              className="mt-8 inline-block border-b border-accent-foreground/50 pb-1 text-[0.62rem] uppercase tracking-[0.22em] text-accent-foreground"
            >
              {editionCountForWork(book.slug)} editions in{" "}
              {languageCountForWork(book.slug)} languages &rarr;
            </Link>
          </aside>
        </div>

        <section className="grid gap-8 border-t border-border/60 py-20 md:grid-cols-12">
          <h2 className="md:col-span-2 md:col-start-2 text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
            Reception
          </h2>
          <div className="space-y-10 md:col-span-7 md:col-start-5">
            {book.reception.map((r) => (
              <blockquote key={r.source}>
                <p className="font-serif text-2xl leading-snug italic text-foreground/85">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <cite className="mt-4 block text-[0.7rem] uppercase not-italic tracking-[0.22em] text-muted-foreground">
                  {r.source}
                </cite>
              </blockquote>
            ))}
          </div>
        </section>

        <nav className="flex flex-col gap-4 border-t border-border/60 py-16 sm:flex-row sm:justify-between">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/books/$slug"
              params={{ slug: o.slug }}
              className="font-serif text-xl text-foreground/80 transition-colors hover:text-accent-foreground"
            >
              {o.title}{" "}
              <span className="text-sm text-muted-foreground">{o.year}</span>
            </Link>
          ))}
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}
