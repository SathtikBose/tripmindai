import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarDays, CircleDollarSign, CloudSun, Download, Heart, MapPin, Share2, Sparkles, Users } from "lucide-react";
import { toast } from "sonner";
import { Topbar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sampleItinerary } from "@/lib/mock-data";

export const Route = createFileRoute("/app/plan")({ component: PlanPage });

function PlanPage() {
  const [step, setStep] = useState<"form" | "loading" | "result">("form");
  const generate = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");
    setTimeout(() => { setStep("result"); toast.success("Itinerary generated"); }, 1400);
  };
  return (
    <>
      <Topbar title="AI Trip Planner" subtitle="Compose a personalized itinerary in seconds." />
      {step === "form" && (
        <form onSubmit={generate} className="grid gap-4 p-6 lg:grid-cols-3">
          <div className="glass space-y-5 rounded-2xl p-6 lg:col-span-2">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Destination" icon={<MapPin className="size-4" />}><Input placeholder="Kyoto, Japan" defaultValue="Kyoto, Japan" /></Field>
              <Field label="Travelers" icon={<Users className="size-4" />}><Input type="number" min={1} defaultValue={2} /></Field>
              <Field label="Start date" icon={<CalendarDays className="size-4" />}><Input type="date" defaultValue="2026-08-12" /></Field>
              <Field label="End date" icon={<CalendarDays className="size-4" />}><Input type="date" defaultValue="2026-08-22" /></Field>
              <Field label="Budget (USD)" icon={<CircleDollarSign className="size-4" />}><Input type="number" defaultValue={4200} /></Field>
              <Field label="Travel style"><Select defaultValue="explorer"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{["Luxury", "Explorer", "Backpacker", "Family", "Romantic"].map((v) => (<SelectItem key={v} value={v.toLowerCase()}>{v}</SelectItem>))}</SelectContent></Select></Field>
              <Field label="Transportation"><Select defaultValue="mixed"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{["Mixed", "Public transit", "Rental car", "Walking"].map((v) => (<SelectItem key={v} value={v.toLowerCase()}>{v}</SelectItem>))}</SelectContent></Select></Field>
              <Field label="Hotel preference"><Select defaultValue="boutique"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{["Boutique", "5-star", "Ryokan", "Budget", "Hostel"].map((v) => (<SelectItem key={v} value={v.toLowerCase()}>{v}</SelectItem>))}</SelectContent></Select></Field>
            </div>
            <Field label="Interests"><div className="flex flex-wrap gap-2">{["Food", "Temples", "Nature", "Nightlife", "Shopping", "History", "Art", "Adventure"].map((i, idx) => (<button type="button" key={i} className={`rounded-full border px-3 py-1 text-xs ${idx < 3 ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-secondary"}`}>{i}</button>))}</div></Field>
            <Field label="Dietary preferences"><div className="flex flex-wrap gap-2">{["None", "Vegetarian", "Vegan", "Halal", "Kosher", "Gluten-free"].map((i, idx) => (<button type="button" key={i} className={`rounded-full border px-3 py-1 text-xs ${idx === 0 ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-secondary"}`}>{i}</button>))}</div></Field>
            <Field label="Anything else?"><Textarea placeholder="I'd love a sunrise hike and a hidden ramen spot..." rows={3} /></Field>
            <Button type="submit" size="lg" className="w-full rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"><Sparkles className="size-4" /> Generate itinerary</Button>
          </div>
          <aside className="glass space-y-4 rounded-2xl p-6">
            <div className="text-sm font-semibold">What you'll get</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Day-by-day itinerary with timings", "Restaurant & activity recommendations", "Cost estimates & budget tracking", "Weather summary & packing list", "Offline maps & emergency info"].map((x) => (
                <li key={x} className="flex gap-2"><Sparkles className="mt-0.5 size-4 text-primary" /> {x}</li>
              ))}
            </ul>
            <div className="rounded-xl bg-primary/10 p-3 text-xs text-primary">Pro tip: The more specific your interests, the better the itinerary.</div>
          </aside>
        </form>
      )}
      {step === "loading" && (
        <div className="grid place-items-center p-20">
          <div className="glass flex flex-col items-center gap-4 rounded-3xl p-10 text-center">
            <div className="relative"><div className="size-16 rounded-full bg-gradient-primary shadow-glow animate-pulse" /><Sparkles className="absolute inset-0 m-auto size-6 text-primary-foreground" /></div>
            <div className="text-lg font-semibold">Composing your Kyoto adventure…</div>
            <div className="text-sm text-muted-foreground">Analyzing 200+ activities, restaurants and hidden gems.</div>
          </div>
        </div>
      )}
      {step === "result" && <ItineraryView onReset={() => setStep("form")} />}
    </>
  );
}

function Field({ label, icon, children }: { label: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="flex items-center gap-1.5 text-xs text-muted-foreground">{icon}{label}</Label>
      {children}
    </div>
  );
}

function ItineraryView({ onReset }: { onReset: () => void }) {
  const it = sampleItinerary;
  return (
    <div className="space-y-4 p-6">
      <div className="glass flex flex-wrap items-center justify-between gap-3 rounded-2xl p-5">
        <div>
          <div className="text-xs uppercase tracking-wider text-primary">AI generated</div>
          <div className="text-2xl font-semibold">{it.destination}</div>
          <div className="text-sm text-muted-foreground">{it.dates}</div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="rounded-full"><Heart className="size-4" /> Save</Button>
          <Button variant="ghost" size="sm" className="rounded-full"><Share2 className="size-4" /> Share</Button>
          <Button variant="ghost" size="sm" className="rounded-full" onClick={() => toast.success("PDF exported")}><Download className="size-4" /> PDF</Button>
          <Button size="sm" onClick={onReset} className="rounded-full bg-gradient-primary text-primary-foreground shadow-glow"><Sparkles className="size-4" /> Regenerate</Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="glass rounded-2xl p-5 lg:col-span-2">
          <div className="text-sm font-semibold">Day-by-day itinerary</div>
          <div className="mt-4 space-y-6">
            {it.days.map((d) => (
              <div key={d.day}>
                <div className="flex items-center gap-3"><div className="grid size-9 place-items-center rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow">{d.day}</div><div className="font-medium">{d.title}</div></div>
                <ol className="ml-4 mt-3 border-l border-border/60 pl-5">
                  {d.items.map((item, i) => (
                    <li key={i} className="relative pb-4">
                      <span className="absolute -left-[27px] top-1.5 size-2.5 rounded-full bg-primary" />
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div><span className="text-xs font-mono text-muted-foreground">{item.time}</span> <span className="ml-2 text-sm font-medium">{item.title}</span></div>
                        <div className="flex items-center gap-2 text-xs"><span className="rounded-full bg-secondary/70 px-2 py-0.5 text-muted-foreground">{item.kind}</span><span className="text-primary">${item.cost}</span></div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass rounded-2xl p-5"><div className="flex items-center justify-between"><div className="text-sm font-semibold">Weather</div><CloudSun className="size-4 text-muted-foreground" /></div><div className="mt-2 text-3xl font-semibold">{it.weather.high}° / {it.weather.low}°</div><div className="text-xs text-muted-foreground">{it.weather.summary}</div></div>
          <div className="glass overflow-hidden rounded-2xl">
            <div className="relative h-44"><img src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800&q=80" alt="map" className="h-full w-full object-cover opacity-70" /><div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" /><div className="absolute bottom-3 left-3 text-sm font-medium">Kyoto route map</div></div>
          </div>
          <div className="glass rounded-2xl p-5"><div className="text-sm font-semibold">Local tips</div><ul className="mt-2 space-y-2 text-sm text-muted-foreground">{it.tips.map((t) => (<li key={t} className="flex gap-2"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />{t}</li>))}</ul></div>
          <div className="glass rounded-2xl p-5"><div className="text-sm font-semibold">Emergency info</div><ul className="mt-2 space-y-1 text-sm">{it.emergency.map((e) => (<li key={e.label} className="flex justify-between"><span className="text-muted-foreground">{e.label}</span><span className="font-mono">{e.value}</span></li>))}</ul></div>
        </div>
      </div>
    </div>
  );
}