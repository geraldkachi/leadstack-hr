/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onNeutralBg: '[#3490dc]',
        neutralBg: 'var(--neutralBg)',
        onPrimaryBg: 'var(--onPrimaryBg)',
        primaryBg: 'var(--primaryBg)',
        primary: 'var(--primary)',
        // gray: colors.coolGray,
        // blue: colors.lightBlue,
        // red: colors.rose,
        // pink: colors.fuchsia,
        primaryb: '#3490dc',
        secondary: '#ffed4a',
      },
    },
    fontFamily: {
      noto: ["Noto Sans", "sans-serif"],
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    // backgroundColor: {}
  },
  plugins: [],
}
