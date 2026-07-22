export type Trip = {
  id: string;
  destination: string;
  country: string;
  image: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budget: number;
  spent?: number;
  status: "upcoming" | "completed" | "planning";
  tags: string[];
};

const img = (seed: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const destinations = [
  { name: "Kyoto", country: "Japan", image: img("1524413840807-0c3cb6fa808d") },
  { name: "Santorini", country: "Greece", image: img("1570077188670-e3a8d69ac5ff") },
  { name: "Reykjavík", country: "Iceland", image: img("1504109586057-7a2ae83d1338") },
  { name: "Marrakech", country: "Morocco", image: img("1553603227-2358aabe821e") },
  { name: "Lisbon", country: "Portugal", image: img("1555881400-74d7acaacd8b") },
  { name: "Bali", country: "Indonesia", image: img("1537996194471-e657df975ab4") },
  { name: "Queenstown", country: "New Zealand", image: img("1507699622108-4be3abd695ad") },
  { name: "Cape Town", country: "South Africa", image: img("1580060839134-75a5edca2e99") },
];

export const trips: Trip[] = [
  {
    id: "trip-1",
    destination: "Kyoto",
    country: "Japan",
    image: destinations[0].image,
    startDate: "2026-08-12",
    endDate: "2026-08-22",
    travelers: 2,
    budget: 4200,
    status: "upcoming",
    tags: ["Culture", "Food", "Temples"],
  },
  {
    id: "trip-2",
    destination: "Reykjavík",
    country: "Iceland",
    image: destinations[2].image,
    startDate: "2026-10-03",
    endDate: "2026-10-10",
    travelers: 4,
    budget: 6800,
    status: "upcoming",
    tags: ["Adventure", "Nature", "Aurora"],
  },
  {
    id: "trip-3",
    destination: "Lisbon",
    country: "Portugal",
    image: destinations[4].image,
    startDate: "2026-05-04",
    endDate: "2026-05-11",
    travelers: 2,
    budget: 3200,
    spent: 3090,
    status: "completed",
    tags: ["City", "Beaches", "Wine"],
  },
  {
    id: "trip-4",
    destination: "Marrakech",
    country: "Morocco",
    image: destinations[3].image,
    startDate: "2026-02-18",
    endDate: "2026-02-25",
    travelers: 3,
    budget: 2600,
    spent: 2410,
    status: "completed",
    tags: ["Culture", "Markets", "Desert"],
  },
  {
    id: "trip-5",
    destination: "Bali",
    country: "Indonesia",
    image: destinations[5].image,
    startDate: "2025-11-01",
    endDate: "2025-11-14",
    travelers: 2,
    budget: 5200,
    spent: 4890,
    status: "completed",
    tags: ["Beach", "Yoga", "Surf"],
  },
];

export const monthlyStats = [
  { month: "Jan", trips: 1, spent: 1200 },
  { month: "Feb", trips: 2, spent: 2400 },
  { month: "Mar", trips: 0, spent: 0 },
  { month: "Apr", trips: 1, spent: 1800 },
  { month: "May", trips: 2, spent: 3090 },
  { month: "Jun", trips: 3, spent: 4200 },
  { month: "Jul", trips: 2, spent: 3600 },
  { month: "Aug", trips: 4, spent: 5200 },
  { month: "Sep", trips: 1, spent: 1400 },
  { month: "Oct", trips: 2, spent: 2800 },
  { month: "Nov", trips: 3, spent: 4890 },
  { month: "Dec", trips: 1, spent: 1700 },
];

export const spendCategories = [
  { name: "Flights", value: 1400, color: "var(--chart-1)" },
  { name: "Hotels", value: 1100, color: "var(--chart-2)" },
  { name: "Food", value: 620, color: "var(--chart-3)" },
  { name: "Activities", value: 480, color: "var(--chart-4)" },
  { name: "Transport", value: 210, color: "var(--chart-5)" },
];

export const testimonials = [
  {
    name: "Amelia Chen",
    role: "Travel Blogger, @wanderamelia",
    quote:
      "TripMind planned a 12-day Japan itinerary in 90 seconds. It nailed the pacing, hidden ramen spots, and even a rainy-day backup plan.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Marcus Alvarez",
    role: "Product Lead, Notion",
    quote:
      "I've replaced three apps with TripMind. Budget, checklist, and itinerary all live together — and it actually feels premium.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Priya Raman",
    role: "Founder, Loop Studio",
    quote:
      "The AI assistant re-planned our whole day in Lisbon after a train strike. Zero stress, perfect suggestions.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
];

export const faqs = [
  {
    q: "How does the AI trip planner work?",
    a: "You share your dates, budget, and travel style. Our model composes a day-by-day itinerary with activities, restaurants, transit and estimated costs — you can regenerate any section instantly.",
  },
  {
    q: "Can I edit the itinerary after it's generated?",
    a: "Yes. Every activity, meal and travel leg is fully editable. You can drag to reorder, swap suggestions, or ask the assistant to re-plan a day.",
  },
  {
    q: "Does TripMind book flights and hotels?",
    a: "TripMind surfaces the best options and links out to trusted booking partners. In-app booking with Pro is rolling out in Q4.",
  },
  {
    q: "Is my data private?",
    a: "Absolutely. Your itineraries and payment info are encrypted end-to-end. We never sell your data or share it with third parties.",
  },
  {
    q: "Can I use TripMind offline?",
    a: "Yes. Every itinerary is available offline on iOS and Android, including maps, tickets and emergency contacts.",
  },
];

export const checklist = [
  { id: "c1", label: "Passport & visa documents", done: true, category: "Documents" },
  { id: "c2", label: "Travel insurance", done: true, category: "Documents" },
  { id: "c3", label: "Universal power adapter", done: false, category: "Electronics" },
  { id: "c4", label: "Portable charger", done: true, category: "Electronics" },
  { id: "c5", label: "Noise-cancelling headphones", done: false, category: "Electronics" },
  { id: "c6", label: "Lightweight rain jacket", done: false, category: "Clothing" },
  { id: "c7", label: "Comfortable walking shoes", done: true, category: "Clothing" },
  { id: "c8", label: "Sunscreen & lip balm", done: false, category: "Toiletries" },
  { id: "c9", label: "Prescription medication", done: false, category: "Toiletries" },
  { id: "c10", label: "Local currency (¥20,000)", done: false, category: "Money" },
];

export const notifications = [
  { id: "n1", title: "Flight check-in opens", body: "ANA NH106 to Tokyo — 24h window opens tomorrow at 6:00 AM.", time: "2h ago", unread: true },
  { id: "n2", title: "Weather alert for Kyoto", body: "Light rain expected on day 3. We've updated your itinerary.", time: "5h ago", unread: true },
  { id: "n3", title: "Price drop", body: "Park Hyatt Tokyo dropped $84/night for your dates.", time: "Yesterday", unread: false },
  { id: "n4", title: "Itinerary shared", body: "Marcus accepted your invite to Reykjavík 2026.", time: "2d ago", unread: false },
];

export const sampleItinerary = {
  destination: "Kyoto, Japan",
  dates: "Aug 12 — Aug 22, 2026",
  weather: { high: 32, low: 24, summary: "Warm & humid, occasional showers" },
  days: [
    {
      day: 1,
      title: "Arrival & Gion at dusk",
      items: [
        { time: "14:30", title: "Arrive KIX, Haruka Express to Kyoto", cost: 35, kind: "Transport" },
        { time: "16:00", title: "Check in — Hotel The Celestine Gion", cost: 240, kind: "Hotel" },
        { time: "18:30", title: "Stroll Hanamikoji Street", cost: 0, kind: "Activity" },
        { time: "20:00", title: "Kaiseki dinner at Gion Karyo", cost: 95, kind: "Food" },
      ],
    },
    {
      day: 2,
      title: "Arashiyama bamboo & river",
      items: [
        { time: "08:00", title: "Breakfast at % Arabica Higashiyama", cost: 12, kind: "Food" },
        { time: "09:30", title: "Bamboo Grove & Tenryu-ji Temple", cost: 8, kind: "Activity" },
        { time: "12:30", title: "Lunch — Yudofu Sagano", cost: 28, kind: "Food" },
        { time: "15:00", title: "Hozugawa river boat ride", cost: 45, kind: "Activity" },
        { time: "19:30", title: "Ramen at Menbaka Fire Ramen", cost: 22, kind: "Food" },
      ],
    },
    {
      day: 3,
      title: "Fushimi Inari at sunrise",
      items: [
        { time: "05:30", title: "Sunrise hike — Fushimi Inari Taisha", cost: 0, kind: "Activity" },
        { time: "09:00", title: "Matcha breakfast at Ippodo Tea", cost: 18, kind: "Food" },
        { time: "11:00", title: "Nishiki Market food crawl", cost: 40, kind: "Food" },
        { time: "15:00", title: "Nijo Castle & gardens", cost: 12, kind: "Activity" },
        { time: "20:00", title: "Sushi omakase — Sushi Matsumoto", cost: 180, kind: "Food" },
      ],
    },
  ],
  tips: [
    "Buy an ICOCA card at KIX for buses, subway and JR West lines.",
    "Temples close early — most gates shut by 16:30.",
    "Tipping is not customary; a polite 'gochisousama' after meals goes a long way.",
    "Carry cash — many smaller restaurants and shrines are cash-only.",
  ],
  emergency: [
    { label: "Police", value: "110" },
    { label: "Ambulance / Fire", value: "119" },
    { label: "Japan Helpline (EN)", value: "0570-000-911" },
    { label: "Embassy of USA", value: "+81 3-3224-5000" },
  ],
};

export const currencies = [
  { code: "USD", name: "US Dollar", rate: 1 },
  { code: "EUR", name: "Euro", rate: 0.92 },
  { code: "GBP", name: "British Pound", rate: 0.78 },
  { code: "JPY", name: "Japanese Yen", rate: 157.2 },
  { code: "AUD", name: "Australian Dollar", rate: 1.52 },
  { code: "CAD", name: "Canadian Dollar", rate: 1.36 },
  { code: "INR", name: "Indian Rupee", rate: 83.5 },
  { code: "MXN", name: "Mexican Peso", rate: 17.1 },
];
