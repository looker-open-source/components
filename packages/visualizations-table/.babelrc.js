/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

module.exports = api => {
  api.cache.forever()
  return {
    assumptions: {
      setPublicClassFields: true,
    },
    presets: [
      require('@looker/babel-preset-react'),
      require('@looker/babel-preset-typescript'),
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
      ['@babel/plugin-proposal-class-properties'],
    ],
  }
}
