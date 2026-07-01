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
    <section
      id="comment"
      className="relative bg-blanc py-24 md:py-32 overflow-hidden"
    >
      {/* Forme géométrique discrète — cercle stroke, bas-gauche */}
      <svg
        aria-hidden="true"
        className="absolute -bottom-32 -left-28 w-[380px] h-[380px] pointer-events-none"
        viewBox="0 0 380 380" fill="none"
      >
        <circle cx="190" cy="190" r="189" stroke="#C8D8E4" strokeWidth="1" />
        <circle cx="190" cy="190" r="130" stroke="#C8D8E4" strokeWidth="1" strokeDasharray="4 9" />
      </svg>

      <div className="conteneur relative">
        {/* En-tête */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="font-corps font-medium text-ardoise uppercase tracking-[0.22em] text-xs mb-6">
            Le processus
          </p>
          <h2 className="font-titre font-semibold text-encre text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.03] tracking-tight">
            Simple de bout en bout.{' '}
            <em className="italic font-normal text-ardoise">Vous n'avez rien à apprendre.</em>
          </h2>
        </div>

        {/* Étapes horizontales avec connecteur */}
        <div className="relative grid md:grid-cols-3 gap-12 md:gap-10">
          {/* Ligne de liaison (desktop) — derrière les pastilles */}
          <span
            aria-hidden="true"
            className="hidden md:block absolute top-8 left-0 right-0 h-px bg-ardoise-pale"
          />

          {etapes.map(({ numero, titre, texte }) => (
            <div key={numero} className="relative">
              {/* Pastille numéro */}
              <div className="relative w-16 h-16 rounded-full bg-blanc border border-ardoise-pale flex items-center justify-center mb-7">
                <span className="font-titre font-semibold text-ardoise text-xl leading-none">
                  {numero}
                </span>
              </div>

              <h3 className="font-titre font-semibold text-encre text-xl md:text-[1.4rem] leading-snug mb-4 max-w-xs">
                {titre}
              </h3>
              <p className="font-corps font-light text-encre/65 text-base leading-relaxed max-w-sm">
                {texte}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
