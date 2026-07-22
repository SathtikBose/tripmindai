import { Bot, Compass, MapPinned, PiggyBank, ShieldCheck, WalletCards } from "lucide-react";

const features = [
  { icon: Bot, title: "AI itinerary composer", body: "Tell it your dates and vibe. Get a fully-timed, day-by-day plan in seconds." },
  { icon: MapPinned, title: "Live maps & routes", body: "Every activity plotted with optimal transit — offline-ready on the road." },
  { icon: PiggyBank, title: "Smart budgeting", body: "Track spend by category with automatic currency conversion." },
  { icon: Compass, title: "Local intelligence", body: "Neighborhood tips, hidden gems and cultural etiquette baked in." },
  { icon: WalletCards, title: "One-tap booking", body: "Flights and hotels compared side by side with trusted partners." },
  { icon: ShieldCheck, title: "Peace of mind", body: "Emergency info, visa help and 24/7 assistant chat wherever you go." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex rounded-full glass px-3 py-1 text-xs text-muted-foreground">Everything you need</div>
          <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">A travel <span className="font-display italic text-gradient">command center</span> in your pocket</h2>
          <p className="mt-4 text-muted-foreground">One tool replaces the tab explosion of docs, spreadsheets, note apps and booking sites.</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group glass rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <div className="grid size-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow"><f.icon className="size-5" /></div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}