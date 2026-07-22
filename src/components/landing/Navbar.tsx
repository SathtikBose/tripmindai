import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/brand";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-4 py-2 md:px-6">
        <Brand />
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-secondary/60 hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link to="/auth/login">Sign in</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
            <Link to="/auth/signup">Get started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}