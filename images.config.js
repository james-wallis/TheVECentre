const tailwindBreakpoints = {
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    '2xl': 1536,
}

const defaultBreakPoints = Object.values(tailwindBreakpoints);
const defaultSizes = Object.values()

module.exports = {
    default: {
      webp: true,
      sizes: [300, 600, 900, 1200],
      breakpoints: [tailwindBreakpoints.md, tailwindBreakpoints.lg, tailwindBreakpoints["2xl"]]
    },
    types: {
        header: {
            webp: true,
            sizes: [250, 400],
            breakpoints: [tailwindBreakpoints.lg],
        },
        scrollToViewTag: {
            sizes: [150, 250],
            breakpoints: [tailwindBreakpoints.lg],
        },
        footer: {
            sizes: [192],
        },
        hero: {
            sizes: [700, 1100, 1600],
            breakpoints: [tailwindBreakpoints.lg, tailwindBreakpoints['2xl']]

        },
    },
  };