import {
  IconChartBars,
  IconClipboard,
  IconDocumentText,
  IconLock,
  IconSearch,
  IconTag,
  IconTarget,
} from "../components/Icons";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Features</h1>
          <p className="text-lg text-slate-300">
            Everything you need to track incidents and maintain accountability.
          </p>
        </header>

        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition">
            <div className="flex items-start gap-4">
              <IconClipboard className="h-10 w-10 text-indigo-300" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Comprehensive Incident Logging</h2>
                <p className="text-slate-300">
                  Create detailed incident records with titles, descriptions, timestamps, and status tracking. 
                  Organize incidents across multiple categories including software development, building management, 
                  custodial work, and healthcare.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition">
            <div className="flex items-start gap-4">
              <IconSearch className="h-10 w-10 text-indigo-300" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Track Actions & Results</h2>
                <p className="text-slate-300">
                  Document every step you took to resolve an incident. Record troubleshooting attempts, 
                  interventions, and their outcomes. Build a complete timeline of what happened and what was tried.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition">
            <div className="flex items-start gap-4">
              <IconChartBars className="h-10 w-10 text-indigo-300" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Status Management</h2>
                <p className="text-slate-300">
                  Track incident lifecycle with clear status indicators: Open, Investigating, or Resolved. 
                  Quickly filter and find incidents by their current state to prioritize your workload.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition">
            <div className="flex items-start gap-4">
              <IconDocumentText className="h-10 w-10 text-indigo-300" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Export Clean Reports</h2>
                <p className="text-slate-300">
                  Generate professional incident reports with all documentation, actions taken, and results. 
                  Include digital signatures for accountability and compliance. Perfect for handoffs, audits, 
                  or post-mortems.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition">
            <div className="flex items-start gap-4">
              <IconTag className="h-10 w-10 text-indigo-300" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Multi-Category Support</h2>
                <p className="text-slate-300">
                  Organize incidents by work type with dedicated categories for different domains. 
                  Whether it&apos;s a software bug, building maintenance issue, custodial task, or healthcare event, 
                  keep everything categorized and easily accessible.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition">
            <div className="flex items-start gap-4">
              <IconLock className="h-10 w-10 text-indigo-300" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Authentication & Security</h2>
                <p className="text-slate-300">
                  <span className="text-amber-400 font-medium">(Coming Soon)</span> Secure login with Google 
                  and GitHub authentication. Keep your incident records private and ensure only authorized users 
                  can access sensitive information.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 7 */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition">
            <div className="flex items-start gap-4">
              <IconTarget className="h-10 w-10 text-indigo-300" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Purpose-Built for Accountability</h2>
                <p className="text-slate-300">
                  Maintain a clear paper trail for every incident. Document not just what happened, 
                  but who responded, when they responded, and what they did. Build trust and transparency 
                  in your incident response process.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            Have a feature request? We&apos;re actively developing and would love your feedback.
          </p>
        </div>
      </div>
    </main>
  );
}
