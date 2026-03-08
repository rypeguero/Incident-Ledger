import Image from "next/image";
import Link from "next/link";
import { IconBrandApple, IconBrandGoogle } from "./components/Icons";

/**
 * Inline SVG icon used by the Home page.
 *
 * Why it exists here: this page uses a few small, page-specific icons that are
 * only needed for the “value props” section.
 *
 * `props` are forwarded to the underlying `<svg>` so the caller can set
 * `className`, `style`, `aria-*`, etc.
 */
function IconClipboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5.25h6m-6 0a2.25 2.25 0 00-2.25 2.25v12A2.25 2.25 0 009 22.5h6A2.25 2.25 0 0017.25 19.5v-12A2.25 2.25 0 0015 5.25m-6 0A2.25 2.25 0 0111.25 3h1.5A2.25 2.25 0 0115 5.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 11.25h4.5M9.75 14.25h4.5M9.75 17.25h3" />
    </svg>
  );
}

/**
 * Inline SVG icon used by the Home page.
 *
 * This icon visually communicates “organization / grouping” in the value-props.
 * It forwards all received SVG props to keep styling (size/color) flexible.
 */
function IconLayers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l9 5-9 5-9-5 9-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 5 9-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5l9 5 9-5" />
    </svg>
  );
}

/**
 * Inline SVG icon used by the Home page.
 *
 * This icon is used to suggest “done / confirmed / successful follow-up”.
 * Like the other icons, it forwards SVG props to let Tailwind set size/colors.
 */
function IconCheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25L15 9.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

/**
 * Inline SVG icon used by the Home page.
 *
 * This icon supports the “Tailored to your work type” section by conveying
 * “configuration / settings”. Props are forwarded to the `<svg>` element.
 */
function IconSliders(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V21m0-7.5a2.25 2.25 0 01-2.25-2.25V7.5A2.25 2.25 0 016 5.25m0 8.25a2.25 2.25 0 002.25-2.25V7.5A2.25 2.25 0 006 5.25m12 3.75V21m0-12a2.25 2.25 0 01-2.25-2.25V5.25A2.25 2.25 0 0118 3m0 6a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0018 3M12 10.5V21m0-10.5a2.25 2.25 0 01-2.25-2.25V5.25A2.25 2.25 0 0112 3m0 7.5a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0012 3" />
    </svg>
  );
}

/**
 * Home ("/") route component.
 *
 * This is a Server Component by default (no `'use client'` here), which is
 * fine because this page is purely presentational: it renders the logo, hero
 * content, navigation CTAs, and explanatory sections.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      {/* Logo */}
      <div className="w-full mb-10 text-center">
        <Image
          src="/Images/logo1.png"
          alt="Incident Ledger Logo"
          width={500}
          height={500}
          style={{
            filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))',
          }}
          className="mx-auto h-40 w-auto drop-shadow-lg opacity-90 hover:opacity-95 transition-opacity"
          priority
        />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        {/* Hero */}
        <div className="text-center space-y-5">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Track incidents, keep the paper trail.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Log incidents, document actions and outcomes, and generate a clear audit trail for handoffs and review.
          </p>

          {/* Primary actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              href="/Admin"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white font-semibold px-6 py-3 shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-colors border border-indigo-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Enter Demo
            </Link>
          </div>

          {/* Auth teaser */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto pt-2">
            <button
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-800 px-4 py-3 text-slate-300 font-semibold bg-slate-900/20 cursor-not-allowed sm:whitespace-nowrap"
              disabled
            >
              <IconBrandGoogle className="h-5 w-5 text-slate-300" />
              Continue with Google (coming soon)
            </button>
            <button
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-800 px-4 py-3 text-slate-300 font-semibold bg-slate-900/20 cursor-not-allowed sm:whitespace-nowrap"
              disabled
            >
              <IconBrandApple className="h-5 w-5 text-slate-300" />
              Continue with Apple (coming soon)
            </button>
          </div>

          <p className="text-sm text-slate-400">
            Demo mode: no authentication required. Use sample data to explore the experience.
          </p>
        </div>

        {/* Value props */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-start gap-4">
              <IconClipboard className="h-8 w-8 text-indigo-300" />
              <div>
                <h2 className="text-lg font-semibold">Fast intake</h2>
                <p className="text-sm text-slate-300 mt-1">
                  Capture the essentials: date, location, creator, urgency, and a clear description.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-start gap-4">
              <IconLayers className="h-8 w-8 text-indigo-300" />
              <div>
                <h2 className="text-lg font-semibold">Organized by work type</h2>
                <p className="text-sm text-slate-300 mt-1">
                  Browse incidents by category and reference “Concepts & Examples” for consistent reporting.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-start gap-4">
              <IconCheckCircle className="h-8 w-8 text-indigo-300" />
              <div>
                <h2 className="text-lg font-semibold">Clear follow-up</h2>
                <p className="text-sm text-slate-300 mt-1">
                  Submit an incident and get immediate confirmation with an automatic redirect back to the list.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customizable / Sellable */}
        <div className="mt-6 rounded-xl border border-indigo-500/20 bg-gradient-to-r from-slate-900/70 via-indigo-900/20 to-slate-900/70 p-6">
          <div className="flex items-start gap-4">
            <IconSliders className="h-8 w-8 text-indigo-300" />
            <div>
              <h2 className="text-lg font-semibold">Tailored to your work type</h2>
              <p className="text-sm text-slate-300 mt-1">
                This demo shows a few categories, but the system can be configured for any team. Customize work
                types, fields, and workflows to match your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}