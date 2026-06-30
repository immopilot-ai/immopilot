import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function CTAFinal() {
  return (
    <section id="contact" className="bg-ardoise-pale/30 border-t border-ardoise-pale py-20 md:py-32">
      <div className="conteneur">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="font-corps font-medium text-ardoise uppercase tracking-[0.22em] text-xs mb-6">
            Prochaine étape
          </p>

          {/* Titre */}
          <h2 className="font-titre font-semibold text-encre text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
            Un échange de 30 minutes.{' '}
            <em className="font-normal text-ardoise">
              Sans engagement, sans présentation commerciale.
            </em>
          </h2>

          {/* Corps */}
          <p className="font-corps font-light text-encre/70 text-lg leading-relaxed mb-10">
            Vous nous expliquez votre activité, on vous montre concrètement ce qu'on peut
            mettre en place. Si ça n'a pas de sens pour vous, on vous le dit aussi.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Bouton principal — formulaire de qualification */}
            <Link
              to="/qualification"
              className="inline-flex items-center justify-center font-corps font-medium text-base bg-ardoise text-blanc px-7 py-3.5 hover:bg-ardoise-profonde transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise"
            >
              Remplir le formulaire
            </Link>

            {/* Bouton secondaire — Google Agenda */}
            <Button
              href="https://calendar.google.com/calendar/embed?src=contact%40immopilot-ia.fr&ctz=Europe%2FParis"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Choisir un créneau
            </Button>
          </div>

          {/* Réassurance discrète */}
          <p className="font-corps font-light text-sm text-encre/40 mt-8">
            Réponse sous 24h. Pas de relance commerciale si on ne s'entend pas.
          </p>
        </div>
      </div>
    </section>
  )
}
