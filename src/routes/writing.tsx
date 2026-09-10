import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/archive-chrome";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Essays, Short Fiction and Interviews" },
      {
        name: "description",
        content:
          "A curated archive of Donna Tartt's shorter work and selected interviews, from The Paris Review to Harper's and The Guardian.",
      },
      { property: "og:title", content: "Writing — Donna Tartt Archive" },
      {
        property: "og:description",
        content:
          "Selected essays, short fiction, audiobook narration and interviews, listed by year.",
      },
    ],
  }),
  component: Writing,
});

type Entry = { year: string; title: string; venue: string; note: string };

const shorter: Entry[] = [
  {
    year: "1993",
    title: "Sleepytown: A Southern Gothic Childhood, with Codeine",
    venue: "Harper's Magazine",
    note: "Autobiographical essay on a Mississippi childhood and a doctor's prescriptions.",
  },
  {
    year: "1995",
    title: "A Christmas Pageant",
    venue: "Harper's Magazine",
    note: "Short fiction.",
  },
  {
    year: "1996",
    title: "The Ambush",
    venue: "The Guardian",
    note: "Short fiction, later anthologised.",
  },
  {
    year: "2002",
    title: "Team Spirit: Memoir of a Cheerleader",
    venue: "Harper's Magazine",
    note: "Essay on cheerleading in a Mississippi high school.",
  },
  {
    year: "2005",
    title: "Introduction to Charles Portis, True Grit",
    venue: "The Overlook Press",
    note: "Tartt also narrated the novel's audiobook edition.",
  },
];

const conversations: Entry[] = [
  {
    year: "1992",
    title: "Interview on The Secret History",
    venue: "The New York Times Magazine",
    note: "Published on the novel's release.",
  },
  {
    year: "2002",
    title: "Conversation on The Little Friend",
    venue: "The Guardian",
    note: "On the ten-year interval and returning to Mississippi.",
  },
  {
    year: "2006",
    title: "The Art of Fiction No. 190",
    venue: "The Paris Review",
    note: "Interviewed by Kamila Shamsie; the longest sustained account of her method.",
  },
  {
    year: "2013",
    title: "On The Goldfinch",
    venue: "The Telegraph",
    note: "On Fabritius, Dickens, and writing over a decade.",
  },
  {
    year: "2014",
    title: "Pulitzer Prize remarks",
    venue: "Columbia University",
    note: "Following the award for Fiction.",
  },
];

function Table({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <section className="grid gap-8 border-t border-border/60 py-16 md:grid-cols-12">
      <h2 className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground md:col-span-2 md:col-start-2">
        {title}
      </h2>
      <ul className="md:col-span-7 md:col-start-5">
        {entries.map((e) => (
          <li
            key={e.title}
            className="border-b border-border/50 py-6 first:pt-0 last:border-0"
          >
            <div className="flex flex-wrap items-baseline gap-x-4">
              <span className="font-serif text-lg text-accent-foreground/70">
                {e.year}
              </span>
              <h3 className="font-serif text-xl text-foreground">{e.title}</h3>
            </div>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
              {e.venue}
            </p>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
              {e.note}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Writing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6">
        <header className="grid py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-8 md:col-start-2">
            <h1 className="font-serif text-[2.6rem] leading-[1.08] text-foreground md:text-[4rem]">
              Writing beyond
              <br /> the novels.
            </h1>
            <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground">
              Essays, short fiction, introductions and the small number of
              interviews given between books.
            </p>
          </div>
        </header>
        <Table title="Shorter work" entries={shorter} />
        <Table title="Conversations" entries={conversations} />
      </main>
      <SiteFooter />
    </div>
  );
}
