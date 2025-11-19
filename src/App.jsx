import Hero from './components/Hero'
import Problems from './components/Problems'
import WowMoments from './components/WowMoments'
import Why from './components/Why'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import FAQ from './components/FAQ'
import { motion } from 'framer-motion'

function AnimatedBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Neon gradient mist */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.3),transparent_60%)] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/4 -right-52 h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.25),transparent_60%)] blur-3xl"
      />
      {/* Subtle moving beams */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-x-0 top-0 h-[120vh] bg-[linear-gradient(120deg,rgba(34,211,238,0.06)_0%,transparent_30%,rgba(168,85,247,0.06)_60%,transparent_80%)]"
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(148,163,184,0.04),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.07]" />
    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-cyan-50 overflow-x-hidden">
      <AnimatedBackdrop />

      <header className="sticky top-0 z-40 border-b border-white/5">
        <div className="backdrop-blur supports-[backdrop-filter]:bg-slate-950/70">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative h-7 w-7 rounded-md bg-gradient-to-tr from-cyan-400 via-cyan-300 to-white shadow-inner overflow-hidden">
                <motion.span
                  initial={{ x: -20 }}
                  animate={{ x: [ -20, 40, -20 ] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute inset-y-0 w-8 bg-white/30 rotate-12"
                />
              </div>
              <div className="font-extrabold tracking-tight text-white">
                <span className="text-cyan-300">Member</span>Care
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-cyan-200/70">
              <a href="#form" className="hover:text-cyan-200 transition">Balíčky</a>
              <a href="#kontakt" className="hover:text-cyan-200 transition">Kontakt</a>
            </nav>
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
