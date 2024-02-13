/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'title': ['Pacifico', 'cursive']
      },
      backgroundImage:{
        'main' : "url('/app/assets/bg_image.png')"
      },
      colors:{
        'blue-1': '#101448 ',
        'blue-2': '#004e92'
      }
    },
  },
  plugins: [],
}
