const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  loader: 'responsive-loader',
  responsive: {
    adapter: require('responsive-loader/sharp'),
    sizes: [320, 640, 960, 1200, 1800, 2400],
    placeholder: true,
    placeholderSize: 20
  },
  // your config for other plugins or the general next.js here...
});