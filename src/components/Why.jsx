import { motion } from 'framer-motion'

export default function Why() {
  const items = [
    'Zvedneš LTV každého člena (= víc peněz bez reklamy).',
    'Tvoje komunita bude působit profesionálně.',
    'Tichý členové se stanou aktivními.',
    'Všechno běží automaticky, i když ty nestíháš.',
    'Dostaneš péči, kterou jiné komunity nemají.',
    'Uděláš ze svých členů fanoušky, ne jen plátce.'
  ]
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Proč to chceš
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5 text-cyan-100/90 hover:border-cyan-400/40"
            >
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
