import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Bell, MapPin, Plus, Sparkles, TrendingUp, Wallet } from "lucide-react";
import { Topbar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { trips, notifications, monthlyStats } from "@/lib/mock-data";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export const Route = createFileRoute("/app/")({
  component: OverviewPage,
});

function OverviewPage() {
  const upcoming = trips.filter((t) => t.status === "upcoming");
  const completed = trips.filter((t) => t.status === "completed");
  const totalSpent = completed.reduce((s, t) => s + (t.spent ?? 0), 0);

  return (
    <>
      <Topbar title="Welcome back, Alex ✨" subtitle="Here's what's on your travel horizon." action={
        <Button asChild size="sm" className="rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
          <Link to="/app/plan"><Plus className="size-4" /> New trip</Link>
        </Button>
      } />
      <div className="grid gap-4 p-6 md:grid-cols-4">
        {[
          { label: "Upcoming trips", value: upcoming.length, delta: "+1 this month", icon: MapPin },
          { label: "Countries visited", value: 14, delta: "+2 vs last year", icon: TrendingUp },
          { label: "Money spent (YTD)", value: `$${totalSpent.toLocaleString()}`, delta: "-8% vs plan", icon: Wallet },
          { label: "AI plans generated", value: 28, delta: "+6 this week", icon: Sparkles },
        ].map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between text-muted-foreground"><span className="text-xs uppercase tracking-wider">{s.label}</span><s.icon className="size-4" /></div>
            <div className="mt-3 text-3xl font-semibold tracking-tight">{s.value}</div>
            <div className="mt-1 text-xs text-primary">{s.delta}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 px-6 pb-6 lg:grid-cols-3">
        <div className="glass rounded-2xl p-5 lg:col-span-2">
          <div className="flex items-center justify-between"><div><div className="text-sm font-semibold">Travel activity</div><div className="text-xs text-muted-foreground">Monthly trips & spend</div></div><span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">Last 12 months</span></div>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyStats} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="oklch(0.72 0.15 190)" stopOpacity={0.6} /><stop offset="100%" stopColor="oklch(0.72 0.15 190)" stopOpacity={0} /></linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
                <Area type="monotone" dataKey="spent" stroke="oklch(0.72 0.15 190)" strokeWidth={2} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="flex items-center justify-between"><div className="text-sm font-semibold">Notifications</div><Bell className="size-4 text-muted-foreground" /></div>
          <ul className="mt-3 space-y-3">
            {notifications.map((n) => (
              <li key={n.id} className="flex gap-3">
                <span className={`mt-1.5 size-2 shrink-0 rounded-full ${n.unread ? "bg-accent" : "bg-muted"}`} />
                <div className="min-w-0"><div className="truncate text-sm font-medium">{n.title}</div><div className="line-clamp-2 text-xs text-muted-foreground">{n.body}</div><div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{n.time}</div></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 pb-10">
        <div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-semibold">Upcoming trips</h2><Link to="/app/trips" className="text-sm text-primary hover:underline inline-flex items-center gap-1">View all <ArrowUpRight className="size-3.5" /></Link></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((t) => (
            <div key={t.id} className="group overflow-hidden rounded-2xl glass shadow-card">
              <div className="relative h-40 overflow-hidden">
                <img src={t.image} alt={t.destination} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white"><div className="text-xs opacity-80">{t.country}</div><div className="text-lg font-semibold">{t.destination}</div></div>
                <span className="absolute top-3 right-3 rounded-full bg-white/20 px-2 py-0.5 text-xs text-white backdrop-blur">{t.travelers} travelers</span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground"><span>{new Date(t.startDate).toLocaleDateString("en", { month: "short", day: "numeric" })} — {new Date(t.endDate).toLocaleDateString("en", { month: "short", day: "numeric" })}</span><span>${t.budget.toLocaleString()}</span></div>
                <div className="mt-3 flex flex-wrap gap-1">{t.tags.map((tg) => (<span key={tg} className="rounded-full bg-secondary/70 px-2 py-0.5 text-[11px] text-muted-foreground">{tg}</span>))}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}