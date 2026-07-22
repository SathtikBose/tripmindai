import { Github, Instagram, Twitter } from "lucide-react";
import { Brand } from "@/components/brand";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-background/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Brand />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">TripMind AI helps you plan smarter trips with an intelligent co-pilot for itineraries, budgets and bookings.</p>
            <div className="mt-4 flex gap-2">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="grid size-9 place-items-center rounded-full glass text-muted-foreground hover:text-foreground"><Icon className="size-4" /></a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground"><li><a href="#features">Features</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#faq">FAQ</a></li><li><a href="#">Changelog</a></li></ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground"><li><a href="#">About</a></li><li><a href="#">Careers</a></li><li><a href="#">Press</a></li><li><a href="#">Contact</a></li></ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} TripMind AI, Inc. All rights reserved.</div>
          <div className="flex gap-4"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a></div>
        </div>
      </div>
    </footer>
  );
}