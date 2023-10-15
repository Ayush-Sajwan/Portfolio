/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        blob:'blob 7s ease-in-out alternate infinite',
      },
      keyframes:{
        blob:{
          '0%,100%':{ borderRadius:'60% 40% 30% 70% / 60% 30% 70% 40%'},
          '50%':{borderRadius:'30% 60% 70% 40% / 50% 60% 30% 60%'}
        }
      }
    },
  },
  plugins: [],
}

