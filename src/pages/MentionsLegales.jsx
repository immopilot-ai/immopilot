import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

/* Placeholders clairement marqués — à compléter avant mise en ligne */
export default function MentionsLegales() {
  return (
    <>
      <Header />

      <main className="bg-blanc pt-28 pb-20">
        <div className="conteneur">
          <div className="max-w-prose">
            {/* Retour */}
            <Link
              to="/"
              className="font-corps font-medium text-sm text-ardoise hover:text-ardoise-profonde underline underline-offset-4 block mb-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ardoise"
            >
              ← Retour à l'accueil
            </Link>

            <h1 className="font-titre font-semibold text-encre text-3xl sm:text-4xl leading-tight mb-12">
              Mentions légales
            </h1>

            {/* Éditeur du site */}
            <section className="mb-10">
              <h2 className="font-titre font-semibold text-encre text-xl mb-4">
                Éditeur du site
              </h2>
              <p className="font-corps font-light text-encre/75 leading-relaxed">
                <strong className="font-medium">ImmoPilot</strong><br />
                Micro-entreprise / Auto-entrepreneur<br />
                SIRET : <span className="bg-ardoise-pale/50 px-1 font-medium text-ardoise">[À COMPLÉTER — SIRET]</span><br />
                Adresse : <span className="bg-ardoise-pale/50 px-1 font-medium text-ardoise">[À COMPLÉTER — ADRESSE COMPLÈTE]</span><br />
                Email :{' '}
                <a
                  href="mailto:contact@immopilot-ia.fr"
                  className="text-ardoise hover:text-ardoise-profonde underline underline-offset-2"
                >
                  contact@immopilot-ia.fr
                </a>
              </p>
            </section>

            {/* Hébergement */}
            <section className="mb-10">
              <h2 className="font-titre font-semibold text-encre text-xl mb-4">
                Hébergement
              </h2>
              <p className="font-corps font-light text-encre/75 leading-relaxed">
                Netlify, Inc.<br />
                512 2nd Street, Suite 200, San Francisco, CA 94107 — États-Unis<br />
                <a
                  href="https://www.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ardoise hover:text-ardoise-profonde underline underline-offset-2"
                >
                  netlify.com
                </a>
              </p>
            </section>

            {/* Données personnelles */}
            <section className="mb-10">
              <h2 className="font-titre font-semibold text-encre text-xl mb-4">
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
                <a
                  href="mailto:contact@immopilot-ia.fr"
                  className="text-ardoise hover:text-ardoise-profonde underline underline-offset-2"
                >
                  contact@immopilot-ia.fr
                </a>
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-10">
              <h2 className="font-titre font-semibold text-encre text-xl mb-4">
                Cookies
              </h2>
              <p className="font-corps font-light text-encre/75 leading-relaxed">
                Ce site n'utilise pas de cookies de traçage ou publicitaires. Aucun outil
                d'analyse de trafic tiers n'est activé.
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-10">
              <h2 className="font-titre font-semibold text-encre text-xl mb-4">
                Propriété intellectuelle
              </h2>
              <p className="font-corps font-light text-encre/75 leading-relaxed">
                L'ensemble du contenu de ce site (textes, logo, structure) est la propriété
                exclusive d'ImmoPilot. Toute reproduction, même partielle, est interdite sans
                autorisation préalable.
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="font-titre font-semibold text-encre text-xl mb-4">
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
