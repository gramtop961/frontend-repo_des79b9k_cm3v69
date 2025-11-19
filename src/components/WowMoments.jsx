import { Mail, BadgeCheck, Zap, Video } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WowMoments() {
  const [open, setOpen] = useState(false)

  const base = 'text-cyan-300'
  const card = 'bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-colors'

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
          A co kdyby to vypadalo takhle?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { Icon: BadgeCheck, title: '💌 1) Fyzický uvítací dopis (s prostorem pro video ukázku)', text: 'Reálný dopis s poděkováním, QR bonusem a mini dárkem. Emoční “wow”.' },
            { Icon: Mail, title: '✉️ 2) Personalizované e-maily', text: 'Styl „Danieli, vidím, že se chceš zlepšit v marketingu…“ Lidské, ručně působící zprávy, automaticky.' },
            { Icon: Zap, title: '👀 3) Systém, který reaguje za tebe', text: 'Pochvala, doporučení, aktivizace, mini odměny — automaticky a lidsky.' },
            { Icon: Video, title: '⚡ 4) Personalizované video zprávy', text: 'Video, které zní jako ručně natáčené jen pro něj — ale generuje ho systém. Mega wow efekt.' },
          ].map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={card}
            >
              <div className="flex items-start gap-3">
                <Icon className={`h-6 w-6 ${base}`} />
                <div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-cyan-100/90">{text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-400/10 hover:bg-cyan-400/20 px-6 py-3 text-base font-semibold text-cyan-100 transition">
            {open ? 'Schovat' : 'Ukázat další super věci'}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid md:grid-cols-2 gap-6 mt-8 overflow-hidden"
            >
              {['automatické reaktivace tichých členů','mini dárky za aktivitu (digitální / fyzické)','chytrá doporučení obsahu','premium vibe celé komunity'].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={card}
                >
                  <p className="text-cyan-100/90">{t}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
