import { coverUrl, type TarttEdition } from "@/data/editions";

export function EditionCard({ edition }: { edition: TarttEdition }) {
  return (
    <li className="group flex gap-5">
      <div className="w-[5.5rem] shrink-0 sm:w-24">
        {edition.coverId ? (
          <img
            src={coverUrl(edition.coverId)}
            alt={`Jacket of the ${edition.language} edition, ${edition.title}`}
            loading="lazy"
            decoding="async"
            width={96}
            height={144}
            className="h-auto w-full border border-border/60 bg-secondary object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex aspect-[2/3] w-full flex-col justify-between border border-border/60 bg-secondary/70 p-2"
          >
            <span className="text-[0.5rem] uppercase tracking-[0.18em] text-muted-foreground">
              {edition.language}
            </span>
            <span className="font-serif text-[0.8rem] leading-tight text-foreground/70">
              {edition.title}
            </span>
            <span className="text-[0.5rem] uppercase tracking-[0.18em] text-muted-foreground">
              {edition.format}
            </span>
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1 border-t border-border/60 pt-2">
        <h3 className="font-serif text-lg leading-snug text-foreground">
          {edition.title}
        </h3>
        <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
          {edition.language} &middot; {edition.format}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/75">
          {edition.binding}
        </p>
        {edition.isbn ? (
          <p className="mt-1 text-xs text-muted-foreground">ISBN {edition.isbn}</p>
        ) : null}
        {edition.note ? (
          <p className="mt-2 text-xs italic text-muted-foreground">{edition.note}</p>
        ) : null}
        {!edition.coverVerified ? (
          <p className="mt-2 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground/80">
            Cover unverified
          </p>
        ) : null}
        {edition.amazonUrl ? (
          <a
            href={edition.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block border-b border-accent-foreground/50 pb-0.5 text-[0.62rem] uppercase tracking-[0.22em] text-accent-foreground transition-colors hover:border-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Buy on Amazon &rarr;
          </a>
        ) : null}
      </div>
    </li>
  );
}
