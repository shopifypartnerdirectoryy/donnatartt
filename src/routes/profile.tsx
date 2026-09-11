import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/archive-chrome";
import { books } from "@/lib/books";
import portrait from "@/assets/donna-tartt-portrait.webp.asset.json";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Donna Tartt — Author Profile, Publishers and Representation" },
      {
        name: "description",
        content:
          "Professional author profile of the novelist Donna Tartt: books and publications, publishers by region, and current and past literary representation.",
      },
      { property: "og:title", content: "Donna Tartt — Author Profile" },
      {
        property: "og:description",
        content:
          "Books and publications, publishers by region, and literary representation for the novelist Donna Tartt.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Profile,
});

const publishersByRegion = [
  {
    region: "United States",
    entries: [
      {
        name: "Little, Brown and Company",
        detail: "Published: The Goldfinch; The Little Friend.",
      },
      {
        name: "Alfred A. Knopf",
        detail:
          "Early US work. Published the first edition of The Secret History — 1992.",
      },
    ],
  },
  {
    region: "United Kingdom",
    entries: [
      {
        name: "Bloomsbury / Penguin",
        detail: "Publisher depending on the edition and territory.",
      },
    ],
  },
];

const currentRepresentation = [
  {
    name: "Nicole Aragi",
    org: "Aragi Inc.",
    role: "Current US & Canadian Literary Agent",
  },
  {
    name: "Gill Coleridge",
    org: "RCW Literary Agency",
    role: "Current UK / Global Literary Agent",
    note: "Formerly Rogers, Coleridge & White. Handles UK and international/global representation and rights.",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground md:col-span-3 md:col-start-2">
      {children}
    </h2>
  );
}

function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6">
        <header className="grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-6 md:col-start-2 md:order-1">
            <h1 className="font-serif text-[2.6rem] leading-[1.05] text-foreground md:text-[4rem]">
              Donna Tartt
            </h1>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.3em] text-accent-foreground">
              Author &middot; Novelist
            </p>
            <p className="mt-10 max-w-xl leading-[1.9] text-foreground/85">
              Donna Tartt (b. 1963, Greenwood, Mississippi) is the author of three
              novels published between 1992 and 2013. This profile consolidates
              her publications, her publishers by region, and her literary
              representation. It is a professional reference record and does not
              list direct author contact information.
            </p>
          </div>
          <figure className="md:col-span-4 md:col-start-8 md:order-2">
            <div className="overflow-hidden rounded-sm border border-border/60 bg-muted">
              <img
                src={portrait.url}
                alt="Donna Tartt, American novelist and author"
                width={1024}
                height={1280}
                loading="eager"
                decoding="async"
                className="block h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Donna Tartt, American novelist and author.
            </figcaption>
          </figure>
        </header>

        <section className="grid gap-8 border-t border-border/60 py-16 md:grid-cols-12">
          <SectionHeading>Books &amp; Publications</SectionHeading>
          <ul className="md:col-span-7 md:col-start-5">
            {books.map((b) => (
              <li
                key={b.slug}
                className="border-b border-border/50 py-6 last:border-0"
              >
                <Link
                  to="/books/$slug"
                  params={{ slug: b.slug }}
                  className="font-serif text-2xl text-foreground underline-offset-4 transition-colors hover:text-accent-foreground focus-visible:underline focus-visible:outline-none"
                >
                  {b.title}
                </Link>
                <p className="mt-2 text-sm text-muted-foreground">
                  {b.publisher}, {b.year} &middot; {b.pages} pp &middot; ISBN{" "}
                  {b.isbn}
                </p>
                <p className="mt-3 max-w-xl leading-[1.9] text-foreground/85">
                  {b.summary[0]}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-8 border-t border-border/60 py-16 md:grid-cols-12">
          <SectionHeading>Publishers by Region and Book</SectionHeading>
          <div className="space-y-10 md:col-span-7 md:col-start-5">
            {publishersByRegion.map((r) => (
              <div key={r.region}>
                <h3 className="font-serif text-xl text-foreground">{r.region}</h3>
                <dl className="mt-4 space-y-5">
                  {r.entries.map((e) => (
                    <div key={e.name} className="border-t border-border/60 pt-3">
                      <dt className="text-base text-foreground">{e.name}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {e.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
            <p className="border-t border-border/60 pt-4 text-sm leading-relaxed text-muted-foreground">
              Historical publisher record retained from this archive: Alfred A.
              Knopf; Little, Brown and Company, New York.
            </p>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border/60 py-16 md:grid-cols-12">
          <SectionHeading>Literary Representation</SectionHeading>
          <div className="md:col-span-7 md:col-start-5">
            <ul className="space-y-5">
              <li className="border-t border-border/60 pt-3">
                <p className="text-base text-foreground">
                  Nicole Aragi — Aragi Inc.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Current US &amp; Canadian literary agent.
                </p>
              </li>
              <li className="border-t border-border/60 pt-3">
                <p className="text-base text-foreground">
                  Gill Coleridge — RCW Literary Agency
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Current UK / global literary agent. Formerly Rogers, Coleridge
                  &amp; White; handles UK and international rights.
                </p>
              </li>
              <li className="border-t border-border/60 pt-3">
                <p className="text-base text-foreground">
                  Amanda &ldquo;Binky&rdquo; Urban — CAA / ICM Partners
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Former US agent, approx. 1991&ndash;2017; represented Donna
                  Tartt for nearly three decades.
                </p>
              </li>
              <li className="border-t border-border/60 pt-3">
                <p className="text-base text-foreground">ICM Partners, New York</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Historical representation record retained from this archive.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border/60 py-16 md:grid-cols-12">
          <SectionHeading>Current Representation</SectionHeading>
          <div className="grid gap-6 md:col-span-7 md:col-start-5 md:grid-cols-2">
            {currentRepresentation.map((c) => (
              <article
                key={c.name}
                className="border border-border/70 bg-card p-6"
              >
                <p className="text-[0.62rem] uppercase tracking-[0.26em] text-accent-foreground">
                  Current
                </p>
                <h3 className="mt-3 font-serif text-2xl text-foreground">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-foreground/85">{c.org}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {c.role}
                </p>
                {c.note ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.note}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-border/60 py-16 md:grid-cols-12">
          <SectionHeading>Past Representation</SectionHeading>
          <div className="md:col-span-7 md:col-start-5">
            <div className="border-t border-border/60 pt-4">
              <p className="text-[0.62rem] uppercase tracking-[0.26em] text-muted-foreground">
                Former
              </p>
              <h3 className="mt-3 font-serif text-2xl text-foreground">
                Amanda &ldquo;Binky&rdquo; Urban
              </h3>
              <p className="mt-1 text-sm text-foreground/85">
                CAA / ICM Partners
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Former US agent, approx. 1991&ndash;2017. No longer the author's
                current representation.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border/60 py-16 md:grid-cols-12">
          <SectionHeading>Publisher / Rights Information</SectionHeading>
          <div className="md:col-span-7 md:col-start-5">
            <div className="border-t border-border/60 pt-4">
              <h3 className="font-serif text-xl text-foreground">
                United States
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Alfred A. Knopf; Little, Brown and Company.
              </p>
            </div>
            <div className="mt-8 border-t border-border/60 pt-4">
              <h3 className="font-serif text-xl text-foreground">
                United Kingdom / International
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Bloomsbury / Penguin, depending on edition and territory.
              </p>
            </div>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Publisher and rights information is listed for professional
              reference only. It is not direct contact information for the
              author. Direct author contact information is not publicly listed.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
