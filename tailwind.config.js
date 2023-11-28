/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      colors: {
        // gray: colors.coolGray,
        // blue: colors.lightBlue,
        // red: colors.rose,
        // pink: colors.fuchsia,
        primary: '#3490dc',
        secondary: '#ffed4a',
      },
      noto: ["Noto Sans", "sans-serif"],
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
