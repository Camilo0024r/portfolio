/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"
],
  theme: {
   
    extend: {
      colors:{
        'special':'#42eaa4',
        'dark':'#212529',
        'white':'#E9ECEF',
      }
    },
    
    fontFamily:{
      'sans':[''],
    }
  },
  plugins: [],
}
