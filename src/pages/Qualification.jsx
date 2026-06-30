import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function Qualification() {
  const [envoye, setEnvoye] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setEnvoye(true))
      .catch(() => setEnvoye(true))
  }

  return (
    <>
      <Header />

      <main className="bg-blanc pt-28 pb-20">
        <div className="conteneur">
          <div className="max-w-xl">

            {/* Retour */}
            <Link
              to="/"
              className="font-corps font-medium text-sm text-ardoise hover:text-ardoise-profonde underline underline-offset-4 block mb-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ardoise"
            >
              ← Retour à l'accueil
            </Link>

            {envoye ? (
              /* Confirmation après envoi */
              <div className="border border-ardoise-pale p-10">
                <p className="font-corps font-medium text-ardoise uppercase tracking-[0.22em] text-xs mb-4">
                  Message reçu
                </p>
                <h1 className="font-titre font-semibold text-encre text-3xl leading-tight mb-4">
                  Merci, on revient vers vous sous 24h.
                </h1>
                <p className="font-corps font-light text-encre/70 leading-relaxed">
                  Pas de relance si on ne s'entend pas — promis.
                </p>
              </div>
            ) : (
              <>
                {/* En-tête */}
                <p className="font-corps font-medium text-ardoise uppercase tracking-[0.22em] text-xs mb-6">
                  Première étape
                </p>
                <h1 className="font-titre font-semibold text-encre text-3xl sm:text-4xl leading-tight mb-4">
                  Parlez-nous de votre activité.{' '}
                  <em className="font-normal text-ardoise">
                    On revient vers vous sous 24h.
                  </em>
                </h1>
                <p className="font-corps font-light text-encre/65 text-base leading-relaxed mb-10">
                  Trois minutes suffisent. Ces informations nous permettent de
                  préparer un échange concret, adapté à votre situation.
                </p>

                {/* Formulaire Netlify — name="demo" pour compatibilité n8n */}
                <form
                  name="demo"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  {/* Champ honeypot anti-spam, invisible */}
                  <input type="hidden" name="form-name" value="demo" />
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Ne pas remplir
                      <input name="bot-field" tabIndex="-1" />
                    </label>
                  </p>

                  {/* Nom */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="nom"
                      className="font-corps font-medium text-encre text-sm"
                    >
                      Votre nom
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jean Dupont"
                      className="font-corps font-light text-encre border border-ardoise-pale bg-blanc px-4 py-3 placeholder:text-encre/30 focus:outline-none focus:border-ardoise transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="font-corps font-medium text-encre text-sm"
                    >
                      Votre adresse email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jean.dupont@agence.fr"
                      className="font-corps font-light text-encre border border-ardoise-pale bg-blanc px-4 py-3 placeholder:text-encre/30 focus:outline-none focus:border-ardoise transition-colors"
                    />
                  </div>

                  {/* Agence */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="agence"
                      className="font-corps font-medium text-encre text-sm"
                    >
                      Votre agence ou nom commercial
                    </label>
                    <input
                      id="agence"
                      name="agence"
                      type="text"
                      required
                      placeholder="Agence Dupont Immobilier"
                      className="font-corps font-light text-encre border border-ardoise-pale bg-blanc px-4 py-3 placeholder:text-encre/30 focus:outline-none focus:border-ardoise transition-colors"
                    />
                  </div>

                  {/* Ce qui prend du temps */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="besoin"
                      className="font-corps font-medium text-encre text-sm"
                    >
                      Qu'est-ce qui vous prend le plus de temps en ce moment ?
                    </label>
                    <select
                      id="besoin"
                      name="besoin"
                      required
                      defaultValue=""
                      className="font-corps font-light text-encre border border-ardoise-pale bg-blanc px-4 py-3 focus:outline-none focus:border-ardoise transition-colors appearance-none"
                    >
                      <option value="" disabled>Choisir une réponse</option>
                      <option value="annonces">Rédiger mes annonces</option>
                      <option value="prospects">Répondre aux prospects</option>
                      <option value="relances">Suivre et relancer mes contacts</option>
                      <option value="tout">Un peu tout ça à la fois</option>
                    </select>
                  </div>

                  {/* Volume de mandats */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="volume"
                      className="font-corps font-medium text-encre text-sm"
                    >
                      Combien de mandats gérez-vous en moyenne ?
                    </label>
                    <select
                      id="volume"
                      name="volume"
                      required
                      defaultValue=""
                      className="font-corps font-light text-encre border border-ardoise-pale bg-blanc px-4 py-3 focus:outline-none focus:border-ardoise transition-colors appearance-none"
                    >
                      <option value="" disabled>Choisir une réponse</option>
                      <option value="moins10">Moins de 10</option>
                      <option value="10a20">Entre 10 et 20</option>
                      <option value="plus20">Plus de 20</option>
                    </select>
                  </div>

                  {/* Message libre */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="font-corps font-medium text-encre text-sm"
                    >
                      Autre chose à nous dire ? <span className="font-light text-encre/40">(facultatif)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Une situation particulière, une question, une contrainte..."
                      className="font-corps font-light text-encre border border-ardoise-pale bg-blanc px-4 py-3 placeholder:text-encre/30 focus:outline-none focus:border-ardoise transition-colors resize-none"
                    />
                  </div>

                  {/* Soumission */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="font-corps font-medium text-base bg-ardoise text-blanc px-7 py-3.5 hover:bg-ardoise-profonde transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise w-full sm:w-auto"
                    >
                      Envoyer ma demande
                    </button>
                    <p className="font-corps font-light text-xs text-encre/40 mt-4">
                      Pas de démarchage. On vous répond dans la journée.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
