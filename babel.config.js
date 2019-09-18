module.exports = api => {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            browsers: 'Last 2 Chrome versions, Firefox ESR',
            node: '8.9',
          },
        },
      ],
      [
        '@babel/preset-react',
        {
          development: process.env.BABEL_ENV !== 'build',
        },
      ],
      '@babel/preset-typescript',
    ],
    env: {
      build: {
        ignore: [
          '**/*.d.ts',
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
          '__snapshots__',
          '__tests__',
        ],
      },
    },
    ignore: ['node_modules'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-transform-runtime',
      'babel-plugin-styled-components',
    ],
  }
}
