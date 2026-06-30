import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-blanc border-b border-ardoise-pale' : 'bg-transparent'
      }`}
    >
      <div className="conteneur flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" aria-label="ImmoPilot — accueil">
          <img
            src="/logo.svg"
            alt="ImmoPilot"
            className="h-9 md:h-11 w-auto"
          />
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          <a href="#solutions" className="font-corps font-medium text-sm text-encre hover:text-ardoise transition-colors">
            Ce qu'on fait
          </a>
          <a href="#comment" className="font-corps font-medium text-sm text-encre hover:text-ardoise transition-colors">
            Comment ça marche
          </a>
          <a
            href="#contact"
            className="font-corps font-medium text-sm bg-ardoise text-blanc px-5 py-2.5 hover:bg-ardoise-profonde transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise"
          >
            Prendre contact
          </a>
        </nav>

        {/* Burger mobile */}
        <button
          className="md:hidden p-2 text-encre focus-visible:outline focus-visible:outline-2 focus-visible:outline-ardoise"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-encre mb-1.5" />
          <span className="block w-6 h-0.5 bg-encre mb-1.5" />
          <span className="block w-4 h-0.5 bg-encre" />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden bg-blanc border-t border-ardoise-pale">
          <nav className="conteneur py-6 flex flex-col gap-4" aria-label="Menu mobile">
            <a
              href="#solutions"
              className="font-corps font-medium text-encre hover:text-ardoise"
              onClick={() => setMenuOpen(false)}
            >
              Ce qu'on fait
            </a>
            <a
              href="#comment"
              className="font-corps font-medium text-encre hover:text-ardoise"
              onClick={() => setMenuOpen(false)}
            >
              Comment ça marche
            </a>
            <a
              href="#contact"
              className="font-corps font-medium bg-ardoise text-blanc px-5 py-3 text-center hover:bg-ardoise-profonde"
              onClick={() => setMenuOpen(false)}
            >
              Prendre contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
