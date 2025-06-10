/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brandBlack: "#151515",
        brandPrimary: "#55a3a1",
        brandPrimaryLight: '#d0f0ef',
      },
    },
  },
  plugins: [],
}
