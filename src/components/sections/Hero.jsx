import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-encre overflow-hidden">

      {/* ── Photo plein cadre ── */}
      <img
        src="/images/hero-poignee-de-main.jpg"
        alt="Poignée de main entre un agent immobilier et son client dans une agence"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'grayscale(0.28) contrast(1.02) brightness(0.96)' }}
      />

      {/* Overlay ardoise — teinte les ombres vers la couleur signature (aplat, mix-blend) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ardoise-profonde/45 mix-blend-multiply"
      />
      {/* Voile encre — assombrit uniformément pour la lisibilité (aplat, jamais de dégradé) */}
      <div aria-hidden="true" className="absolute inset-0 bg-encre/55" />

      {/* ── Contenu ── */}
      <div className="conteneur relative z-10 min-h-screen flex flex-col justify-center pt-28 pb-32 md:pt-32 md:pb-36">

        {/* Bandeau */}
        <div
          className="inline-flex self-start items-center border border-blanc/25 px-4 py-1.5 mb-9 animate-fade-up"
          style={{ animationDelay: '0ms' }}
        >
          <span className="font-corps font-medium text-ardoise-pale uppercase tracking-[0.2em] text-xs">
            Pensé pour les agents indépendants
          </span>
        </div>

        {/* Titre principal */}
        <h1
          className="font-titre font-semibold text-blanc leading-[0.9] tracking-tight mb-8 max-w-4xl animate-fade-up"
          style={{ animationDelay: '90ms' }}
        >
          <span className="block text-[clamp(2.4rem,8.5vw,7rem)]">
            Gagnez du temps.
          </span>
          <span className="block text-[clamp(2.4rem,8.5vw,7rem)]">
            Ne perdez plus{' '}
            <em className="italic font-normal text-ardoise-pale">
              un seul lead.
            </em>
          </span>
        </h1>

        {/* Sous-titre */}
        <p
          className="font-corps font-light text-blanc/75 text-lg md:text-xl max-w-xl leading-relaxed mb-11 animate-fade-up"
          style={{ animationDelay: '210ms' }}
        >
          Vos annonces rédigées, vos prospects qualifiés, vos relances en ordre.
          Dès la première semaine.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5 animate-fade-up"
          style={{ animationDelay: '330ms' }}
        >
          <Link
            to="/qualification"
            className="inline-flex items-center justify-center font-corps font-medium text-base bg-ardoise text-blanc px-7 py-3.5 rounded-full hover:bg-blanc hover:text-encre transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blanc"
          >
            Remplir le formulaire
          </Link>
          <a
            href="#comment"
            className="group font-corps font-medium text-blanc/90 hover:text-blanc transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blanc inline-flex items-center gap-2"
          >
            Voir comment ça marche
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* ── Badge de preuve flottant ── */}
        <div
          className="mt-14 self-start md:mt-0 md:self-auto md:absolute md:bottom-12 md:right-8 lg:right-12 flex items-center gap-3.5 bg-blanc rounded-[6px] pl-4 pr-5 py-3.5 animate-fade-up"
          style={{
            animationDelay: '450ms',
            boxShadow: '0 22px 55px -14px rgba(12,13,15,0.55)',
          }}
        >
          <span className="flex-none w-11 h-11 rounded-full bg-ardoise flex items-center justify-center text-blanc">
            {/* Horloge — trait fin, cohérent avec le logo géométrique */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-titre font-semibold text-encre text-lg">Réponse sous 24h</span>
            <span className="font-corps font-medium text-ardoise uppercase tracking-[0.14em] text-[10px] mt-0.5">
              Chaque demande, un vrai retour
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}
