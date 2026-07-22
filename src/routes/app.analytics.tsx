import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Sidebar";
import { monthlyStats, spendCategories } from "@/lib/mock-data";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const countries = [
  { name: "Asia", value: 6 }, { name: "Europe", value: 4 }, { name: "N. America", value: 2 }, { name: "Africa", value: 1 }, { name: "Oceania", value: 1 },
];

export const Route = createFileRoute("/app/analytics")({ component: AnalyticsPage });

function AnalyticsPage() {
  return (
    <>
      <Topbar title="Travel analytics" subtitle="Beautifully visualized insights." />
      <div className="grid gap-4 p-6 md:grid-cols-4">
        {[{ l: "Trips completed", v: "22" }, { l: "Countries visited", v: "14" }, { l: "Cities", v: "48" }, { l: "Miles flown", v: "132k" }].map((s) => (
          <div key={s.l} className="glass rounded-2xl p-5"><div className="text-xs uppercase text-muted-foreground">{s.l}</div><div className="mt-1 text-3xl font-semibold">{s.v}</div></div>
        ))}
      </div>
      <div className="grid gap-4 px-6 pb-6 lg:grid-cols-3">
        <div className="glass rounded-2xl p-5 lg:col-span-2">
          <div className="text-sm font-semibold">Monthly trips & spend</div>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="trips" fill="oklch(0.72 0.15 190)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="spent" fill="oklch(0.72 0.17 45)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="text-sm font-semibold">Continents</div>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart><Pie data={countries} dataKey="value" nameKey="name" outerRadius={90} label>{countries.map((_, i) => (<Cell key={i} fill={`var(--chart-${(i % 5) + 1})`} />))}</Pie><Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} /></PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid gap-4 px-6 pb-10 lg:grid-cols-2">
        <div className="glass rounded-2xl p-5">
          <div className="text-sm font-semibold">Spend by category</div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={spendCategories} layout="vertical">
                <XAxis type="number" stroke="var(--muted-foreground)" fontSize={11} /><YAxis type="category" dataKey="name" stroke="var(--muted-foreground)" fontSize={11} width={80} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
                <Bar dataKey="value" radius={[0, 6, 6, 0]}>{spendCategories.map((c, i) => (<Cell key={i} fill={c.color} />))}</Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="text-sm font-semibold">Trip trend</div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} /><YAxis stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
                <Line type="monotone" dataKey="trips" stroke="oklch(0.72 0.15 190)" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}