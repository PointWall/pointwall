/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        sans: ['var(--font-montserrat)']
      },
      colors: {
        logoRed: 'rgb(var(--color-logo-red) / <alpha-value>)',
        logoOrange: 'rgb(var(--color-logo-orange) / <alpha-value>)',
        logoYellow: 'rgb(var(--color-logo-yellow) / <alpha-value>)',
        logoGreen: 'rgb(var(--color-logo-green) / <alpha-value>)',
        logoBlue: 'rgb(var(--color-logo-blue) / <alpha-value>)',
        logoPink: 'rgb(var(--color-logo-pink) / <alpha-value>)'
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-5%)', opacity: '.25' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(5%)', opacity: '.25' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
