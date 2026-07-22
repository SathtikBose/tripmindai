import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const tiers = [
  { name: "Free", price: "$0", tag: "For casual travelers", features: ["2 AI trip plans / month", "Basic itinerary editor", "Community support", "Mobile app access"], cta: "Start free", highlight: false },
  { name: "Pro", price: "$12", tag: "For frequent flyers", features: ["Unlimited AI plans", "Realtime replanning", "Budget & currency tools", "Offline itineraries", "Priority support"], cta: "Go Pro", highlight: true },
  { name: "Business", price: "$29", tag: "For teams & concierge", features: ["Everything in Pro", "Team workspaces", "Custom branding & PDF export", "SSO & audit logs", "Dedicated manager"], cta: "Talk to sales", highlight: false },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex rounded-full glass px-3 py-1 text-xs text-muted-foreground">Pricing</div>
          <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">Simple plans, <span className="font-display italic text-gradient">real value</span></h2>
          <p className="mt-3 text-muted-foreground">Start free. Upgrade when you're ready. Cancel anytime.</p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl p-6 ${t.highlight ? "bg-gradient-primary text-primary-foreground shadow-glow" : "glass"}`}>
              {t.highlight && (<span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">Most popular</span>)}
              <div className="text-sm opacity-80">{t.name}</div>
              <div className="mt-2 flex items-baseline gap-1"><span className="text-5xl font-semibold tracking-tight">{t.price}</span><span className="text-sm opacity-70">/ month</span></div>
              <div className="text-sm opacity-80">{t.tag}</div>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (<li key={f} className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0" /><span>{f}</span></li>))}
              </ul>
              <Button asChild className={`mt-6 w-full rounded-full ${t.highlight ? "bg-background text-foreground hover:bg-background/90" : "bg-gradient-primary text-primary-foreground hover:opacity-90"}`}>
                <Link to="/auth/signup">{t.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}