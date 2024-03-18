/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
"./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      padding: {
        DEFAULT: '50px'
      }
    },
    screens: {
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1330px',
    },
    extend: {
      colors: {
        primary:'#282A3A',
        secondary:'#282A3A90',
        accent: {
          DEFAULT: '#6D1600',
          secondary: '#68D585',
          tertiary: '#F4F7FA',
        },
      },
      fontFamily: {
        primary: 'Playfair Display',
        secondary: 'Inter',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

