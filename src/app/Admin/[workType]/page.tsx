import Link from "next/link";
import { notFound } from "next/navigation";

const workTypeInfo: Record<
  string,
  { title: string; description: string; incidentsCategory?: string }
> = {
  software: {
    title: "Software Development",
    description: "Admin view for software incidents: apps, systems, deployments, outages.",
    incidentsCategory: "software",
  },
  building: {
    title: "Building Management",
    description: "Admin view for facilities incidents: HVAC, elevators, infrastructure.",
    incidentsCategory: "building",
  },
  custodial: {
    title: "Custodial",
    description: "Admin view for custodial incidents: supplies, spills, upkeep.",
    incidentsCategory: "custodial",
  },
  healthcare: {
    title: "Healthcare",
    description: "Admin view for healthcare incidents: equipment, patient care, clinical issues.",
    incidentsCategory: "healthcare",
  },
};

export default function WorkTypeAdminPage({
  params,
}: {
  params: { workType: string };
}) {
  const info = workTypeInfo[params.workType];
  if (!info) {
    notFound();
  }

  const incidentsHref = info.incidentsCategory
    ? `/Incidents?category=${encodeURIComponent(info.incidentsCategory)}`
    : "/Incidents";

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="container mx-auto max-w-5xl space-y-6">
        <header className="space-y-2">
          <p className="text-sm text-slate-400">Demo admin view</p>
          <h1 className="text-3xl font-semibold">{info.title}</h1>
          <p className="text-sm text-slate-300">{info.description}</p>
        </header>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold">Quick actions</h2>
          <p className="text-sm text-slate-400 mt-1">
            We’ll iterate here next (KPIs, recent incidents, and workflows).
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/Admin"
              className="inline-flex items-center justify-center rounded-lg border border-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-900"
            >
              ← Back to work types
            </Link>
            <Link
              href={incidentsHref}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-500"
            >
              View incidents
            </Link>
            <Link
              href="/Incidents/create"
              className="inline-flex items-center justify-center rounded-lg border border-indigo-500/40 px-4 py-2 text-indigo-200 hover:bg-indigo-900/20"
            >
              Create incident
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
