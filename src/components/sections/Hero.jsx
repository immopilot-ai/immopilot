import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-blanc flex items-center overflow-hidden">

      {/* Toit géométrique SVG — fond bas-droite, ardoise-pale, stroke only */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[420px] md:w-[560px] lg:w-[640px] pointer-events-none select-none"
        viewBox="0 0 640 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Toit */}
        <polyline
          points="640,400 320,40 0,400"
          stroke="#C8D8E4"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Ligne de faîtage — détail architectural discret */}
        <line
          x1="320" y1="40"
          x2="320" y2="400"
          stroke="#C8D8E4"
          strokeWidth="1"
          strokeDasharray="6 8"
        />
      </svg>

      {/* Contenu principal */}
      <div className="conteneur relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">

        {/* Pill bandeau */}
        <div
          className="inline-flex items-center border border-ardoise-pale px-4 py-1.5 mb-10 animate-fade-up"
          style={{ animationDelay: '0ms' }}
        >
          <span className="font-corps font-medium text-ardoise uppercase tracking-[0.2em] text-xs">
            Pensé pour les agents indépendants du Grand Est
          </span>
        </div>

        {/* Titre principal */}
        <h1
          className="font-titre font-semibold text-encre leading-[0.9] tracking-tight mb-8 max-w-4xl animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          <span className="block text-[clamp(3rem,9vw,6rem)]">
            Gagnez du temps.
          </span>
          <span className="block text-[clamp(3rem,9vw,6rem)]">
            Ne perdez plus{' '}
            <em className="font-normal text-ardoise not-italic">
              un seul lead.
            </em>
          </span>
        </h1>

        {/* Sous-titre */}
        <p
          className="font-corps font-light text-encre/60 text-lg md:text-xl max-w-lg leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          Vos annonces rédigées, vos prospects qualifiés, vos relances en ordre.
          Dès la première semaine.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-5 animate-fade-up"
          style={{ animationDelay: '320ms' }}
        >
          <Link
            to="/qualification"
            className="inline-flex items-center justify-center font-corps font-medium text-base bg-ardoise text-blanc px-7 py-3.5 hover:bg-ardoise-profonde transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise"
          >
            Remplir le formulaire
          </Link>
          <a
            href="#comment"
            className="font-corps font-medium text-ardoise hover:text-ardoise-profonde transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ardoise inline-flex items-center gap-1"
          >
            Voir comment ça marche
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
