import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Brand({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <span className="relative grid size-8 place-items-center rounded-xl bg-gradient-primary shadow-glow">
        <Sparkles className="size-4 text-primary-foreground" />
      </span>
      <span className="text-lg font-semibold tracking-tight">TripMind<span className="text-primary"> AI</span></span>
    </Link>
  );
}