/* Les 3 frustrations du quotidien — ton d'égal à égal, vocabulaire métier */
const frustrations = [
  {
    numero: '01',
    titre: 'Rédiger chaque annonce prend une heure',
    texte:
      "Entre la visite et la mise en ligne, vous passez trop de temps à reformuler les mêmes infos : surface, DPE, copropriété, honoraires. Multiplié par chaque nouveau mandat, ça pèse lourd.",
  },
  {
    numero: '02',
    titre: "Un prospect qui attend, c'est un prospect perdu",
    texte:
      "Un acheteur envoie une demande un soir. Vous répondez le lendemain matin. Il a déjà rappelé un autre agent. La réactivité, dans ce métier, c'est souvent la différence entre un compromis signé et une pige qui tourne.",
  },
  {
    numero: '03',
    titre: 'Les relances glissent entre les mailles',
    texte:
      "Vous savez que vous devez rappeler ce contact d'il y a dix jours. Mais entre deux visites, un mandat exclusif à finaliser et les retours de diagnostics, la relance passe à demain. Et demain, c'est trop tard.",
  },
]

export default function Probleme() {
  return (
    <section className="bg-blanc border-t border-ardoise-pale py-20 md:py-32">
      <div className="conteneur">
        {/* En-tête de section */}
        <p className="font-corps font-medium text-ardoise uppercase tracking-[0.22em] text-xs mb-6">
          Le quotidien d'un agent indépendant
        </p>
        <h2 className="font-titre font-semibold text-encre text-3xl sm:text-4xl md:text-5xl leading-tight max-w-2xl mb-16">
          Vous êtes bon dans votre métier.{' '}
          <em className="font-normal text-ardoise">Ce sont les à-côtés qui mangent votre temps.</em>
        </h2>

        {/* 3 frustrations en colonne */}
        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-ardoise-pale">
          {frustrations.map(({ numero, titre, texte }) => (
            <article key={numero} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
              <span className="font-titre font-semibold text-ardoise/30 text-4xl leading-none block mb-5">
                {numero}
              </span>
              <h3 className="font-titre font-semibold text-encre text-xl leading-snug mb-4">
                {titre}
              </h3>
              <p className="font-corps font-light text-encre/65 text-base leading-relaxed">
                {texte}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
