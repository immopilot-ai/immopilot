import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const liens = [
  { label: 'Le problème', href: '#probleme' },
  { label: 'Les solutions', href: '#solutions' },
  { label: 'Comment ça marche', href: '#comment' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-blanc/95 backdrop-blur-sm border-b border-ardoise-pale'
          : 'bg-transparent'
      }`}
    >
      <div className="conteneur flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link to="/" aria-label="ImmoPilot — retour à l'accueil">
          <img
            src="/logo.svg"
            alt="ImmoPilot"
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Navigation desktop */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navigation principale"
        >
          {liens.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-corps font-medium text-sm text-encre/70 hover:text-ardoise transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ardoise"
            >
              {label}
            </a>
          ))}

          {/* CTA header */}
          <Link
            to="/qualification"
            className="font-corps font-medium text-sm bg-ardoise text-blanc px-5 py-2.5 hover:bg-ardoise-profonde transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise"
          >
            Prendre contact
          </Link>
        </nav>

        {/* Burger mobile */}
        <button
          id="burger-btn"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 -mr-2 text-encre focus-visible:outline focus-visible:outline-2 focus-visible:outline-ardoise"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {/* Icône burger → croix */}
          <span className="block w-5 h-px bg-encre transition-all duration-150 mb-1.5" style={menuOpen ? { transform: 'translateY(8px) rotate(45deg)' } : {}} />
          <span className="block w-5 h-px bg-encre transition-all duration-150 mb-1.5" style={menuOpen ? { opacity: 0 } : {}} />
          <span className="block w-5 h-px bg-encre transition-all duration-150" style={menuOpen ? { transform: 'translateY(-8px) rotate(-45deg)' } : {}} />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-blanc border-t border-ardoise-pale"
          aria-label="Menu mobile"
        >
          <div className="conteneur py-6 flex flex-col gap-1">
            {liens.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-corps font-medium text-encre/80 hover:text-ardoise py-2.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ardoise"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-ardoise-pale">
              <Link
                to="/qualification"
                className="inline-flex font-corps font-medium text-sm bg-ardoise text-blanc px-5 py-3 hover:bg-ardoise-profonde transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise"
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
