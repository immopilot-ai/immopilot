import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

// Endpoint Google Apps Script (application web « /exec ») — reçoit les leads dans le Google Sheet
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwzDnJPNDjtsFp8tAwoxKNGxtdC7uEc2FZv52EpfQtGL6ilLD4w0xfzTPAyUca0kVF03A/exec'

const champInput =
  'font-corps font-light text-encre bg-blanc border border-ardoise-pale rounded-[6px] px-4 py-3 placeholder:text-encre/30 focus:outline-none focus:border-ardoise focus:ring-2 focus:ring-ardoise/15 transition'

const reassurances = [
  'Réponse sous 24h.',
  'Sans engagement, sans présentation commerciale.',
  "Pas de démarchage si on ne s'entend pas.",
]

export default function Qualification() {
  const [envoye, setEnvoye] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    // Envoi direct vers le Google Sheet (Apps Script). En x-www-form-urlencoded
    // pour rester une requête « simple » et éviter tout blocage CORS.
    fetch(SHEET_ENDPOINT, {
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

      <main className="relative bg-ardoise-pale/25 min-h-screen pt-28 md:pt-36 pb-24 overflow-hidden">
        {/* Forme géométrique discrète */}
        <svg
          aria-hidden="true"
          className="absolute -top-24 -right-28 w-[380px] h-[380px] pointer-events-none"
          viewBox="0 0 380 380" fill="none"
        >
          <circle cx="190" cy="190" r="189" stroke="#3D5A73" strokeWidth="1" opacity="0.2" />
          <circle cx="190" cy="190" r="128" stroke="#3D5A73" strokeWidth="1" opacity="0.16" strokeDasharray="4 9" />
        </svg>

        <div className="conteneur relative">
          {/* Retour */}
          <Link
            to="/"
            className="font-corps font-medium text-sm text-ardoise hover:text-ardoise-profonde inline-flex items-center gap-1.5 mb-12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise"
          >
            <span aria-hidden="true">←</span> Retour à l'accueil
          </Link>

          {envoye ? (
            /* ── Confirmation après envoi ── */
            <div className="max-w-xl">
              <div className="bg-blanc rounded-[10px] border border-ardoise-pale p-10 md:p-12" style={{ boxShadow: '0 30px 70px -30px rgba(37,54,69,0.35)' }}>
                <span className="flex w-14 h-14 rounded-full bg-ardoise items-center justify-center text-blanc mb-7">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="font-corps font-medium text-ardoise uppercase tracking-[0.22em] text-xs mb-4">
                  Message reçu
                </p>
                <h1 className="font-titre font-semibold text-encre text-3xl md:text-4xl leading-tight mb-4">
                  Merci, on revient vers vous sous 24h.
                </h1>
                <p className="font-corps font-light text-encre/70 leading-relaxed">
                  Pas de relance si on ne s'entend pas — promis.
                </p>
              </div>
            </div>
          ) : (
            /* ── Formulaire ── */
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* Colonne intro */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                  <p className="font-corps font-medium text-ardoise uppercase tracking-[0.22em] text-xs mb-6">
                    Première étape
                  </p>
                  <h1 className="font-titre font-semibold text-encre text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
                    Parlez-nous de votre activité.{' '}
                    <em className="italic font-normal text-ardoise">On revient vers vous sous 24h.</em>
                  </h1>
                  <p className="font-corps font-light text-encre/65 text-base leading-relaxed mb-8 max-w-md">
                    Trois minutes suffisent. Ces informations nous permettent de préparer un
                    échange concret, adapté à votre situation.
                  </p>

                  {/* Réassurances */}
                  <ul className="flex flex-col gap-3">
                    {reassurances.map((r) => (
                      <li key={r} className="flex items-start gap-3 font-corps font-light text-encre/75 text-sm">
                        <span aria-hidden="true" className="flex-none mt-0.5 w-5 h-5 rounded-full bg-ardoise/12 text-ardoise flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Colonne formulaire */}
              <div className="lg:col-span-7">
                <div className="bg-blanc rounded-[10px] border border-ardoise-pale p-7 md:p-10" style={{ boxShadow: '0 30px 70px -30px rgba(37,54,69,0.35)' }}>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    {/* Honeypot anti-spam, invisible — vérifié côté Apps Script */}
                    <p className="hidden" aria-hidden="true">
                      <label>
                        Ne pas remplir
                        <input name="bot-field" tabIndex="-1" autoComplete="off" />
                      </label>
                    </p>

                    {/* Nom */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="nom" className="font-corps font-medium text-encre text-sm">
                        Votre nom
                      </label>
                      <input
                        id="nom" name="nom" type="text" required autoComplete="name"
                        placeholder="Jean Dupont" className={champInput}
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-corps font-medium text-encre text-sm">
                        Votre adresse email
                      </label>
                      <input
                        id="email" name="email" type="email" required autoComplete="email"
                        placeholder="jean.dupont@agence.fr" className={champInput}
                      />
                    </div>

                    {/* Agence */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="agence" className="font-corps font-medium text-encre text-sm">
                        Votre agence ou nom commercial
                      </label>
                      <input
                        id="agence" name="agence" type="text" required
                        placeholder="Agence Dupont Immobilier" className={champInput}
                      />
                    </div>

                    {/* Ce qui prend du temps */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="besoin" className="font-corps font-medium text-encre text-sm">
                        Qu'est-ce qui vous prend le plus de temps en ce moment ?
                      </label>
                      <div className="relative">
                        <select
                          id="besoin" name="besoin" required defaultValue=""
                          className={`${champInput} appearance-none w-full pr-10`}
                        >
                          <option value="" disabled>Choisir une réponse</option>
                          <option value="annonces">Rédiger mes annonces</option>
                          <option value="prospects">Répondre aux prospects</option>
                          <option value="relances">Suivre et relancer mes contacts</option>
                          <option value="tout">Un peu tout ça à la fois</option>
                        </select>
                        <ChevronSelect />
                      </div>
                    </div>

                    {/* Objectif principal */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="objectif" className="font-corps font-medium text-encre text-sm">
                        Quel est votre objectif principal en ce moment ?
                      </label>
                      <div className="relative">
                        <select
                          id="objectif" name="objectif" required defaultValue=""
                          className={`${champInput} appearance-none w-full pr-10`}
                        >
                          <option value="" disabled>Choisir une réponse</option>
                          <option value="mandats">Rentrer plus de mandats</option>
                          <option value="suivi">Mieux suivre mes contacts</option>
                          <option value="temps">Gagner du temps sur l'administratif</option>
                          <option value="tout">Un peu tout ça</option>
                        </select>
                        <ChevronSelect />
                      </div>
                    </div>

                    {/* Message libre */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="font-corps font-medium text-encre text-sm">
                        Autre chose à nous dire ? <span className="font-light text-encre/40">(facultatif)</span>
                      </label>
                      <textarea
                        id="message" name="message" rows={4}
                        placeholder="Une situation particulière, une question, une contrainte..."
                        className={`${champInput} resize-none`}
                      />
                    </div>

                    {/* Soumission */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="font-corps font-medium text-base bg-ardoise text-blanc px-8 py-3.5 rounded-full hover:bg-ardoise-profonde transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise w-full sm:w-auto"
                      >
                        Envoyer ma demande
                      </button>
                      <p className="font-corps font-light text-xs text-encre/40 mt-4">
                        Pas de démarchage. On vous répond dans la journée.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

/* Chevron décoratif pour les selects (appearance-none) */
function ChevronSelect() {
  return (
    <svg
      aria-hidden="true"
      className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-ardoise"
      width="14" height="14" viewBox="0 0 24 24" fill="none"
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
