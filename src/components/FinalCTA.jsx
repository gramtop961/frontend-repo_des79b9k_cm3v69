import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section id="kontakt" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
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
          <a href="#form" className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-lg font-semibold text-slate-900 shadow-[0_10px_30px_rgba(34,211,238,0.4)] hover:shadow-[0_14px_40px_rgba(34,211,238,0.55)] transition-transform hover:-translate-y-0.5">
            Nastavte mi péči o členy
          </a>
        </motion.div>
      </div>
    </section>
  )
}
