import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/archive-chrome";
import { books } from "@/lib/books";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Donna Tartt — A Literary Archive of the Three Novels" },
      {
        name: "description",
        content:
          "An editorial archive of Donna Tartt's three novels: The Secret History (1992), The Little Friend (2002) and The Goldfinch (2013).",
      },
      { property: "og:title", content: "Donna Tartt — A Literary Archive" },
      {
        property: "og:description",
        content:
          "The Secret History, The Little Friend, The Goldfinch: publication facts, openings and reception.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6">
        <section className="grid gap-10 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-7 md:col-start-2">
            <h1 className="font-serif text-[2.6rem] leading-[1.1] text-foreground md:text-[4.2rem]">
              Three novels in
              <br />
              twenty-one years.
            </h1>
            <p className="mt-10 max-w-xl font-serif text-xl italic leading-relaxed text-muted-foreground">
              A reader's archive of the published work &mdash; openings,
              publication facts, and the record of its reception.
            </p>
          </div>
        </section>

        <div className="space-y-28 pb-16 md:space-y-44">
          {books.map((book, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={book.slug} className="grid gap-8 md:grid-cols-12">
                <div
                  className={
                    flip
                      ? "md:col-span-3 md:col-start-1 md:text-right"
                      : "md:col-span-2 md:col-start-2"
                  }
                >
                  <span className="font-serif text-5xl text-accent-foreground/60">
                    {book.year}
                  </span>
                </div>
                <div
                  className={
                    flip
                      ? "md:col-span-7 md:col-start-5"
                      : "md:col-span-7 md:col-start-5"
                  }
                >
                  <h2 className="font-serif text-3xl leading-tight text-foreground md:text-[2.6rem]">
                    {book.title}
                  </h2>
                  <p className="mt-6 border-l border-accent-foreground/40 pl-6 font-serif text-lg italic leading-relaxed text-foreground/80">
                    {book.opening}
                  </p>
                  <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                    {book.summary[0]}
                  </p>
                  <Link
                    to="/books/$slug"
                    params={{ slug: book.slug }}
                    className="mt-8 inline-block border-b border-accent-foreground/50 pb-1 text-[0.7rem] uppercase tracking-[0.24em] text-accent-foreground"
                  >
                    The book in full
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
