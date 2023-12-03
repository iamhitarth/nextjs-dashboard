const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  ...{
    "semi": true,
    "trailingComma": "all",
    "singleQuote": true,
    "printWidth": 80,
    "tabWidth": 2,
    "useTabs": false,
  },
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
