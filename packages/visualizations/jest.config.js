/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

const { config } = require('@looker/jest-config')

module.exports = {
  ...config,
  collectCoverageFrom: ['src/**/*.@(ts|tsx)'],
  coveragePathIgnorePatterns: [
    ...config.coveragePathIgnorePatterns,
    '<rootDir>/.*/index.ts',
  ],
}
