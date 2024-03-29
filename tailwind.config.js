module.exports = {
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          'cursive': ['SnellRoundhand', 'cursive'],
          'default': ['Helvetica Neue', 'Helvetica', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'],
        },
        colors: {
          'accent-1': '#333',
          'dark-blue': '#0F1217',
          'footer': '#000013',
          'header-blue': '#5F707B',
          'navigation-gray': '#515151',
          'mint': '#27B499'
        },
        spacing: {
          'header': '10rem',
          'header-lg': '13rem',
          'header-xl': '14rem',
          'header-mini': '7rem',
          'header-lg-mini': '9rem',
          'header-xl-mini': '10rem',
        },
        minHeight: {
          'hero-img': '50vh',
        },
        maxHeight: {
          'hero': '50vh',
        },
        height: {
          'video': '315px',
          'header-top': '45%',
          'header-bottom': '55%',
          'hero-img': '50vh',
        },
        width: {
          'video': '560px',
        },
        zIndex: {
          'top': '100',
        },
        backgroundImage: theme => ({
          'guestbook': "url('/images/guestbookimage.png')",
          'guestbook-mobile': "url('/images/guestbookimage-mobile.png')",
         })
      },
    },
    variants: {
      extend: {
        opacity: ['disabled'],
      }
    },
    plugins: [],
  }
