import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthLayout, SocialAuthButtons } from "@/components/dashboard/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth/login")({
  head: () => ({ meta: [{ title: "Sign in — TripMind AI" }, { name: "description", content: "Sign in to your TripMind AI account." }] }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { toast.success("Welcome back!"); navigate({ to: "/app" }); }, 700);
  };
  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to keep planning your next adventure." footer={<>Don't have an account? <Link to="/auth/signup" className="text-primary hover:underline">Sign up</Link></>}>
      <SocialAuthButtons />
      <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground"><div className="h-px flex-1 bg-border" />or continue with email<div className="h-px flex-1 bg-border" /></div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="space-y-1.5"><Label htmlFor="email">Email</Label><Input id="email" type="email" required placeholder="you@company.com" defaultValue="alex@tripmind.ai" /></div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between"><Label htmlFor="pw">Password</Label><Link to="/auth/forgot" className="text-xs text-primary hover:underline">Forgot?</Link></div>
          <Input id="pw" type="password" required placeholder="••••••••" defaultValue="demo1234" />
        </div>
        <Button type="submit" disabled={loading} className="w-full rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">{loading ? "Signing in…" : "Sign in"}</Button>
      </form>
    </AuthLayout>
  );
}