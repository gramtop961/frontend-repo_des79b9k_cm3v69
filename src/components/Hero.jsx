import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-400/5 px-3 py-1 text-cyan-300">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-medium tracking-wide">Automatizovaná péče pro placené komunity</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl">
            Postavím ti plně automatizovanou péči o členy.
            <span className="block text-cyan-300">Osobní. Premium. A s wow efektem, kterej nikdo jiný nedělá.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-cyan-100/80 max-w-3xl">
            Tvoje komunita bude působit profesionálně, lidi u tebe zůstanou déle — a ty na to nebudeš potřebovat ani minutu navíc.
          </p>

          <div className="mt-10">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-base sm:text-lg font-semibold text-slate-900 shadow-[0_10px_30px_rgba(34,211,238,0.4)] hover:shadow-[0_14px_40px_rgba(34,211,238,0.55)] transition-transform hover:-translate-y-0.5"
            >
              Chci péči pro svou komunitu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
