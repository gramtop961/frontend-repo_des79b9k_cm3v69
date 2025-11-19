export default function Pricing() {
  const plans = [
    { name: 'START', price: 'od 2 500 Kč / měsíc', badge: '' },
    { name: 'PRO', price: 'od 5 000 Kč / měsíc', badge: 'doporučeno' },
    { name: 'ELITE', price: 'od 9 000 Kč / měsíc', badge: '' },
  ]

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Ceník / Balíčky</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 border ${p.name==='PRO' ? 'bg-cyan-500 text-slate-900 border-cyan-400 shadow-[0_10px_40px_rgba(34,211,238,0.45)]' : 'bg-white/5 border-white/10 text-cyan-100'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                {p.badge && (
                  <span className="text-xs uppercase tracking-wide bg-slate-900/80 text-cyan-200 px-2 py-1 rounded">{p.badge}</span>
                )}
              </div>
              <p className={`mt-4 text-xl ${p.name==='PRO' ? 'text-slate-900/80' : 'text-cyan-100/80'}`}>{p.price}</p>
              <button className={`mt-6 w-full rounded-xl px-4 py-3 font-semibold ${p.name==='PRO' ? 'bg-slate-900 text-cyan-200 hover:bg-slate-800' : 'bg-cyan-500 text-slate-900 hover:bg-cyan-400'} transition`}>
                Chci tenhle balíček
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
