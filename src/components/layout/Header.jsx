import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const liens = [
  { label: 'Le problème', id: 'probleme' },
  { label: 'Les solutions', id: 'solutions' },
  { label: 'Comment ça marche', id: 'comment' },
]

export default function Header({ overlayHero = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme le menu si on clique hors du burger
  useEffect(() => {
    if (!menuOpen) return
    const close = (e) => {
      if (!e.target.closest('#mobile-menu') && !e.target.closest('#burger-btn')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [menuOpen])

  // Navigation vers une section — fonctionne depuis n'importe quelle page :
  // si on n'est pas sur l'accueil, on y retourne d'abord puis on défile.
  const allerSection = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const scroll = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.pathname !== '/') {
      navigate('/')
      // Laisse l'accueil se monter avant de défiler
      requestAnimationFrame(() => setTimeout(scroll, 60))
    } else {
      scroll()
    }
  }

  // Barre sombre au scroll — et en permanence sur les pages sans hero sombre
  const barreSombre = scrolled || menuOpen || !overlayHero

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        barreSombre
          ? 'bg-encre/90 backdrop-blur-md border-b border-ardoise-profonde/70'
          : 'bg-transparent'
      }`}
    >
      <div className="conteneur flex items-center justify-between h-16 md:h-20">

        {/* Logo maison — version blanche, lisible sur fond sombre comme sur le hero */}
        <Link to="/" aria-label="ImmoPilot — retour à l'accueil">
          <img
            src="/logo-immopilot.png"
            alt="ImmoPilot"
            className="h-7 md:h-9 w-auto"
          />
        </Link>

        {/* Navigation desktop — nav "pilules" sobre : conteneur arrondi translucide */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-full border border-blanc/15 bg-blanc/[0.07] backdrop-blur-md p-1.5"
          aria-label="Navigation principale"
        >
          {liens.map(({ label, id }) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={(e) => allerSection(e, id)}
              className="font-corps font-medium text-sm text-blanc/75 hover:text-blanc hover:bg-blanc/10 px-4 py-2 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blanc"
            >
              {label}
            </a>
          ))}

          {/* CTA header — pilule pleine */}
          <Link
            to="/qualification"
            className="font-corps font-medium text-sm bg-blanc text-encre px-5 py-2 ml-1 rounded-full hover:bg-ardoise-pale transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blanc"
          >
            Prendre contact
          </Link>
        </nav>

        {/* Burger mobile — toujours clair (header transparent ou sombre) */}
        <button
          id="burger-btn"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 -mr-2 text-blanc focus-visible:outline focus-visible:outline-2 focus-visible:outline-blanc"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {/* Icône burger → croix */}
          <span className="block w-5 h-px bg-blanc transition-all duration-150 mb-1.5" style={menuOpen ? { transform: 'translateY(8px) rotate(45deg)' } : {}} />
          <span className="block w-5 h-px bg-blanc transition-all duration-150 mb-1.5" style={menuOpen ? { opacity: 0 } : {}} />
          <span className="block w-5 h-px bg-blanc transition-all duration-150" style={menuOpen ? { transform: 'translateY(-8px) rotate(-45deg)' } : {}} />
        </button>
      </div>

      {/* Menu mobile — fond encre, dans la continuité de la barre */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-encre/95 backdrop-blur-md border-t border-ardoise-profonde/70"
          aria-label="Menu mobile"
        >
          <div className="conteneur py-6 flex flex-col gap-1">
            {liens.map(({ label, id }) => (
              <a
                key={id}
                href={`/#${id}`}
                onClick={(e) => allerSection(e, id)}
                className="font-corps font-medium text-blanc/80 hover:text-blanc py-2.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blanc"
              >
                {label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-ardoise-profonde/70">
              <Link
                to="/qualification"
                className="inline-flex font-corps font-medium text-sm bg-blanc text-encre px-5 py-3 rounded-full hover:bg-ardoise-pale transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blanc"
                onClick={() => setMenuOpen(false)}
              >
                Prendre contact
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
