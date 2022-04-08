const noPrivateDependencies = require('./rules/noPrivateDependencies')

module.exports = {
  configs: {
    recommended: {
      overrides: [
        {
          files: ['**/package.json'],
          parser: 'jsonc-eslint-parser',
          plugins: ['@looker'],
          rules: {
            '@looker/no-private-dependencies': ['error', {}],
          },
        },
      ],
    },
  },
  rules: {
    'no-private-dependencies': noPrivateDependencies,
  },
}
