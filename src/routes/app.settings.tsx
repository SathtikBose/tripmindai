import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/app/settings")({ component: SettingsPage });

function SettingsPage() {
  return (
    <>
      <Topbar title="Settings" subtitle="Manage your profile, preferences, and notifications." />
      <div className="grid gap-4 p-6 lg:grid-cols-3">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="text-sm font-semibold">Profile</div>
          <div className="mt-4 flex items-center gap-4">
            <img src="https://i.pravatar.cc/120?img=15" className="size-16 rounded-full ring-2 ring-border" alt="" />
            <div><Button size="sm" variant="outline" className="rounded-full">Change avatar</Button><p className="mt-1 text-xs text-muted-foreground">JPG or PNG, max 2MB.</p></div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5"><Label>First name</Label><Input defaultValue="Alex" /></div>
            <div className="space-y-1.5"><Label>Last name</Label><Input defaultValue="Rivera" /></div>
            <div className="space-y-1.5"><Label>Email</Label><Input defaultValue="alex@tripmind.ai" /></div>
            <div className="space-y-1.5"><Label>Home city</Label><Input defaultValue="Brooklyn, NY" /></div>
          </div>
          <div className="mt-6"><Button className="rounded-full bg-gradient-primary text-primary-foreground shadow-glow">Save changes</Button></div>
        </div>
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6">
            <div className="text-sm font-semibold">Preferences</div>
            <div className="mt-4 space-y-4 text-sm">
              {[["Weekly digest", "A recap of your travel activity"], ["Price alerts", "Flight & hotel deals"], ["AI suggestions", "Proactive itinerary tweaks"], ["Marketing emails", "Product news & tips"]].map(([l, s], i) => (
                <div key={l} className="flex items-center justify-between"><div><div className="font-medium">{l}</div><div className="text-xs text-muted-foreground">{s}</div></div><Switch defaultChecked={i < 3} /></div>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-sm font-semibold">Plan</div>
            <div className="mt-2 text-2xl font-semibold">Pro</div>
            <div className="text-xs text-muted-foreground">$12/mo · renews Aug 12</div>
            <Button variant="outline" size="sm" className="mt-4 w-full rounded-full">Manage billing</Button>
          </div>
        </div>
      </div>
    </>
  );
}