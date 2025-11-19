import Hero from './components/Hero'
import Problems from './components/Problems'
import WowMoments from './components/WowMoments'
import Why from './components/Why'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-white">MemberCare</div>
          <a href="#kontakt" className="rounded-lg bg-cyan-500 text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-cyan-400 transition">Chci péči</a>
        </div>
      </header>

      <main>
        {/* 1) HERO */}
        <Hero />

        {/* 2) Problems */}
        <Problems />

        {/* 3) Wow Moments */}
        <WowMoments />

        {/* 4) Why */}
        <Why />

        {/* 5) Pricing */}
        <Pricing />

        {/* 6) Final CTA */}
        <FinalCTA />

        {/* 7) FAQ */}
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
