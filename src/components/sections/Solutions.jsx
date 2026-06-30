/* 4 bénéfices — présentés par résultat, zéro jargon technique */
const solutions = [
  {
    id: 'annonces',
    label: 'Annonces',
    titre: 'Une fiche soignée, prête à publier',
    texte:
      "Quelques infos saisies sur votre bien : surface, type, DPE, points forts. Une fiche complète, structurée et prête à copier-coller sur SeLoger, Leboncoin ou votre site. Plus besoin de recommencer à zéro pour chaque nouveau mandat.",
    benefice: "Rédaction d'annonce en quelques minutes, pas en une heure.",
  },
  {
    id: 'prospects',
    label: 'Réponse rapide',
    titre: 'Chaque demande reçoit une réponse sans délai',
    texte:
      "Un prospect vous contacte par formulaire ou par email. Il reçoit une réponse personnalisée immédiatement, avec les informations utiles sur le bien. Vous êtes prévenu et vous intervenez quand c'est pertinent.",
    benefice: 'Aucune demande sans réponse, même le week-end.',
  },
  {
    id: 'qualification',
    label: 'Qualification',
    titre: 'Vous savez qui mérite votre temps',
    texte:
      "Un formulaire court pose les bonnes questions : budget, projet, délai, financement. Vous recevez les contacts déjà triés. Vous passez du temps avec des acheteurs sérieux, pas avec des curieux.",
    benefice: "Moins d'appels inutiles, plus de visites qui avancent.",
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    titre: 'Une première réponse instantanée sur WhatsApp',
    texte:
      "Quand un prospect vous écrit sur WhatsApp, il reçoit une réponse immédiate. Coordonnées, disponibilités, informations de base : la conversation démarre sans que vous soyez derrière votre téléphone.",
    benefice: 'Vous répondez en premier, même quand vous êtes en visite.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="bg-ardoise-profonde py-20 md:py-32">
      <div className="conteneur">
        {/* En-tête */}
        <p className="font-corps font-medium text-ardoise-pale uppercase tracking-[0.22em] text-xs mb-6">
          Ce qu'on met en place pour vous
        </p>
        <h2 className="font-titre font-semibold text-blanc text-3xl sm:text-4xl md:text-5xl leading-tight max-w-2xl mb-16">
          Des outils qui travaillent{' '}
          <em className="font-normal text-ardoise-pale">pendant que vous vendez.</em>
        </h2>

        {/* Grille 2×2 */}
        <div className="grid sm:grid-cols-2 gap-px bg-ardoise/30">
          {solutions.map(({ id, label, titre, texte, benefice }) => (
            <article
              key={id}
              className="bg-ardoise-profonde p-8 md:p-10 flex flex-col gap-4"
            >
              {/* Label métier */}
              <span className="font-corps font-medium text-ardoise uppercase tracking-[0.2em] text-xs">
                {label}
              </span>

              <h3 className="font-titre font-semibold text-blanc text-xl md:text-2xl leading-snug">
                {titre}
              </h3>

              <p className="font-corps font-light text-ardoise-pale/80 text-base leading-relaxed flex-1">
                {texte}
              </p>

              {/* Bénéfice résumé */}
              <p className="font-corps font-medium text-ardoise-pale text-sm border-t border-ardoise/40 pt-4 mt-2">
                {benefice}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
