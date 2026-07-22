import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AuthLayout } from "@/components/dashboard/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth/forgot")({
  head: () => ({ meta: [{ title: "Reset password — TripMind AI" }, { name: "description", content: "Reset your TripMind AI password." }] }),
  component: ForgotPage,
});

function ForgotPage() {
  const [sent, setSent] = useState(false);
  return (
    <AuthLayout title="Reset your password" subtitle="Enter your email and we'll send you a magic link to reset it." footer={<>Remembered it? <Link to="/auth/login" className="text-primary hover:underline">Back to sign in</Link></>}>
      {sent ? (
        <div className="rounded-xl bg-primary/10 p-4 text-sm text-primary">Check your inbox for the reset link.</div>
      ) : (
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); toast.success("Reset link sent"); }}>
          <div className="space-y-1.5"><Label htmlFor="email">Email</Label><Input id="email" type="email" required placeholder="you@company.com" /></div>
          <Button type="submit" className="w-full rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">Send reset link</Button>
        </form>
      )}
    </AuthLayout>
  );
}