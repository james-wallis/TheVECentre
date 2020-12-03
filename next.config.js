const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  loader: 'responsive-loader',
  responsive: {
    adapter: require('responsive-loader/sharp'),
  },
  // your config for other plugins or the general next.js here...
});