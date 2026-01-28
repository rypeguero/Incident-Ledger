"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import IncidentSidebar from "../components/IncidentSidebar";

// src/app/incidents/page.tsx
type Incident = {
  id: string;
  title: string;
  status: "Open" | "Investigating" | "Resolved";
  date: string;
  summary: string;
  category: "software" | "building" | "custodial" | "healthcare";
};

const incidents: Incident[] = [
  // Software Dev
  {
    id: "SD-2041",
    title: "API outage on auth service",
    status: "Investigating",
    date: "2025-01-12",
    summary: "Spike in 500s after deploy. Rollback planned, logs under review.",
    category: "software",
  },
  {
    id: "SD-2037",
    title: "CI pipeline stuck on build step",
    status: "Resolved",
    date: "2025-01-10",
    summary: "Runner cache corrupted. Cleared cache and restarted workers.",
    category: "software",
  },
  {
    id: "SD-2034",
    title: "Database migration timeout",
    status: "Open",
    date: "2025-01-08",
    summary: "Schema update locked on table constraints. Planning rollback strategy.",
    category: "software",
  },
  // Building Management
  {
    id: "BM-1183",
    title: "HVAC not cooling on Floor 2",
    status: "Open",
    date: "2025-01-09",
    summary: "Thermostat reads 82°F. Work order filed; awaiting technician.",
    category: "building",
  },
  {
    id: "BM-1181",
    title: "Elevator #3 intermittent stops",
    status: "Investigating",
    date: "2025-01-08",
    summary: "Vendor contacted; logs pulled from controller unit.",
    category: "building",
  },
  {
    id: "BM-1178",
    title: "Parking gate sensor malfunction",
    status: "Resolved",
    date: "2025-01-06",
    summary: "Sensor recalibrated and tested with multiple vehicle types.",
    category: "building",
  },
  // Custodial Work
  {
    id: "CW-552",
    title: "Supply shortage: paper towels",
    status: "Open",
    date: "2025-01-07",
    summary: "Stock below threshold in restrooms A & D. Order placed.",
    category: "custodial",
  },
  {
    id: "CW-549",
    title: "Spill in lobby near reception",
    status: "Resolved",
    date: "2025-01-06",
    summary: "Cleaned and cordoned. Signage removed after dry check.",
    category: "custodial",
  },
  {
    id: "CW-547",
    title: "Recycling bin overflow in cafeteria",
    status: "Open",
    date: "2025-01-05",
    summary: "Pickup schedule adjusted; extra bin requested for peak hours.",
    category: "custodial",
  },
  // Healthcare
  {
    id: "HC-310",
    title: "Vitals monitor shows artifact noise",
    status: "Investigating",
    date: "2025-01-05",
    summary: "ECG leads inspected; biomed notified for calibration.",
    category: "healthcare",
  },
  {
    id: "HC-308",
    title: "Medication cart lock not engaging",
    status: "Resolved",
    date: "2025-01-04",
    summary: "Latch replaced; audit log updated and tested with staff.",
    category: "healthcare",
  },
  {
    id: "HC-305",
    title: "Patient call button unresponsive in Room 412",
    status: "Investigating",
    date: "2025-01-03",
    summary: "Wiring inspected; replacement unit on order.",
    category: "healthcare",
  },
];

const statusColor: Record<Incident["status"], string> = {
  Open: "bg-red-500/20 text-red-200 border-red-500/40",
  Investigating: "bg-amber-500/20 text-amber-200 border-amber-500/40",
  Resolved: "bg-emerald-500/20 text-emerald-200 border-emerald-500/40",
};

const categoryInfo = [
  {
    id: "software",
    name: "Software Development",
    description: "IT infrastructure, applications, systems, and deployment issues",
    icon: "💻",
    examples: [
      "API outages or performance degradation",
      "Build pipeline failures",
      "Database migration issues",
      "Security vulnerabilities",
      "Service deployment problems"
    ]
  },
  {
    id: "building",
    name: "Building Management",
    description: "Facility maintenance, HVAC, elevators, and infrastructure",
    icon: "🏢",
    examples: [
      "HVAC/temperature control failures",
      "Elevator malfunctions",
      "Door access system issues",
      "Parking system failures",
      "Electrical or plumbing problems"
    ]
  },
  {
    id: "custodial",
    name: "Custodial",
    description: "Cleaning, maintenance, supplies, and general upkeep",
    icon: "🧹",
    examples: [
      "Supply shortages (paper towels, soap, etc.)",
      "Spill cleanup and floor hazards",
      "Trash and recycling overflow",
      "Equipment malfunction (vacuum, buffers)",
      "Restroom maintenance issues"
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Medical equipment, patient care, and clinical issues",
    icon: "🏥",
    examples: [
      "Medical equipment malfunction",
      "Patient monitoring issues",
      "Medication/supply problems",
      "Call button or communication failures",
      "Infection control breaches"
    ]
  }
];

export default function IncidentsPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("software");

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12 pl-72">
      <IncidentSidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8">
        <header className="flex items-center justify-between px-2 sm:px-4">
          <div>
            <p className="text-sm text-slate-400">Demo view</p>
            {selectedCategory === 'concepts' ? (
              <>
                <h1 className="text-3xl font-semibold">Concepts & Examples</h1>
                <p className="text-xs text-slate-500 mt-1">Learn about different incident types</p>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-semibold">Incidents</h1>
                <p className="text-xs text-slate-500 mt-1">Category: {selectedCategory}</p>
              </>
            )}
          </div>
          {selectedCategory !== 'concepts' && (
            <button
              onClick={() => router.push("/Incidents/create")}
              aria-label="Create new incident"
              className="ml-auto inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white font-semibold px-6 py-3 shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-colors border border-indigo-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <span className="text-xl leading-none">＋</span>
              <span>New Incident</span>
            </button>
          )}
        </header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {selectedCategory === 'concepts' ? (
    // Concepts View
    categoryInfo.map((category) => (
      <div
        key={category.id}
        className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg hover:shadow-xl hover:border-slate-700 transition-all"
      >
        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl">{category.icon}</span>
          <div>
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <p className="text-xs text-slate-400 mt-1">{category.description}</p>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-4 mt-4">
          <h3 className="text-sm font-medium text-slate-300 mb-3">Common Examples:</h3>
          <ul className="space-y-2">
            {category.examples.map((example, idx) => (
              <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                <span className="text-indigo-400 mt-0.5">•</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))
  ) : (
    // Incidents View
    incidents
      .filter((i) => i.category === selectedCategory)
      .map((incident) => (
        <div
          key={incident.id}
          className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg hover:shadow-xl hover:border-slate-700 transition-all cursor-pointer"
        >
          <div className="flex items-start justify-between mb-3">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full border ${statusColor[incident.status]}`}
            >
              {incident.status}
            </span>
            <p className="text-xs text-slate-500">{incident.id}</p>
          </div>
          
          <h2 className="text-xl font-semibold mb-2">{incident.title}</h2>
          <p className="text-sm text-slate-300 mb-4">{incident.summary}</p>
          
          <p className="text-xs text-slate-400">{incident.date}</p>
        </div>
      ))
  )}
</div>
{selectedCategory !== 'concepts' && incidents.filter((i) => i.category === selectedCategory).length === 0 && (
  <p className="text-sm text-slate-400">No incidents for this category (demo).</p>
)}
      </div>
    </div>
  </main>
);
}