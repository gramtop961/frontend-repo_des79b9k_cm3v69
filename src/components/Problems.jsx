export default function Problems() {
  const items = [
    'Máš v hlavě dokonalou komunitu… ale v realitě na to prostě nemáš čas.',
    'Chceš, aby to působilo profi, ale reálně všechno děláš na poslední chvíli.',
    'Víš, že kdybys měl lepší péči o členy, lidi by zůstávali… ale nikdy se k tomu nedostaneš.',
    'Všechno stojí na tobě — a když nestíháš, komunita stojí taky.',
    'Chceš být osobní, ale nemáš kapacitu psát osobní zprávy 50–200 lidem.'
  ]

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Poznáváš tohle?</h2>
        <ul className="space-y-4">
          {items.map((text, i) => (
            <li key={i} className="text-cyan-100/90 text-lg bg-white/5 border border-white/10 rounded-xl p-4">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
