/* 3 étapes simples — pas de vocabulaire tech, on parle du processus concret */
const etapes = [
  {
    numero: '01',
    titre: 'On écoute votre besoin',
    texte:
      "Un échange d'une demi-heure suffit. Vous nous expliquez ce qui vous prend du temps, ce qui vous échappe, ce que vous voudriez déléguer. On ne vous demande pas de connaître les outils.",
  },
  {
    numero: '02',
    titre: "On met en place l'outil adapté",
    texte:
      "On configure ce qui correspond à votre situation : annonces, réponses aux prospects, WhatsApp, qualification des contacts. Tout est testé et ajusté avant que vous l'utilisiez.",
  },
  {
    numero: '03',
    titre: 'Vous gagnez du temps dès la première semaine',
    texte:
      "Pas de formation longue, pas de manuel à lire. L'outil tourne en arrière-plan. Vous continuez votre activité comme avant, avec moins de tâches qui traînent.",
  },
]

export default function CommentCaMarche() {
  return (
    <section id="comment" className="bg-blanc border-t border-ardoise-pale py-20 md:py-32">
      <div className="conteneur">
        {/* En-tête */}
        <p className="font-corps font-medium text-ardoise uppercase tracking-[0.22em] text-xs mb-6">
          Le processus
        </p>
        <h2 className="font-titre font-semibold text-encre text-3xl sm:text-4xl md:text-5xl leading-tight max-w-2xl mb-16">
          Simple de bout en bout.{' '}
          <em className="font-normal text-ardoise">Vous n'avez rien à apprendre.</em>
        </h2>

        {/* Étapes en ligne */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {etapes.map(({ numero, titre, texte }, index) => (
            <div key={numero} className="relative">
              {/* Ligne connectrice entre les étapes (desktop) */}
              {index < etapes.length - 1 && (
                <div
                  className="hidden md:block absolute top-7 left-16 right-0 h-px bg-ardoise-pale"
                  aria-hidden="true"
                />
              )}

              {/* Numéro */}
              <div className="w-14 h-14 flex items-center justify-center border border-ardoise-pale bg-blanc relative mb-6">
                <span className="font-titre font-semibold text-ardoise text-lg leading-none">
                  {numero}
                </span>
              </div>

              <h3 className="font-titre font-semibold text-encre text-xl leading-snug mb-3">
                {titre}
              </h3>
              <p className="font-corps font-light text-encre/65 text-base leading-relaxed">
                {texte}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
