import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Archive" },
  { to: "/books", label: "Editions" },
  { to: "/about", label: "About" },
  { to: "/writing", label: "Writing" },
  { to: "/press", label: "Press" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-baseline md:justify-between md:py-10">
        <Link to="/" className="group block">
          <span className="block font-serif text-2xl tracking-[0.02em] text-foreground">
            Donna Tartt
          </span>
          <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.32em] text-muted-foreground">
            A Literary Archive
          </span>
        </Link>
        <nav className="flex flex-wrap gap-x-7 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent-foreground" }}
              className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground md:flex-row md:justify-between">
        <span>Three novels, 1992&ndash;2013</span>
        <span>An unofficial reference archive</span>
      </div>
    </footer>
  );
}

export function Rule() {
  return <hr className="border-0 border-t border-border/60" />;
}
