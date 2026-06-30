/**
 * Bouton réutilisable — 3 variantes:
 * - primary  : fond ardoise, texte blanc
 * - secondary: bordure ardoise, texte ardoise
 * - ghost    : texte ardoise souligné, sans fond
 */
export default function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center font-corps font-medium text-base transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise'

  const variants = {
    primary:  'bg-ardoise text-blanc px-7 py-3.5 hover:bg-ardoise-profonde',
    secondary: 'border border-ardoise text-ardoise px-7 py-3.5 hover:bg-ardoise hover:text-blanc',
    ghost:    'text-ardoise underline underline-offset-4 hover:text-ardoise-profonde',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>
  }

  return <button className={classes} {...props}>{children}</button>
}
