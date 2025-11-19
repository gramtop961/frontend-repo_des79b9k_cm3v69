import { Sparkles, Check, ArrowRight, Rocket, ShieldCheck } from 'lucide-react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useCallback } from 'react'

export default function Hero() {
  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const x = useSpring(mvX, { stiffness: 80, damping: 20 })
  const y = useSpring(mvY, { stiffness: 80, damping: 20 })

  const handleMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    mvX.set(dx * 0.05)
    mvY.set(dy * 0.05)
  }, [mvX, mvY])

  return (
    <section className="relative overflow-hidden" onMouseMove={handleMove}>
      {/* Futuristic layers */}
      <div className="absolute inset-0 -z-10">
        {/* Pulsing gradient mesh */}
        <motion.div
          initial={{ opacity: 0.55, scale: 1 }}
          animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.03, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-48 left-1/2 -translate-x-1/2 h-[800px] w-[1200px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.25),transparent_60%)] blur-3xl"/>
        {/* Scanning line */}
        <motion.div
          initial={{ y: '-20%' }}
          animate={{ y: ['-20%', '120%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute inset-x-0 h-24 bg-[linear-gradient(to_bottom,transparent,rgba(34,211,238,0.08),transparent)]"/>
        {/* Parallax orbs */}
        <motion.div style={{ x, y }} className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-2xl"/>
        <motion.div style={{ x, y }} className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-2xl"/>
        {/* Holographic grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.06]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-400/5 px-3 py-1 text-cyan-300"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wide">Automatizovaná péče pro placené komunity</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-tight"
          >
            Vystřel svoji komunitu do premium ligy.
            <span className="block text-transparent bg-clip-text bg-gradient-to-tr from-cyan-200 via-cyan-400 to-white">Péče, co působí jako magie — ale běží sama.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-cyan-100/85 max-w-3xl"
          >
            Zážitková automatizace: osobní zprávy, dárky, video momenty. Méně práce, víc wow.
          </motion.p>

          {/* CTA with holographic shine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 relative"
          >
            <a
              href="#kontakt"
              className="group relative inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-3.5 text-base sm:text-lg font-semibold text-slate-900 shadow-[0_10px_30px_rgba(34,211,238,0.4)] transition-transform hover:-translate-y-0.5"
            >
              Spustit MemberCare
              <Rocket className="ml-2 h-5 w-5" />
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                <motion.span
                  initial={{ x: '-20%' }}
                  whileHover={{ x: '120%' }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-0 left-0 h-full w-1/3 -skew-x-12 bg-white/30 mix-blend-screen"
                />
              </span>
            </a>
            <a href="#form" className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-white/5 px-7 py-3.5 text-base font-semibold text-cyan-100 hover:bg-white/10 transition">
              Mrkni na balíčky
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 grid sm:grid-cols-3 gap-3 text-left w-full max-w-3xl"
          >
            {['Žádná korporát mluva','Prémiový zážitek','Vše běží samo'].map((x) => (
              <li key={x} className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 p-3 text-cyan-100">
                <Check className="h-4 w-4 text-cyan-300" /> {x}
              </li>
            ))}
          </motion.ul>

          {/* Floating badges */}
          <div className="relative w-full max-w-5xl h-24 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="absolute left-0 top-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-cyan-200"
            >
              <ShieldCheck className="h-4 w-4 text-cyan-300" />
              <span className="text-xs">Premium vibe, nulový chaos</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute right-0 bottom-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-cyan-200"
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <span className="text-xs">Osobní momenty na autopilota</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom glow divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-70" />
    </section>
  )
}
