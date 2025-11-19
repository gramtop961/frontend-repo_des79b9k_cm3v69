import { Sparkles, Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* gradient beams */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[110%] opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.25),transparent_55%)]" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-400/5 px-3 py-1 text-cyan-300"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wide">Automatizovaná péče pro placené komunity</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl"
          >
            Postavím ti plně automatizovanou péči o členy.
            <span className="block text-transparent bg-clip-text bg-gradient-to-tr from-cyan-200 via-cyan-400 to-white">Osobní. Premium. S wow efektem, kterej nikdo jiný nedělá.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-cyan-100/85 max-w-3xl"
          >
            Tvoje komunita bude působit profi, lidi zůstanou déle — a ty na to nebudeš potřebovat ani minutu navíc.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-base sm:text-lg font-semibold text-slate-900 shadow-[0_10px_30px_rgba(34,211,238,0.4)] hover:shadow-[0_14px_40px_rgba(34,211,238,0.55)] transition-transform hover:-translate-y-0.5"
            >
              Chci péči pro svou komunitu
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#form" className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-white/5 px-6 py-3 text-base font-semibold text-cyan-100 hover:bg-white/10 transition">
              Mrkni na balíčky
            </a>
          </motion.div>

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
        </div>
      </div>
    </section>
  )
}
