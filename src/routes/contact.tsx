import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/archive-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Donna Tartt Archive" },
      {
        name: "description",
        content:
          "How to reach the publishers and literary agency, and how to write to this archive about corrections.",
      },
      { property: "og:title", content: "Contact — Donna Tartt Archive" },
      {
        property: "og:description",
        content: "Publisher, agency and archive correspondence.",
      },
    ],
  }),
  component: Contact,
});

const lines = [
  {
    label: "Publisher, US",
    body: "Alfred A. Knopf and Little, Brown and Company, New York.",
  },
  { label: "Representation", body: "ICM Partners, New York." },
  {
    label: "Corrections",
    body: "Errors of fact in these pages are the archive's own. Write and they will be amended.",
  },
];

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6">
        <div className="grid py-32 md:grid-cols-12 md:py-48">
          <div className="md:col-span-7 md:col-start-2">
            <h1 className="font-serif text-[2.6rem] leading-[1.08] text-foreground md:text-[4rem]">
              Correspondence.
            </h1>
            <dl className="mt-16 space-y-10">
              {lines.map((l) => (
                <div key={l.label} className="border-t border-border/60 pt-4">
                  <dt className="text-[0.68rem] uppercase tracking-[0.26em] text-muted-foreground">
                    {l.label}
                  </dt>
                  <dd className="mt-2 max-w-lg font-serif text-xl leading-relaxed text-foreground/85">
                    {l.body}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-16 max-w-lg text-sm leading-relaxed text-muted-foreground">
              The author does not maintain public correspondence addresses. This
              archive is independent and unaffiliated with the author or her
              publishers.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
