/* 4 bénéfices — présentés par résultat, zéro jargon technique */
const solutions = [
  {
    id: 'annonces',
    numero: '01',
    label: 'Annonces',
    titre: 'Une fiche soignée, prête à publier',
    texte:
      "Quelques infos saisies sur votre bien : surface, type, DPE, points forts. Une fiche complète, structurée et prête à copier-coller sur SeLoger, Leboncoin ou votre site. Plus besoin de recommencer à zéro pour chaque nouveau mandat.",
    benefice: "Rédaction d'annonce en quelques minutes, pas en une heure.",
  },
  {
    id: 'prospects',
    numero: '02',
    label: 'Réponse rapide',
    titre: 'Chaque demande reçoit une réponse sans délai',
    texte:
      "Un prospect vous contacte par formulaire ou par email. Il reçoit une réponse personnalisée immédiatement, avec les informations utiles sur le bien. Vous êtes prévenu et vous intervenez quand c'est pertinent.",
    benefice: 'Aucune demande sans réponse, même le week-end.',
  },
  {
    id: 'qualification',
    numero: '03',
    label: 'Qualification',
    titre: 'Vous savez qui mérite votre temps',
    texte:
      "Un formulaire court pose les bonnes questions : budget, projet, délai, financement. Vous recevez les contacts déjà triés. Vous passez du temps avec des acheteurs sérieux, pas avec des curieux.",
    benefice: "Moins d'appels inutiles, plus de visites qui avancent.",
  },
  {
    id: 'whatsapp',
    numero: '04',
    label: 'WhatsApp',
    titre: 'Une première réponse instantanée sur WhatsApp',
    texte:
      "Quand un prospect vous écrit sur WhatsApp, il reçoit une réponse immédiate. Coordonnées, disponibilités, informations de base : la conversation démarre sans que vous soyez derrière votre téléphone.",
    benefice: 'Vous répondez en premier, même quand vous êtes en visite.',
  },
]

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative bg-ardoise-profonde py-24 md:py-32 overflow-hidden"
    >
      {/* Formes géométriques discrètes — cercles stroke en fond */}
      <svg
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[420px] h-[420px] pointer-events-none"
        viewBox="0 0 420 420" fill="none"
      >
        <circle cx="210" cy="210" r="209" stroke="#3D5A73" strokeWidth="1" opacity="0.55" />
        <circle cx="210" cy="210" r="150" stroke="#3D5A73" strokeWidth="1" opacity="0.4" />
      </svg>
      <svg
        aria-hidden="true"
        className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] pointer-events-none"
        viewBox="0 0 300 300" fill="none"
      >
        <circle cx="150" cy="150" r="149" stroke="#3D5A73" strokeWidth="1" opacity="0.4" strokeDasharray="3 10" />
      </svg>

      <div className="conteneur relative">

        {/* En-tête */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="font-corps font-medium text-ardoise-pale uppercase tracking-[0.22em] text-xs mb-6">
            Ce qu'on met en place pour vous
          </p>
          <h2 className="font-titre font-semibold text-blanc text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.03] tracking-tight">
            Des outils qui travaillent{' '}
            <em className="italic font-normal text-ardoise-pale">pendant que vous vendez.</em>
          </h2>
        </div>

        {/* Grille : timeline à gauche, visuel flottant à droite */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ── Timeline numérotée verticale ── */}
          <ol className="lg:col-span-7 relative">
            {/* Ligne verticale de la timeline */}
            <span
              aria-hidden="true"
              className="absolute left-[1.5rem] top-3 bottom-3 w-px bg-ardoise/45 hidden sm:block"
            />
            {solutions.map(({ id, numero, label, titre, texte, benefice }) => (
              <li
                key={id}
                className="relative sm:pl-20 py-8 border-b border-ardoise/35 last:border-b-0"
              >
                {/* Pastille numéro sur la ligne */}
                <span
                  aria-hidden="true"
                  className="hidden sm:flex absolute left-0 top-8 w-12 h-12 items-center justify-center rounded-full bg-ardoise-profonde border border-ardoise text-ardoise-pale font-titre font-semibold text-lg"
                >
                  {numero}
                </span>

                <span className="font-corps font-medium text-ardoise-pale/70 uppercase tracking-[0.2em] text-[11px]">
                  <span className="sm:hidden font-titre text-ardoise-pale not-italic mr-2">{numero} ·</span>
                  {label}
                </span>
                <h3 className="font-titre font-semibold text-blanc text-2xl md:text-[1.6rem] leading-snug mt-2 mb-3">
                  {titre}
                </h3>
                <p className="font-corps font-light text-ardoise-pale/80 text-base leading-relaxed max-w-xl mb-4">
                  {texte}
                </p>
                <p className="font-corps font-medium text-ardoise-pale text-sm inline-flex items-center gap-2">
                  <span aria-hidden="true" className="w-5 h-px bg-ardoise-pale/60" />
                  {benefice}
                </p>
              </li>
            ))}
          </ol>

          {/* ── Visuel flottant : détail architectural, duotone ardoise ── */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <figure className="relative">
                <div className="relative overflow-hidden rounded-[4px]" style={{ boxShadow: '0 32px 70px -24px rgba(0,0,0,0.65)' }}>
                  <img
                    src="/images/solutions-interieur.jpg"
                    alt="Intérieur d'un bien immobilier contemporain, tons gris-bleu"
                    className="w-full h-80 lg:h-[26rem] object-cover object-center"
                    style={{ filter: 'grayscale(0.15) contrast(1.02)' }}
                    loading="lazy"
                  />
                  {/* Voile ardoise très léger — cohérence avec le bloc sombre (aplat) */}
                  <div aria-hidden="true" className="absolute inset-0 bg-ardoise-profonde/10" />
                </div>
                <span aria-hidden="true" className="absolute left-0 -bottom-3 w-16 h-[3px] bg-ardoise-pale" />
              </figure>
              <p className="font-corps font-light text-ardoise-pale/75 text-base leading-relaxed mt-8">
                Vous restez l'agent. Ces outils s'occupent des tâches qui vous
                retardent — vous gardez le contact humain, la négociation, la vente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
