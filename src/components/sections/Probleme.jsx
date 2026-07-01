/* Les 3 frustrations du quotidien — ton d'égal à égal, vocabulaire métier */
const frustrations = [
  {
    numero: '01',
    titre: 'Les relances glissent entre les mailles',
    texte:
      "Vous savez que vous devez rappeler ce contact d'il y a dix jours. Mais entre deux visites, un mandat exclusif à finaliser et les retours de diagnostics, la relance passe à demain. Et demain, c'est trop tard.",
  },
  {
    numero: '02',
    titre: "Vous perdez du temps avec des contacts qui n'aboutissent pas",
    texte:
      "Finançable ? Vraiment décidé ? Dans les délais ? Vous ne le savez souvent qu'après plusieurs échanges, parfois une visite pour rien. Le temps passé avec des curieux, c'est autant de temps volé aux acheteurs sérieux.",
  },
  {
    numero: '03',
    titre: 'La prospection passe toujours après le reste',
    texte:
      "Rentrer de nouveaux mandats demande de la régularité. Mais entre les acheteurs à suivre, les visites et l'administratif, prospecter finit systématiquement en bas de la pile. Et un portefeuille qui se vide, ça se paie deux mois plus tard.",
  },
]

export default function Probleme() {
  return (
    <section
      id="probleme"
      className="relative bg-blanc py-24 md:py-32 overflow-hidden"
    >
      {/* Forme géométrique discrète — cercles stroke, coin haut-droit */}
      <svg
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[360px] h-[360px] pointer-events-none"
        viewBox="0 0 360 360" fill="none"
      >
        <circle cx="180" cy="180" r="179" stroke="#C8D8E4" strokeWidth="1" />
        <circle cx="180" cy="180" r="120" stroke="#C8D8E4" strokeWidth="1" strokeDasharray="4 9" />
      </svg>

      <div className="conteneur relative">

        {/* ── Bloc d'introduction : titre à gauche, photo asymétrique à droite ── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-20 md:mb-24">
          <div className="lg:col-span-7">
            <p className="font-corps font-medium text-ardoise uppercase tracking-[0.22em] text-xs mb-6">
              Le quotidien d'un agent indépendant
            </p>
            <h2 className="font-titre font-semibold text-encre text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.02] tracking-tight max-w-2xl">
              Votre métier, c'est vendre.{' '}
              <em className="italic font-normal text-ardoise">
                Le reste ne devrait pas vous ralentir.
              </em>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <figure className="relative">
              <img
                src="/images/probleme-paperasse.jpg"
                alt="Un agent remplit des documents à la main, penché sur des dossiers"
                className="w-full h-64 md:h-72 object-cover rounded-[4px]"
                style={{
                  filter: 'grayscale(0.25) contrast(1.02)',
                  boxShadow: '0 26px 60px -22px rgba(37,54,69,0.45)',
                }}
                loading="lazy"
              />
              {/* Fine ligne d'accent ardoise sur le bord bas */}
              <span
                aria-hidden="true"
                className="absolute left-0 -bottom-3 w-16 h-[3px] bg-ardoise"
              />
            </figure>
          </div>
        </div>

        {/* ── Les 3 frustrations ── */}
        <div className="grid md:grid-cols-3">
          {frustrations.map(({ numero, titre, texte }, i) => (
            <article
              key={numero}
              className={`py-8 md:py-0 md:px-9 first:md:pl-0 last:md:pr-0 border-t border-ardoise-pale md:border-t-0 ${
                i > 0 ? 'md:border-l md:border-ardoise-pale' : ''
              }`}
            >
              <span className="font-titre font-semibold text-ardoise/25 text-5xl leading-none block mb-6">
                {numero}
              </span>
              <h3 className="font-titre font-semibold text-encre text-xl md:text-[1.35rem] leading-snug mb-4">
                {titre}
              </h3>
              <p className="font-corps font-light text-encre/65 text-base leading-relaxed">
                {texte}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
