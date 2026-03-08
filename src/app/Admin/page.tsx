import Link from "next/link";
import {
  IconBuilding,
  IconCode,
  IconHeartPulse,
  IconWrench,
} from "../components/Icons";

const workTypes = [
  {
    id: "software",
    name: "Software Development",
    description: "Apps, systems, deployments, outages",
    Icon: IconCode,
  },
  {
    id: "building",
    name: "Building Management",
    description: "HVAC, elevators, infrastructure",
    Icon: IconBuilding,
  },
  {
    id: "custodial",
    name: "Custodial",
    description: "Supplies, spills, upkeep",
    Icon: IconWrench,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Equipment, patient care, clinical issues",
    Icon: IconHeartPulse,
  },
] as const;

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-8">
          <p className="text-sm text-slate-400">Demo admin view</p>
          <h1 className="text-3xl font-semibold">Choose your work of interest</h1>
          <p className="text-sm text-slate-300 mt-2">
            Pick a work type to see a tailored admin-style view.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workTypes.map((w) => (
            <Link
              key={w.id}
              href={`/Admin/${w.id}`}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-slate-700 hover:bg-slate-900 transition"
            >
              <div className="flex items-start gap-4">
                <w.Icon className="h-8 w-8 text-indigo-300" />
                <div>
                  <h2 className="text-xl font-semibold">{w.name}</h2>
                  <p className="text-sm text-slate-300 mt-1">{w.description}</p>
                  <p className="text-xs text-slate-500 mt-3">Open dashboard →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}