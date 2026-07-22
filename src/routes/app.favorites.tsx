import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Topbar } from "@/components/dashboard/Sidebar";
import { destinations } from "@/lib/mock-data";

export const Route = createFileRoute("/app/favorites")({ component: FavoritesPage });

function FavoritesPage() {
  return (
    <>
      <Topbar title="Favorite destinations" subtitle="Dream destinations saved for later." />
      <div className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {destinations.map((d) => (
          <div key={d.name} className="group relative overflow-hidden rounded-2xl">
            <img src={d.image} alt={d.name} className="h-56 w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <button className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30"><Heart className="size-4 fill-current" /></button>
            <div className="absolute bottom-3 left-3 text-white"><div className="text-xs opacity-80">{d.country}</div><div className="text-lg font-semibold">{d.name}</div></div>
          </div>
        ))}
      </div>
    </>
  );
}