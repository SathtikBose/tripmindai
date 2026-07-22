import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Topbar } from "@/components/dashboard/Sidebar";
import { spendCategories, currencies } from "@/lib/mock-data";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const expenses = [
  { date: "Aug 12", desc: "ANA flight JFK → HND", cat: "Flights", amount: 1284 },
  { date: "Aug 12", desc: "Haruka Express", cat: "Transport", amount: 35 },
  { date: "Aug 12", desc: "The Celestine Gion", cat: "Hotels", amount: 240 },
  { date: "Aug 13", desc: "Kaiseki dinner", cat: "Food", amount: 95 },
  { date: "Aug 13", desc: "Bamboo grove tour", cat: "Activities", amount: 45 },
  { date: "Aug 14", desc: "Sushi omakase", cat: "Food", amount: 180 },
];

export const Route = createFileRoute("/app/budget")({ component: BudgetPage });

function BudgetPage() {
  const total = spendCategories.reduce((s, c) => s + c.value, 0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("JPY");
  const [amt, setAmt] = useState(100);
  const converted = (amt * (currencies.find((c) => c.code === to)?.rate ?? 1)) / (currencies.find((c) => c.code === from)?.rate ?? 1);
  return (
    <>
      <Topbar title="Budget tracker" subtitle="Every expense, converted and categorized." />
      <div className="grid gap-4 p-6 lg:grid-cols-3">
        <div className="glass rounded-2xl p-5"><div className="text-xs uppercase text-muted-foreground">Total spent</div><div className="mt-1 text-3xl font-semibold">${total.toLocaleString()}</div><div className="text-xs text-primary">of $5,000 budget</div><div className="mt-4 h-2 rounded-full bg-secondary"><div className="h-2 rounded-full bg-gradient-primary" style={{ width: `${(total / 5000) * 100}%` }} /></div></div>
        <div className="glass rounded-2xl p-5"><div className="text-xs uppercase text-muted-foreground">Avg / day</div><div className="mt-1 text-3xl font-semibold">${Math.round(total / 10).toLocaleString()}</div><div className="text-xs text-muted-foreground">across 10 days</div></div>
        <div className="glass rounded-2xl p-5"><div className="text-xs uppercase text-muted-foreground">Biggest category</div><div className="mt-1 text-3xl font-semibold">Flights</div><div className="text-xs text-muted-foreground">${spendCategories[0].value.toLocaleString()} · {Math.round((spendCategories[0].value / total) * 100)}%</div></div>
      </div>

      <div className="grid gap-4 px-6 pb-6 lg:grid-cols-3">
        <div className="glass rounded-2xl p-5">
          <div className="text-sm font-semibold">By category</div>
          <div className="mt-2 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart><Pie data={spendCategories} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={3}>{spendCategories.map((c, i) => (<Cell key={i} fill={c.color} />))}</Pie><Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} /></PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="mt-2 space-y-1 text-xs">{spendCategories.map((c) => (<li key={c.name} className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="size-2 rounded-full" style={{ background: c.color }} />{c.name}</span><span>${c.value}</span></li>))}</ul>
        </div>

        <div className="glass rounded-2xl p-5 lg:col-span-2">
          <div className="mb-3 flex items-center justify-between"><div className="text-sm font-semibold">Recent expenses</div><button className="text-xs text-primary hover:underline">Add expense</button></div>
          <div className="overflow-x-auto"><table className="w-full text-sm"><thead className="text-xs text-muted-foreground"><tr className="border-b border-border/60"><th className="py-2 text-left font-normal">Date</th><th className="py-2 text-left font-normal">Description</th><th className="py-2 text-left font-normal">Category</th><th className="py-2 text-right font-normal">Amount</th></tr></thead>
            <tbody>{expenses.map((e, i) => (<tr key={i} className="border-b border-border/40"><td className="py-3 text-muted-foreground">{e.date}</td><td className="py-3">{e.desc}</td><td className="py-3"><span className="rounded-full bg-secondary/70 px-2 py-0.5 text-xs">{e.cat}</span></td><td className="py-3 text-right font-medium">${e.amount}</td></tr>))}</tbody></table></div>
        </div>
      </div>

      <div className="px-6 pb-10">
        <div className="glass rounded-2xl p-5">
          <div className="text-sm font-semibold">Currency converter</div>
          <div className="mt-3 grid gap-3 md:grid-cols-4">
            <div><label className="text-xs text-muted-foreground">Amount</label><Input type="number" value={amt} onChange={(e) => setAmt(+e.target.value || 0)} /></div>
            <div><label className="text-xs text-muted-foreground">From</label><Select value={from} onValueChange={setFrom}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{currencies.map((c) => (<SelectItem key={c.code} value={c.code}>{c.code} — {c.name}</SelectItem>))}</SelectContent></Select></div>
            <div><label className="text-xs text-muted-foreground">To</label><Select value={to} onValueChange={setTo}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{currencies.map((c) => (<SelectItem key={c.code} value={c.code}>{c.code} — {c.name}</SelectItem>))}</SelectContent></Select></div>
            <div><label className="text-xs text-muted-foreground">Converted</label><div className="mt-1 rounded-md border border-border bg-background/60 px-3 py-2 text-lg font-semibold">{converted.toLocaleString(undefined, { maximumFractionDigits: 2 })} {to}</div></div>
          </div>
        </div>
      </div>
    </>
  );
}