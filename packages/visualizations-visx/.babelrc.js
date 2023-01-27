/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
module.exports = api => {
  api.cache.forever()
  return {
    presets: [
      require('@looker/babel-preset-styled-components'),
      require('@looker/babel-preset-typescript'),
    ],
  }
}
