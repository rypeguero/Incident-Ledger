import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      {/* Logo at top */}
      <div className="w-full mb-12 text-center">
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

      {/* Content centered */}
      <div className="w-full max-w-2xl text-center space-y-6">
        <div className="space-y-3">
        <h1 className="text-5xl sm:text-6xl font-bold text-white">Track incidents, keep the paper trail.</h1>
          <p className="text-lg text-slate-300">
            Log real incidents, record what you tried and document results, export a clean report with signatures.
          </p>
        </div>

        <div className="space-y-3">
          <button
            className="w-full rounded-lg border border-slate-700 text-white font-semibold py-3 hover:bg-slate-900 transition"
            disabled
          >
            Continue with Google (coming soon)
          </button>
          <button
            className="w-full rounded-lg border border-slate-700 text-white font-semibold py-3 hover:bg-slate-900 transition"
            disabled
          >
            Continue with GitHub (coming soon)
          </button>
        </div>

        <p className="text-sm text-slate-400">
          Auth is coming; for now you can browse the demo experience once we hook it up.
        </p>
      </div>
    </main>
  );
}