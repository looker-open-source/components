/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

module.exports = api => {
  api.cache.forever();
  return {
    plugins: [require('babel-plugin-macros')],
    presets: [
      require('@looker/babel-preset-react'),
      require('@looker/babel-preset-typescript'),
    ],
  };
};
