import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ardoise-profonde text-ardoise-pale">
      <div className="conteneur py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo + baseline */}
          <div>
            <Link to="/" aria-label="ImmoPilot — accueil">
              {/*
                Le logo SVG a un fond sombre dans ses déclinaisons :
                on filtre pour forcer la version claire sur fond ardoise.
                Si le SVG est déjà adaptatif, supprimer le filtre.
              */}
              <img
                src="/logo.svg"
                alt="ImmoPilot"
                className="h-9 w-auto brightness-0 invert opacity-80"
              />
            </Link>
            <p className="font-corps font-light text-sm mt-3 text-ardoise-pale/80 max-w-xs">
              Moins de tâches répétitives. Plus de temps pour vos mandats.
            </p>
          </div>

          {/* Liens */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8" aria-label="Liens footer">
            <a
              href="mailto:contact@immopilot-ia.fr"
              className="font-corps font-medium text-sm text-ardoise-pale hover:text-blanc transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ardoise-pale"
            >
              contact@immopilot-ia.fr
            </a>
            <Link
              to="/mentions-legales"
              className="font-corps font-medium text-sm text-ardoise-pale hover:text-blanc transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ardoise-pale"
            >
              Mentions légales
            </Link>
          </nav>
        </div>

        {/* Séparateur + copyright */}
        <div className="mt-10 pt-6 border-t border-ardoise/40">
          <p className="font-corps font-light text-xs text-ardoise-pale/50">
            © {new Date().getFullYear()} ImmoPilot · Grand Est
          </p>
        </div>
      </div>
    </footer>
  )
}
