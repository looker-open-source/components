const { RuleTester } = require('eslint')
const rule = require('.')

jest.mock('@manypkg/get-packages', () => ({
  getPackagesSync: jest.fn(() => ({
    packages: [
      { packageJson: { name: 'a' } },
      { packageJson: { name: 'b', private: true } },
    ],
  })),
}))

const filename = '@looker/components/package.json'

new RuleTester({
  parser: require.resolve('jsonc-eslint-parser'),
}).run('no-private-dependencies', rule, {
  valid: [
    {
      filename,
      code: `{ "dependencies": { "a": "*" } }`,
      options: [{ exclude: [] }],
    },
    {
      filename,
      code: `{ "dependencies": { "b": "*" } }`,
      options: [{ exclude: ['b'] }],
    },
  ],
  invalid: [
    {
      filename,
      code: `{ "dependencies": { "b": "*" } }`,
      options: [{ exclude: [] }],
      errors: [{ messageId: 'invalidPackage' }],
    },
  ],
})
