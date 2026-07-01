import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Probleme from '../components/sections/Probleme'
import Solutions from '../components/sections/Solutions'
import CommentCaMarche from '../components/sections/CommentCaMarche'
import CTAFinal from '../components/sections/CTAFinal'

export default function Home() {
  return (
    <>
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 bg-ardoise text-blanc px-4 py-2 font-corps font-medium"
      >
        Aller au contenu
      </a>

      <Header overlayHero />

      <main id="contenu-principal">
        <Hero />
        <Probleme />
        <Solutions />
        <CommentCaMarche />
        <CTAFinal />
      </main>

      <Footer />
    </>
  )
}
