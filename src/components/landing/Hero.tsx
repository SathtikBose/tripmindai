import { Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-hero opacity-30 blur-3xl" />
        <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground animate-fade-in">
          <Sparkles className="size-3.5 text-primary" />
          New — GPT-powered itinerary composer
          <span className="ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">v2.4</span>
        </div>
        <h1 className="mx-auto mt-6 max-w-4xl text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
          Plan your next trip in <span className="font-display italic text-gradient">seconds,</span>
          <br className="hidden md:block" /> not spreadsheets.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          TripMind AI composes day-by-day itineraries, budgets, and packing lists tailored to your travel style — with an assistant that adapts on the fly.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-gradient-primary px-6 text-primary-foreground shadow-glow hover:opacity-90">
            <Link to="/auth/signup">Start planning free <ArrowRight className="ml-1 size-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="rounded-full">
            <a href="#how"><PlayCircle className="size-4" /> Watch 60s demo</a>
          </Button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <div className="flex -space-x-2">
            {[47, 12, 32, 5].map((n) => (
              <img key={n} src={`https://i.pravatar.cc/40?img=${n}`} alt="" className="size-6 rounded-full ring-2 ring-background" />
            ))}
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="size-3.5 fill-accent text-accent" />))}
          </div>
          <span>Loved by 40,000+ travelers</span>
        </div>
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute inset-x-8 -bottom-8 h-40 rounded-[2rem] bg-gradient-hero opacity-40 blur-2xl" />
          <div className="glass-strong relative overflow-hidden rounded-3xl p-2 shadow-card">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-accent/70" />
              <span className="size-2.5 rounded-full bg-primary/70" />
              <div className="ml-3 h-5 flex-1 rounded-md bg-secondary/60" />
            </div>
            <div className="grid grid-cols-12 gap-3 rounded-2xl bg-background/50 p-4 md:p-6">
              <div className="col-span-12 md:col-span-3 space-y-2">
                {["Overview", "Trips", "AI Planner", "Assistant", "Budget", "Analytics"].map((s, i) => (
                  <div key={s} className={`rounded-xl px-3 py-2 text-left text-xs ${i === 2 ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}>{s}</div>
                ))}
              </div>
              <div className="col-span-12 md:col-span-9 space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Itinerary</div>
                    <div className="text-lg font-semibold">Kyoto · 10 days · 2 travelers</div>
                  </div>
                  <div className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">AI generated</div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[{ d: "Day 1", t: "Arrival & Gion at dusk" }, { d: "Day 2", t: "Arashiyama bamboo" }, { d: "Day 3", t: "Fushimi Inari sunrise" }].map((c) => (
                    <div key={c.d} className="rounded-xl border border-border/60 bg-card/60 p-3">
                      <div className="text-[10px] uppercase text-muted-foreground">{c.d}</div>
                      <div className="mt-1 text-sm font-medium">{c.t}</div>
                      <div className="mt-3 h-1 w-2/3 rounded-full bg-gradient-primary" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border/60 bg-card/60 p-4">
                    <div className="text-[11px] uppercase text-muted-foreground">Budget</div>
                    <div className="mt-1 text-xl font-semibold">$4,200 <span className="text-xs text-muted-foreground">/ $5,000</span></div>
                    <div className="mt-3 h-1.5 w-full rounded-full bg-secondary"><div className="h-1.5 w-[84%] rounded-full bg-gradient-primary" /></div>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-card/60 p-4">
                    <div className="text-[11px] uppercase text-muted-foreground">Weather</div>
                    <div className="mt-1 text-xl font-semibold">32° / 24°</div>
                    <div className="text-xs text-muted-foreground">Warm & humid</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}