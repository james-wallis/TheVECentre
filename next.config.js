const withOptimizedImages = require('next-optimized-images');

const {
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
  GTAG,
} = process.env;

const env = {
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
  GTAG,
};

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
  env,
});