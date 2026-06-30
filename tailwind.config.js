/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Palette ImmoPilot v3
      colors: {
        encre: '#0C0D0F',
        blanc: '#F8F8F7',
        ardoise: '#3D5A73',
        'ardoise-profonde': '#253645',
        'ardoise-pale': '#C8D8E4',
      },
      // Typographies
      fontFamily: {
        // v4: Fraunces (display serif) pour titres, Manrope (sans) pour corps
        titre: ['"Fraunces"', 'serif'],
        corps: ['"Manrope"', 'sans-serif'],
      },
      // Grille max
      maxWidth: {
        prose: '72ch',
        contenu: '1120px',
      },
    },
  },
  plugins: [],
}
