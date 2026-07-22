import { Star } from "lucide-react";
import { testimonials } from "@/lib/mock-data";

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex rounded-full glass px-3 py-1 text-xs text-muted-foreground">Loved by travelers</div>
          <h2 className="mt-4 text-4xl tracking-tight md:text-5xl"><span className="font-display italic text-gradient">Stories</span> from the road</h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="size-3.5 fill-accent" />))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.avatar} alt="" className="size-10 rounded-full" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}