import Link from "next/link";
import { IconChartBars, IconClipboard, IconTarget } from "../../components/Icons";

export default function SoftwareAdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="container mx-auto max-w-6xl space-y-8">
        <header className="space-y-2">
          <p className="text-sm text-slate-400">Demo admin view</p>
          <h1 className="text-3xl font-semibold">Software Development</h1>
          <p className="text-sm text-slate-300">
            A quick dashboard for software incidents: outages, deployments, CI/CD, and regressions.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-start gap-3">
              <IconChartBars className="h-6 w-6 text-indigo-300" />
              <div>
                <p className="text-xs text-slate-400">Open incidents</p>
                <p className="text-2xl font-semibold">3</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-start gap-3">
              <IconTarget className="h-6 w-6 text-indigo-300" />
              <div>
                <p className="text-xs text-slate-400">Investigating</p>
                <p className="text-2xl font-semibold">1</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-start gap-3">
              <IconClipboard className="h-6 w-6 text-indigo-300" />
              <div>
                <p className="text-xs text-slate-400">Resolved this week</p>
                <p className="text-2xl font-semibold">2</p>
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
              href="/Incidents?category=software"
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
              <p className="text-xs text-slate-500">SD-2041 • Investigating</p>
              <p className="mt-1 font-semibold">API outage on auth service</p>
              <p className="mt-1 text-sm text-slate-300">Spike in 500s after deploy. Rollback planned.</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/40 p-4">
              <p className="text-xs text-slate-500">SD-2037 • Resolved</p>
              <p className="mt-1 font-semibold">CI pipeline stuck on build step</p>
              <p className="mt-1 text-sm text-slate-300">Runner cache cleared; workers restarted.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
