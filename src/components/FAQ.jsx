import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function FAQ() {
  const faqs = [
    { q: 'Jak rychle to rozběhneme?', a: 'První verzi péče spustíme do 10 pracovních dní. Pak ladíme podle dat.' },
    { q: 'Co potřebujete ode mě?', a: 'Přístup do platformy, pár informací o členství a tone-of-voice. Zbytek je na nás.' },
    { q: 'Je to osobní, když je to automatizace?', a: 'Ano. Vytváříme zprávy a momenty, které působí ručně. Člen má pocit, že myslíte právě na něj.' },
    { q: 'Jak se řeší fyzické věci (dárky, dopisy)?', a: 'Máme ověřené partnery. Logistiku i tisk řešíme end‑to‑end.' },
    { q: 'Není to spam?', a: 'Ne. Náš systém posílá jen hodnotné a relevantní zprávy, ve správný moment. Vše pod vaší značkou.' },
    { q: 'Umíte to napojit na moji platformu?', a: 'Ano. Pracujeme s běžnými nástroji (Memberstack, Stripe, Discord, Slack, Circle, Notion aj.).' },
    { q: 'Kolik to stojí dohromady?', a: 'Platíte měsíční správu + reálné náklady na dárky/odeslání. Vše je transparentní.' },
    { q: 'Co když nemám velkou komunitu?', a: 'Neřeš. Start balíček je ideální i pro menší projekty — roste s tebou.' },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-8"
        >
          FAQ
        </motion.h2>
        <div className="rounded-2xl border border-white/10 overflow-hidden">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className={`bg-white/5 ${i !== faqs.length - 1 ? 'border-b border-white/10' : ''}`}>
                <button
                  className="w-full text-left p-6 flex items-center justify-between text-white font-semibold"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {f.q}
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="ml-4 text-cyan-300">+</motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-cyan-100/90">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
