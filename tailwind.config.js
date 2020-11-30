module.exports = {
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          'cursive': ['SnellRoundhand', 'cursive'],
          'default': ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'],
        },
        colors: {
          'accent-1': '#333',
          'dark-blue': '#0F1217',
          'footer': '#000013',
          'header-blue': '#5F707B',
          'navigation-gray': '#515151',
        },
        spacing: {
          'header': '10rem',
          'header-lg': '13rem',
          'header-xl': '14rem',
          'header-mini': '7rem',
          'header-lg-mini': '10rem',
          'header-xl-mini': '11rem',
        },
        minHeight: {
          'hero-img': '50vh',
        },
        maxHeight: {
          'tgi': '70vh',
        },
        height: {
          'video': '315px',
          'header-top': '45%',
          'header-bottom': '55%',
        },
        width: {
          'video': '560px',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }