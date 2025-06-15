/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brandBlack: "#151515",
        brandPrimary: "#7cbfbd",
        brandPrimaryLight: '#d0f0ef',
      },
    },
  },
  plugins: [],
}
