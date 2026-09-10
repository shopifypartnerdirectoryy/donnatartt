import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/archive-chrome";
import { books } from "@/lib/books";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press — Biographical and Publication Facts" },
      {
        name: "description",
        content:
          "Verified biographical note, bibliography, awards and publisher contacts for the novelist Donna Tartt.",
      },
      { property: "og:title", content: "Press — Donna Tartt Archive" },
      {
        property: "og:description",
        content:
          "Short and long biographical notes, bibliography, awards and media contacts.",
      },
    ],
  }),
  component: Press,
});

const awards = [
  "WH Smith Literary Award, 2003 — The Little Friend",
  "Pulitzer Prize for Fiction, 2014 — The Goldfinch",
  "Andrew Carnegie Medal for Excellence in Fiction, 2014 — The Goldfinch",
  "Shortlist, Baileys Women's Prize for Fiction, 2014 — The Goldfinch",
  "Shortlist, National Book Critics Circle Award, 2013 — The Goldfinch",
];

function Press() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6">
        <header className="grid py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-8 md:col-start-2">
            <h1 className="font-serif text-[2.6rem] leading-[1.08] text-foreground md:text-[4rem]">
              Press &amp; permissions.
            </h1>
          </div>
        </header>

        <section className="grid gap-8 border-t border-border/60 py-16 md:grid-cols-12">
          <h2 className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground md:col-span-2 md:col-start-2">
            Biographical note
          </h2>
          <div className="md:col-span-7 md:col-start-5">
            <p className="font-serif text-xl leading-relaxed italic text-foreground/85">
              Donna Tartt (b. 1963, Greenwood, Mississippi) is the author of three
              novels: The Secret History, The Little Friend and The Goldfinch,
              which was awarded the 2014 Pulitzer Prize for Fiction.
            </p>
            <p className="mt-8 leading-[1.9] text-foreground/85">
              Longer form: Donna Tartt was born in Greenwood, Mississippi, in
              1963 and educated at the University of Mississippi and Bennington
              College. Her first novel, The Secret History, appeared in 1992 and
              has been translated into more than thirty languages. The Little
              Friend followed in 2002 and received the WH Smith Literary Award.
              The Goldfinch, published in 2013, won the Pulitzer Prize for Fiction
              and the Andrew Carnegie Medal, and was adapted for film in 2019. She
              has also written essays and short fiction for Harper's Magazine and
              The Guardian, and narrated the audiobook editions of her own novels.
            </p>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border/60 py-16 md:grid-cols-12">
          <h2 className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground md:col-span-2 md:col-start-2">
            Bibliography
          </h2>
          <ul className="md:col-span-7 md:col-start-5">
            {books.map((b) => (
              <li key={b.slug} className="border-b border-border/50 py-5 last:border-0">
                <span className="font-serif text-xl text-foreground">
                  {b.title}
                </span>
                <p className="mt-2 text-sm text-muted-foreground">
                  {b.publisher}, {b.year} &middot; {b.pages} pp &middot; ISBN{" "}
                  {b.isbn}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-8 border-t border-border/60 py-16 md:grid-cols-12">
          <h2 className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground md:col-span-2 md:col-start-2">
            Awards
          </h2>
          <ul className="space-y-3 md:col-span-7 md:col-start-5">
            {awards.map((a) => (
              <li key={a} className="leading-relaxed text-foreground/85">
                {a}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-8 border-t border-border/60 py-16 md:grid-cols-12">
          <h2 className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground md:col-span-2 md:col-start-2">
            Media enquiries
          </h2>
          <div className="md:col-span-7 md:col-start-5">
            <p className="leading-relaxed text-foreground/85">
              Interview requests, permissions and review copies are handled by the
              publishers, not by this archive. Direct enquiries to the publicity
              department of Alfred A. Knopf (The Secret History, The Little
              Friend) or Little, Brown and Company (The Goldfinch); international
              rights sit with the author's literary agency, ICM Partners.
            </p>
            <p className="mt-6 text-sm italic text-muted-foreground">
              This archive holds no author photographs or cover artwork for
              redistribution; image permissions rest with the publishers.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
