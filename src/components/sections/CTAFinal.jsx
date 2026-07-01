import { Link } from 'react-router-dom'

export default function CTAFinal() {
  return (
    <section
      id="contact"
      className="relative bg-ardoise-pale/40 py-24 md:py-32 overflow-hidden"
    >
      {/* Forme géométrique discrète — cercles stroke, bas-droite */}
      <svg
        aria-hidden="true"
        className="absolute -bottom-40 right-4 w-[420px] h-[420px] pointer-events-none"
        viewBox="0 0 420 420" fill="none"
      >
        <circle cx="210" cy="210" r="209" stroke="#3D5A73" strokeWidth="1" opacity="0.28" />
        <circle cx="210" cy="210" r="140" stroke="#3D5A73" strokeWidth="1" opacity="0.22" strokeDasharray="4 10" />
      </svg>

      <div className="conteneur relative">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="font-corps font-medium text-ardoise uppercase tracking-[0.22em] text-xs mb-6">
            Prochaine étape
          </p>

          {/* Titre */}
          <h2 className="font-titre font-semibold text-encre text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.03] tracking-tight mb-7">
            Un échange de 30 minutes.{' '}
            <em className="italic font-normal text-ardoise">
              Sans engagement, sans présentation commerciale.
            </em>
          </h2>

          {/* Corps */}
          <p className="font-corps font-light text-encre/70 text-lg leading-relaxed mb-10 max-w-xl">
            Vous nous expliquez votre activité, on vous montre concrètement ce qu'on peut
            mettre en place. Si ça n'a pas de sens pour vous, on vous le dit aussi.
          </p>

          {/* CTAs — pilules */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/qualification"
              className="inline-flex items-center justify-center font-corps font-medium text-base bg-ardoise text-blanc px-7 py-3.5 rounded-full hover:bg-ardoise-profonde transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise"
            >
              Remplir le formulaire
            </Link>
            <a
              href="https://cal.com/immopilot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-corps font-medium text-base border border-ardoise text-ardoise px-7 py-3.5 rounded-full hover:bg-ardoise hover:text-blanc transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise"
            >
              Choisir un créneau
            </a>
          </div>

          {/* Réassurance discrète */}
          <p className="font-corps font-light text-sm text-encre/45 mt-8">
            Réponse sous 24h. Pas de relance commerciale si on ne s'entend pas.
          </p>
        </div>
      </div>
    </section>
  )
}
