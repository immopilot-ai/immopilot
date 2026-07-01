import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const lienInline =
  'text-ardoise hover:text-ardoise-profonde underline underline-offset-2'

export default function MentionsLegales() {
  return (
    <>
      <Header />

      <main className="relative bg-blanc pt-28 md:pt-36 pb-24 overflow-hidden">
        {/* Forme géométrique discrète */}
        <svg
          aria-hidden="true"
          className="absolute -top-24 -right-28 w-[360px] h-[360px] pointer-events-none"
          viewBox="0 0 360 360" fill="none"
        >
          <circle cx="180" cy="180" r="179" stroke="#C8D8E4" strokeWidth="1" />
          <circle cx="180" cy="180" r="120" stroke="#C8D8E4" strokeWidth="1" strokeDasharray="4 9" />
        </svg>

        <div className="conteneur relative">
          {/* Retour */}
          <Link
            to="/"
            className="font-corps font-medium text-sm text-ardoise hover:text-ardoise-profonde inline-flex items-center gap-1.5 mb-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise"
          >
            <span aria-hidden="true">←</span> Retour à l'accueil
          </Link>

          <div className="max-w-prose">
            <p className="font-corps font-medium text-ardoise uppercase tracking-[0.22em] text-xs mb-6">
              Informations légales
            </p>
            <h1 className="font-titre font-semibold text-encre text-4xl sm:text-5xl leading-[1.05] tracking-tight mb-14">
              Mentions <em className="italic font-normal text-ardoise">légales.</em>
            </h1>

            {/* Éditeur du site */}
            <section className="border-t border-ardoise-pale pt-10 mt-10 first:border-t-0 first:mt-0 first:pt-0">
              <h2 className="font-titre font-semibold text-encre text-xl md:text-2xl mb-4">
                Éditeur du site
              </h2>
              <p className="font-corps font-light text-encre/75 leading-relaxed">
                <strong className="font-medium text-encre">ImmoPilot</strong><br />
                Micro-entreprise / Auto-entrepreneur<br />
                SIRET : 10298942300011<br />
                Adresse : La Wantzenau, 67610, France<br />
                Email : <a href="mailto:contact@immopilot-ia.fr" className={lienInline}>contact@immopilot-ia.fr</a>
              </p>
            </section>

            {/* Hébergement */}
            <section className="border-t border-ardoise-pale pt-10 mt-10">
              <h2 className="font-titre font-semibold text-encre text-xl md:text-2xl mb-4">
                Hébergement
              </h2>
              <p className="font-corps font-light text-encre/75 leading-relaxed">
                Netlify, Inc.<br />
                512 2nd Street, Suite 200, San Francisco, CA 94107 — États-Unis<br />
                <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className={lienInline}>netlify.com</a>
              </p>
            </section>

            {/* Données personnelles */}
            <section className="border-t border-ardoise-pale pt-10 mt-10">
              <h2 className="font-titre font-semibold text-encre text-xl md:text-2xl mb-4">
                Données personnelles
              </h2>
              <p className="font-corps font-light text-encre/75 leading-relaxed">
                Ce site ne collecte aucune donnée personnelle sans votre consentement explicite.
                Les informations communiquées via le formulaire de contact sont utilisées
                uniquement pour répondre à votre demande. Elles ne sont transmises à aucun tiers.
              </p>
              <p className="font-corps font-light text-encre/75 leading-relaxed mt-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la
                loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification
                et de suppression de vos données. Pour exercer ce droit :{' '}
                <a href="mailto:contact@immopilot-ia.fr" className={lienInline}>contact@immopilot-ia.fr</a>
              </p>
            </section>

            {/* Cookies */}
            <section className="border-t border-ardoise-pale pt-10 mt-10">
              <h2 className="font-titre font-semibold text-encre text-xl md:text-2xl mb-4">
                Cookies
              </h2>
              <p className="font-corps font-light text-encre/75 leading-relaxed">
                Ce site n'utilise pas de cookies de traçage ou publicitaires. Aucun outil
                d'analyse de trafic tiers n'est activé.
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section className="border-t border-ardoise-pale pt-10 mt-10">
              <h2 className="font-titre font-semibold text-encre text-xl md:text-2xl mb-4">
                Propriété intellectuelle
              </h2>
              <p className="font-corps font-light text-encre/75 leading-relaxed">
                L'ensemble du contenu de ce site (textes, logo, structure) est la propriété
                exclusive d'ImmoPilot. Toute reproduction, même partielle, est interdite sans
                autorisation préalable.
              </p>
            </section>

            {/* Responsabilité */}
            <section className="border-t border-ardoise-pale pt-10 mt-10">
              <h2 className="font-titre font-semibold text-encre text-xl md:text-2xl mb-4">
                Limitation de responsabilité
              </h2>
              <p className="font-corps font-light text-encre/75 leading-relaxed">
                ImmoPilot s'efforce de maintenir les informations de ce site à jour et exactes.
                Toutefois, aucune garantie n'est donnée quant à l'exhaustivité ou l'exactitude
                des informations présentées.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
