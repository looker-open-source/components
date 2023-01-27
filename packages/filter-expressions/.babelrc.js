/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
module.exports = (api) => {
  api.cache.forever()
  return {
    presets: [
      require('@looker/babel-preset-typescript'),
      require('@looker/babel-preset-react'), // for mdx: src/utils/summary/summary.stories.mdx
    ],
  }
}
