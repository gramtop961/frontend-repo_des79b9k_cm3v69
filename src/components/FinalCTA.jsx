import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section id="kontakt" className="py-28">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        {/* glow */}
        <div aria-hidden className="pointer-events-none absolute -inset-x-10 -top-10 h-40 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.25),transparent_60%)] blur-2xl" />
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Chceš, aby tvoje komunita působila jako profi projekt
          <span className="block text-cyan-300">a aby ti členové zůstávali mnohem déle?</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          <a href="#form" className="group relative inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-3.5 text-lg font-semibold text-slate-900 shadow-[0_10px_30px_rgba(34,211,238,0.4)] transition-transform hover:-translate-y-0.5">
            Nastavte mi péči o členy
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
              <motion.span
                initial={{ x: '-20%' }}
                whileHover={{ x: '120%' }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 h-full w-1/3 -skew-x-12 bg-white/30 mix-blend-screen"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
