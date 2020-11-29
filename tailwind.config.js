module.exports = {
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'accent-1': '#333',
          'dark-blue': '#0F1217',
        },
        maxHeight: {
          'tgi': '70vh',
        },
        height: {
          'hero-mobile': '80vh',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }