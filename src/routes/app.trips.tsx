import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Topbar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trips } from "@/lib/mock-data";

export const Route = createFileRoute("/app/trips")({ component: TripsPage });

function TripsPage() {
  const [tab, setTab] = useState<"upcoming" | "completed" | "all">("upcoming");
  const [q, setQ] = useState("");
  const filtered = trips.filter((t) => (tab === "all" ? true : t.status === tab) && (q ? t.destination.toLowerCase().includes(q.toLowerCase()) : true));
  return (
    <>
      <Topbar title="My Trips" subtitle="All your planned and past adventures." action={
        <Button asChild size="sm" className="rounded-full bg-gradient-primary text-primary-foreground shadow-glow"><Link to="/app/plan"><Plus className="size-4" /> New trip</Link></Button>
      } />
      <div className="flex flex-wrap items-center gap-3 px-6 pt-6">
        <div className="inline-flex rounded-full glass p-1">
          {(["upcoming", "completed", "all"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`rounded-full px-4 py-1.5 text-sm capitalize ${tab === t ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{t}</button>
          ))}
        </div>
        <div className="relative ml-auto">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search destinations…" className="w-64 rounded-full pl-9" />
        </div>
      </div>
      <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((t) => (
          <div key={t.id} className="group overflow-hidden rounded-2xl glass shadow-card transition hover:-translate-y-1">
            <div className="relative h-44 overflow-hidden">
              <img src={t.image} alt={t.destination} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white"><div className="text-xs opacity-80">{t.country}</div><div className="text-xl font-semibold">{t.destination}</div></div>
              <span className={`absolute top-3 right-3 rounded-full px-2 py-0.5 text-xs backdrop-blur ${t.status === "upcoming" ? "bg-primary/70 text-primary-foreground" : "bg-white/20 text-white"}`}>{t.status}</span>
            </div>
            <div className="space-y-3 p-4">
              <div className="flex justify-between text-xs text-muted-foreground"><span>{new Date(t.startDate).toLocaleDateString("en", { month: "short", day: "numeric" })} — {new Date(t.endDate).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })}</span><span>{t.travelers} pax</span></div>
              <div><div className="flex justify-between text-xs text-muted-foreground"><span>Budget</span><span>${(t.spent ?? 0).toLocaleString()} / ${t.budget.toLocaleString()}</span></div><div className="mt-1 h-1.5 w-full rounded-full bg-secondary"><div className="h-1.5 rounded-full bg-gradient-primary" style={{ width: `${Math.min(100, ((t.spent ?? t.budget * 0.6) / t.budget) * 100)}%` }} /></div></div>
              <div className="flex flex-wrap gap-1">{t.tags.map((tg) => (<span key={tg} className="rounded-full bg-secondary/70 px-2 py-0.5 text-[11px] text-muted-foreground">{tg}</span>))}</div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div className="col-span-full glass rounded-2xl p-10 text-center text-sm text-muted-foreground">No trips match your search.</div>}
      </div>
    </>
  );
}