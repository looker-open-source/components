module.exports = {
  automock: false,
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(woff)$': '<rootDir>/__mocks__/fileMock.js',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  transform: {
    '^.+\\.(jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/?(*.)(spec|test).(ts|js)?(x)'],
}
