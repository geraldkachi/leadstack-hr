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
        neutralB: 'var(--neutralBg)',
        onNeutralBg: 'var(--onNeutralBg)',
        primaryBg: 'var(--primaryBg)',
        onPrimaryBg: 'var(--onPrimaryBg)',
        primary: 'var(--primary)',
        // gray: colors.coolGray,
        // blue: colors.lightBlue,
        // red: colors.rose,
        // pink: colors.fuchsia,
        primaryb: '#3490dc',
        secondary: '#ffed4a',
      },
      noto: ["Noto Sans", "sans-serif"],
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
