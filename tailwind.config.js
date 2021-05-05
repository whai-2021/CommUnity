module.exports = {
  purge: [{
    content: [
      './src/*.js',
      './src/*.jsx'
    ],
    options: {
      whitelist: ['bg-color-500']
    }
  }],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
