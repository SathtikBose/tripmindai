import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { Topbar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Msg = { role: "user" | "assistant"; text: string };

const seed: Msg[] = [
  { role: "assistant", text: "Hi Alex! I'm your travel co-pilot. Ask me anything about your Kyoto trip — I can replan days, find restaurants, or help with budget." },
  { role: "user", text: "What should I do if it rains on day 3?" },
  { role: "assistant", text: "Great question. If it rains on day 3, I'd swap the Fushimi Inari sunrise hike for the Kyoto National Museum in the morning, then a tea ceremony at Camellia Flower Teahouse. Want me to update the itinerary?" },
];

const suggestions = ["Find a vegetarian ramen spot", "Cheaper hotel near Gion", "Add a day trip to Nara", "Weather-proof my itinerary"];

export const Route = createFileRoute("/app/assistant")({ component: AssistantPage });

function AssistantPage() {
  const [msgs, setMsgs] = useState<Msg[]>(seed);
  const [input, setInput] = useState("");
  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => setMsgs((m) => [...m, { role: "assistant", text: "On it — I've drafted a few options based on your preferences. Want me to add them to day 2 or day 3?" }]), 700);
  };
  return (
    <>
      <Topbar title="AI Assistant" subtitle="Your always-on travel co-pilot." />
      <div className="flex flex-1 flex-col p-6">
        <div className="glass flex flex-1 flex-col rounded-3xl">
          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            {msgs.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === "user" ? "justify-end" : ""}`}>
                {m.role === "assistant" && <div className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow"><Sparkles className="size-4" /></div>}
                <div className={`max-w-lg rounded-2xl px-4 py-3 text-sm ${m.role === "user" ? "bg-gradient-primary text-primary-foreground" : "bg-secondary/70"}`}>{m.text}</div>
                {m.role === "user" && <img src="https://i.pravatar.cc/60?img=15" className="size-8 rounded-full" alt="" />}
              </div>
            ))}
          </div>
          <div className="border-t border-border/60 p-4">
            <div className="mb-3 flex flex-wrap gap-2">{suggestions.map((s) => (<button key={s} onClick={() => send(s)} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground hover:bg-secondary">{s}</button>))}</div>
            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask anything about your trip…" className="rounded-full" />
              <Button type="submit" size="icon" className="rounded-full bg-gradient-primary text-primary-foreground shadow-glow"><Send className="size-4" /></Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}