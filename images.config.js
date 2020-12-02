const tailwindBreakpoints = {
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    '2xl': 1536,
}

module.exports = {
    default: {
      webp: true,
      sizes: [300, 600, 900, 1200],
      breakpoints: [tailwindBreakpoints.md, tailwindBreakpoints.lg, tailwindBreakpoints["2xl"]]
    },
  };