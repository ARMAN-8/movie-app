module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'landingBG': "url('/src/assets/image/landing-img.png');",
      })
      /*backgroundImage: {
        'landingBG': "url('/src/assets/img/landing-img.png');",
      },*/
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
