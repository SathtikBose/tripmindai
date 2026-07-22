const steps = [
  { n: "01", title: "Tell us your vibe", body: "Dates, budget, travel style and any must-do's — text or voice." },
  { n: "02", title: "AI composes your plan", body: "Day-by-day itinerary with routing, restaurants and estimated costs." },
  { n: "03", title: "Refine & book", body: "Tweak with the assistant, invite friends, and book in one flow." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex rounded-full glass px-3 py-1 text-xs text-muted-foreground">How it works</div>
            <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">From idea to <span className="font-display italic text-gradient">boarding pass</span> in three moves</h2>
          </div>
          <p className="text-muted-foreground md:text-right">No more juggling 12 tabs. TripMind handles research, planning, budgeting and last-minute changes as one continuous flow.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="glass relative overflow-hidden rounded-2xl p-6">
              <div className="font-display text-6xl italic text-gradient">{s.n}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}