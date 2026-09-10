import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/archive-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Donna Tartt — Biography and Chronology" },
      {
        name: "description",
        content:
          "Biography of the novelist Donna Tartt: Greenwood, Mississippi; Bennington College; and the three novels published between 1992 and 2013.",
      },
      { property: "og:title", content: "About Donna Tartt" },
      {
        property: "og:description",
        content:
          "Biography and chronology of the novelist Donna Tartt, 1963 to the present.",
      },
    ],
  }),
  component: About,
});

const chronology = [
  { year: "1963", text: "Born 23 December in Greenwood, Mississippi; raised in nearby Grenada." },
  { year: "1981", text: "Enters the University of Mississippi, where Willie Morris encourages her writing." },
  { year: "1982", text: "Transfers to Bennington College, Vermont, on the advice of Barry Hannah. Studies classics with Claude Fredericks." },
  { year: "1986", text: "Graduates from Bennington. Continues work on the manuscript that becomes The Secret History." },
  { year: "1992", text: "The Secret History published by Alfred A. Knopf." },
  { year: "2002", text: "The Little Friend published; wins the WH Smith Literary Award the following year." },
  { year: "2013", text: "The Goldfinch published by Little, Brown." },
  { year: "2014", text: "Awarded the Pulitzer Prize for Fiction and the Andrew Carnegie Medal for Excellence in Fiction." },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6">
        <header className="grid py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-8 md:col-start-2">
            <h1 className="font-serif text-[2.6rem] leading-[1.08] text-foreground md:text-[4rem]">
              A writer of few
              <br /> and long books.
            </h1>
          </div>
        </header>

        <div className="grid gap-16 border-t border-border/60 py-20 md:grid-cols-12">
          <div className="md:col-span-6 md:col-start-2">
            <p className="mb-6 leading-[1.9] text-foreground/85">
              Donna Tartt was born in Greenwood, Mississippi, in 1963 and grew up
              in Grenada, a small town in the Delta country she has described as
              formative for its talk, its heat, and its long unstructured
              afternoons. She began publishing poems as a teenager and entered the
              University of Mississippi at seventeen.
            </p>
            <p className="mb-6 leading-[1.9] text-foreground/85">
              On the recommendation of the novelist Barry Hannah, who taught her
              in a graduate short-story course, she transferred to Bennington
              College in Vermont. There she studied Greek with Claude Fredericks
              and formed friendships with Bret Easton Ellis and Jonathan Lethem.
              The manuscript she began in her sophomore year was published eight
              years later as The Secret History.
            </p>
            <p className="mb-6 leading-[1.9] text-foreground/85">
              She has since published a novel roughly every decade: The Little
              Friend in 2002 and The Goldfinch in 2013, the latter awarded the
              Pulitzer Prize for Fiction. She divides her time between New York
              and Virginia, gives few interviews, and has consistently declined to
              treat the interval between books as a problem requiring explanation.
            </p>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <h2 className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
              Chronology
            </h2>
            <ol className="mt-6 space-y-5">
              {chronology.map((c) => (
                <li key={c.year} className="border-t border-border/60 pt-3">
                  <span className="font-serif text-lg text-accent-foreground/80">
                    {c.year}
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
