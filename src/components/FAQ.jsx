import { motion } from 'framer-motion'

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
  return (
    <section className="py-20">
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
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold text-white flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-cyan-300 group-open:rotate-45 transition">+</span>
              </summary>
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-cyan-100/90"
              >
                {f.a}
              </motion.p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
