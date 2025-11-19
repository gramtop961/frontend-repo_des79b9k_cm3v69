import Hero from './components/Hero'
import Problems from './components/Problems'
import WowMoments from './components/WowMoments'
import Why from './components/Why'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-cyan-50 overflow-x-hidden">
      {/* Global ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.04),transparent_60%)]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5">
        <div className="backdrop-blur supports-[backdrop-filter]:bg-slate-950/70">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-cyan-400 to-cyan-200 shadow-inner" />
              <div className="font-extrabold tracking-tight text-white">MemberCare</div>
            </div>
            <a href="#kontakt" className="rounded-lg bg-cyan-500 text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-cyan-400 transition shadow-[0_8px_24px_rgba(34,211,238,0.35)]">
              Chci péči
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Problems />
        <WowMoments />
        <Why />
        <Pricing />
        <FinalCTA />
        <FAQ />
      </main>

      <footer className="py-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center text-cyan-300/60 text-sm">
          © {new Date().getFullYear()} MemberCare — Automatizovaná péče o členy
        </div>
      </footer>
    </div>
  )
}

export default App
