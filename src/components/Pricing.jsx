import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  const plans = [
    { name: 'START', price: yearly ? 'od 2 200 Kč / měsíc' : 'od 2 500 Kč / měsíc', badge: '' },
    { name: 'PRO', price: yearly ? 'od 4 500 Kč / měsíc' : 'od 5 000 Kč / měsíc', badge: 'doporučeno' },
    { name: 'ELITE', price: yearly ? 'od 8 000 Kč / měsíc' : 'od 9 000 Kč / měsíc', badge: '' },
  ]

  return (
    <section id="form" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ceník / Balíčky</h2>
          <button
            onClick={() => setYearly(v => !v)}
            className="relative inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-400/10 hover:bg-cyan-400/20 px-3 py-1.5 text-sm font-semibold text-cyan-100"
          >
            <span className="opacity-70">Měsíčně</span>
            <span className="relative w-10 h-5 rounded-full bg-white/10">
              <motion.span
                layout
                className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-cyan-400"
                animate={{ x: yearly ? 20 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </span>
            <span className="opacity-70">Ročně</span>
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative rounded-2xl p-6 border ${p.name==='PRO' ? 'bg-cyan-500 text-slate-900 border-cyan-400 shadow-[0_10px_40px_rgba(34,211,238,0.45)]' : 'bg-white/5 border-white/10 text-cyan-100'} hover:-translate-y-0.5 transition-transform overflow-hidden`}
            >
              <span className="pointer-events-none absolute inset-0">
                <motion.span
                  initial={{ x: '-20%' }}
                  whileHover={{ x: '120%' }}
                  transition={{ duration: 0.9 }}
                  className={`absolute top-0 left-0 h-full w-1/3 -skew-x-12 ${p.name==='PRO' ? 'bg-white/30' : 'bg-white/10'} mix-blend-overlay`}
                />
              </span>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                {p.badge && (
                  <span className="text-xs uppercase tracking-wide bg-slate-900/80 text-cyan-200 px-2 py-1 rounded">{p.badge}</span>
                )}
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={p.price}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={`mt-4 text-xl ${p.name==='PRO' ? 'text-slate-900/80' : 'text-cyan-100/80'}`}
                >
                  {p.price}
                </motion.p>
              </AnimatePresence>
              <a href="#kontakt" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-semibold ${p.name==='PRO' ? 'bg-slate-900 text-cyan-200 hover:bg-slate-800' : 'bg-cyan-500 text-slate-900 hover:bg-cyan-400'} transition`}>
                Chci tenhle balíček
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
