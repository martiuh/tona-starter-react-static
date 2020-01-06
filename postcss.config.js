const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');

module.exports = {
  sourceMap: true,
  ident: 'postcss',
  plugins: [
    postcssFlexbugsFixes,
    tailwindcss('./tailwind.js'),
    autoprefixer({
      grid: true,
      flexbox: 'no-2009' // I'd opt in for this - safari 9 & IE 10.
    })
  ]
};
