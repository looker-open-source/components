const config = require('../../.eslintrc.js')

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'sort-keys': 'off',
  },
  extends: [...config.extends, 'plugin:mdx/recommended'],
}
