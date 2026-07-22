import { Link, useRouterState } from "@tanstack/react-router";
import { BarChart3, Bell, Bot, Compass, Heart, LayoutDashboard, ListChecks, LogOut, Map, Settings, Sparkles, Wallet } from "lucide-react";
import { Brand } from "@/components/brand";

type NavItem = { to: string; label: string; icon: typeof LayoutDashboard; exact?: boolean };
const items: NavItem[] = [
  { to: "/app", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/app/trips", label: "Trips", icon: Map },
  { to: "/app/plan", label: "AI Planner", icon: Sparkles },
  { to: "/app/assistant", label: "Assistant", icon: Bot },
  { to: "/app/favorites", label: "Favorites", icon: Heart },
  { to: "/app/budget", label: "Budget", icon: Wallet },
  { to: "/app/checklist", label: "Checklist", icon: ListChecks },
  { to: "/app/analytics", label: "Analytics", icon: BarChart3 },
];

export function Sidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border/60 bg-sidebar text-sidebar-foreground lg:flex lg:flex-col">
      <div className="px-5 py-5"><Brand /></div>
      <nav className="flex-1 space-y-0.5 px-3">
        {items.map((it) => {
          const active = it.exact ? path === it.to : path.startsWith(it.to);
          return (
          <Link key={it.to} to={it.to as any} className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${active ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm" : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"}`}>
              <it.icon className="size-4" />{it.label}
              {active && <span className="ml-auto size-1.5 rounded-full bg-primary" />}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-border/60 p-3">
        <div className="glass rounded-2xl p-3">
          <div className="flex items-center gap-2 text-xs"><Compass className="size-4 text-primary" /><span className="font-medium">Pro tip</span></div>
          <p className="mt-1 text-xs text-muted-foreground">Ask the assistant to "replan day 3" for instant swaps.</p>
        </div>
        <Link to="/app/settings" className="mt-2 flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"><Settings className="size-4" /> Settings</Link>
        <Link to="/" className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"><LogOut className="size-4" /> Sign out</Link>
      </div>
    </aside>
  );
}

export function Topbar({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-4 border-b border-border/60 bg-background/70 px-6 py-4 backdrop-blur">
      <div className="min-w-0">
        <h1 className="truncate text-2xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        <button className="relative grid size-9 place-items-center rounded-full glass text-muted-foreground hover:text-foreground"><Bell className="size-4" /><span className="absolute right-2 top-2 size-2 rounded-full bg-accent" /></button>
        {action}
        <img src="https://i.pravatar.cc/60?img=15" alt="you" className="size-9 rounded-full ring-2 ring-border" />
      </div>
    </div>
  );
}