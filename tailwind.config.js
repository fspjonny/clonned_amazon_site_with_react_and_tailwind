/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'arial': 'Arial',
      },
      colors: {
        'darkblue-500': '#485769',
        'darkblue-550': '#374859',
        'darkblue-600': '#37475a',
        'darkblue-700': '#232f3d',
        'darkblue-900': '#131921',
        'darkblue-950': '#131a22',
        'gold-100': '#feba6f',
        'gold-200': '#f3a450',
        'orange-650': '#e47911',
        'orange-660': '#ff9324',
        'orange-670': '#d06246',
        'yellow-350': '#f0c14b',
      },
      spacing: {
        '1.5': '0.35rem',
        '7': '1.75rem',
        '25': '6.10rem',
        '26': '6.28rem',
        '66': '18rem',
        '75px': '75px',
        '210px': '210px',
      },
      borderWidth: {
        '3': '3px',
      }      
    },
  },
  plugins: [],
}
