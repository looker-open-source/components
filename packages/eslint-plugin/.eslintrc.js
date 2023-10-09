/**
 * Copyright (c) 2022 Looker Data Sciences, Inc.
 * SPDX-License-Identifier: MIT
 */

// This is how an ESLint plugin can consume itself.
module.exports = {
  overrides: require('./src').configs.recommended.overrides,
};
