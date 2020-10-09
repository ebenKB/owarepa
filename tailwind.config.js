module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        indigo: '#5c6ac4',
        blue: '#007ace',
        red: '#de3618',
      }
    }
  },
  variants: {},
  plugins: [],
}
