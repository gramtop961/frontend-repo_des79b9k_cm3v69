import { Mail, BadgeCheck, Zap, Video } from 'lucide-react'
import { useState } from 'react'

export default function WowMoments() {
  const [open, setOpen] = useState(false)

  const base = 'text-cyan-300'
  const card = 'bg-white/5 border border-white/10 rounded-2xl p-6'

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">A co kdyby to vypadalo takhle?</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={card}>
            <div className="flex items-start gap-3">
              <BadgeCheck className={`h-6 w-6 ${base}`} />
              <div>
                <h3 className="text-xl font-semibold text-white">💌 1) Fyzický uvítací dopis (s prostorem pro video ukázku)</h3>
                <p className="mt-2 text-cyan-100/90">Reálný dopis s poděkováním, QR bonusem a mini dárkem. Emoční “wow”.</p>
              </div>
            </div>
          </div>

          <div className={card}>
            <div className="flex items-start gap-3">
              <Mail className={`h-6 w-6 ${base}`} />
              <div>
                <h3 className="text-xl font-semibold text-white">✉️ 2) Personalizované e-maily</h3>
                <p className="mt-2 text-cyan-100/90">Styl „Danieli, vidím, že se chceš zlepšit v marketingu…“ Lidské, ručně působící zprávy, automaticky.</p>
              </div>
            </div>
          </div>

          <div className={card}>
            <div className="flex items-start gap-3">
              <Zap className={`h-6 w-6 ${base}`} />
              <div>
                <h3 className="text-xl font-semibold text-white">👀 3) Systém, který reaguje za tebe</h3>
                <p className="mt-2 text-cyan-100/90">Pochvala, doporučení, aktivizace, mini odměny — automaticky a lidsky.</p>
              </div>
            </div>
          </div>

          <div className={card}>
            <div className="flex items-start gap-3">
              <Video className={`h-6 w-6 ${base}`} />
              <div>
                <h3 className="text-xl font-semibold text-white">⚡ 4) Personalizované video zprávy</h3>
                <p className="mt-2 text-cyan-100/90">Video, které zní jako ručně natáčené jen pro něj — ale generuje ho systém. Mega wow efekt.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-400/10 hover:bg-cyan-400/20 px-6 py-3 text-base font-semibold text-cyan-100 transition">
            {open ? 'Schovat' : 'Ukázat další super věci'}
          </button>
        </div>

        {open && (
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {['automatické reaktivace tichých členů','mini dárky za aktivitu (digitální / fyzické)','chytrá doporučení obsahu','premium vibe celé komunity'].map((t, i) => (
              <div key={i} className={card}>
                <p className="text-cyan-100/90">{t}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
