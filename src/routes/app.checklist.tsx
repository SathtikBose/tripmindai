import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Topbar } from "@/components/dashboard/Sidebar";
import { checklist as seed } from "@/lib/mock-data";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/app/checklist")({ component: ChecklistPage });

function ChecklistPage() {
  const [items, setItems] = useState(seed);
  const cats = Array.from(new Set(items.map((i) => i.category)));
  const done = items.filter((i) => i.done).length;
  return (
    <>
      <Topbar title="Travel checklist" subtitle={`${done} of ${items.length} packed`} />
      <div className="p-6">
        <div className="glass mb-4 rounded-2xl p-5">
          <div className="flex items-center justify-between text-sm"><span className="font-medium">Ready for takeoff</span><span className="text-muted-foreground">{Math.round((done / items.length) * 100)}%</span></div>
          <div className="mt-2 h-2 w-full rounded-full bg-secondary"><div className="h-2 rounded-full bg-gradient-primary" style={{ width: `${(done / items.length) * 100}%` }} /></div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {cats.map((cat) => (
            <div key={cat} className="glass rounded-2xl p-5">
              <div className="mb-3 text-sm font-semibold">{cat}</div>
              <ul className="space-y-3">
                {items.filter((i) => i.category === cat).map((i) => (
                  <li key={i.id} className="flex items-center gap-3">
                    <Checkbox checked={i.done} onCheckedChange={(v) => setItems((all) => all.map((x) => x.id === i.id ? { ...x, done: !!v } : x))} />
                    <span className={`text-sm ${i.done ? "text-muted-foreground line-through" : ""}`}>{i.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}