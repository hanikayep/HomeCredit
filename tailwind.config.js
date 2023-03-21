/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#e11931",
        lightGray: "#f8f9fa",
        secondary: "#40b672"
      },

      fontSize: {
        huge: 'clamp(2.4rem, 6vw, 3.2rem)',
        head2: 'clamp(1.5rem, 6vw, 2.6rem)',
        head3: 'clamp(1rem, 4vw, 1.2rem)'
      },

      fontFamily: {
        roboto : ['Roboto', 'san-serif']
      }
    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    }
  },

  plugins: [],
}
