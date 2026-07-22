import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/dashboard/Sidebar";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Dashboard — TripMind AI" },
      { name: "description", content: "Your travel command center." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AppShell,
});

function AppShell() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex min-w-0 flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  );
}