import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="min-h-screen bg-blanc flex items-center pt-16 md:pt-20">
      <div className="conteneur py-20 md:py-32">
        {/* Label de contexte */}
        <p className="font-corps font-medium text-ardoise uppercase tracking-[0.22em] text-xs mb-8">
          Pour les agents immobiliers indépendants du Grand Est
        </p>

        {/* Titre principal — Fraunces SemiBold, grande taille, italic sur accent */}
        <h1 className="font-titre font-semibold text-encre text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight max-w-3xl mb-8">
          Gagnez du temps.{' '}
          <em className="font-normal text-ardoise not-italic">
            Ne perdez plus aucun lead.
          </em>
        </h1>

        {/* Sous-titre */}
        <p className="font-corps font-light text-encre/70 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
          Vos annonces rédigées, vos prospects qualifiés, vos relances en ordre.
          Dès la première semaine, vous récupérez plusieurs heures par semaine.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="#contact" variant="primary">
            Voir une démo
          </Button>
          <Button href="#comment" variant="secondary">
            Comment ça marche
          </Button>
        </div>

        {/* Preuve discrète — factuelle, sans faux chiffres */}
        <p className="font-corps font-light text-sm text-encre/40 mt-10">
          Pensé pour les indépendants du Grand Est. Sans engagement, sans jargon.
        </p>
      </div>
    </section>
  )
}
