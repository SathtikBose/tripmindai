import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthLayout, SocialAuthButtons } from "@/components/dashboard/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth/signup")({
  head: () => ({ meta: [{ title: "Create account — TripMind AI" }, { name: "description", content: "Create your TripMind AI account and start planning trips with AI." }] }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { toast.success("Account created — welcome to TripMind!"); navigate({ to: "/app" }); }, 700);
  };
  return (
    <AuthLayout title="Create your account" subtitle="Free forever. No credit card required." footer={<>Already a member? <Link to="/auth/login" className="text-primary hover:underline">Sign in</Link></>}>
      <SocialAuthButtons />
      <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground"><div className="h-px flex-1 bg-border" />or sign up with email<div className="h-px flex-1 bg-border" /></div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5"><Label htmlFor="fn">First name</Label><Input id="fn" required defaultValue="Alex" /></div>
          <div className="space-y-1.5"><Label htmlFor="ln">Last name</Label><Input id="ln" required defaultValue="Rivera" /></div>
        </div>
        <div className="space-y-1.5"><Label htmlFor="email">Email</Label><Input id="email" type="email" required placeholder="you@company.com" /></div>
        <div className="space-y-1.5"><Label htmlFor="pw">Password</Label><Input id="pw" type="password" required placeholder="At least 8 characters" /></div>
        <Button type="submit" disabled={loading} className="w-full rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">{loading ? "Creating…" : "Create account"}</Button>
        <p className="text-center text-[11px] text-muted-foreground">By continuing you agree to our Terms and Privacy Policy.</p>
      </form>
    </AuthLayout>
  );
}