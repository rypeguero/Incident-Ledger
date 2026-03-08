import Link from "next/link";
import { IconBuilding, IconClipboard, IconWrench } from "../../components/Icons";

export default function BuildingAdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="container mx-auto max-w-6xl space-y-8">
        <header className="space-y-2">
          <p className="text-sm text-slate-400">Demo admin view</p>
          <h1 className="text-3xl font-semibold">Building Management</h1>
          <p className="text-sm text-slate-300">
            Facilities dashboard for HVAC, elevators, access control, and infrastructure incidents.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-start gap-3">
              <IconBuilding className="h-6 w-6 text-indigo-300" />
              <div>
                <p className="text-xs text-slate-400">Active work orders</p>
                <p className="text-2xl font-semibold">2</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-start gap-3">
              <IconWrench className="h-6 w-6 text-indigo-300" />
              <div>
                <p className="text-xs text-slate-400">Awaiting vendor</p>
                <p className="text-2xl font-semibold">1</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-start gap-3">
              <IconClipboard className="h-6 w-6 text-indigo-300" />
              <div>
                <p className="text-xs text-slate-400">Resolved this week</p>
                <p className="text-2xl font-semibold">1</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold">Quick actions</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/Admin"
              className="inline-flex items-center justify-center rounded-lg border border-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-900"
            >
              ← Back to work types
            </Link>
            <Link
              href="/Incidents?category=building"
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
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-lg font-semibold">Recent highlights (demo)</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4">
              <p className="text-xs text-slate-500">BM-1183 • Open</p>
              <p className="mt-1 font-semibold">HVAC not cooling on Floor 2</p>
              <p className="mt-1 text-sm text-slate-300">Work order filed; awaiting technician.</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4">
              <p className="text-xs text-slate-500">BM-1181 • Investigating</p>
              <p className="mt-1 font-semibold">Elevator #3 intermittent stops</p>
              <p className="mt-1 text-sm text-slate-300">Vendor contacted; controller logs pulled.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
