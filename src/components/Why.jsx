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
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Proč to chceš</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-cyan-100/90">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
