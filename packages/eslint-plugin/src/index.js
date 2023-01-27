/**
 * Copyright (c) 2022 Looker Data Sciences, Inc.
 * SPDX-License-Identifier: MIT
 */

const noPrivateDependencies = require('./noPrivateDependencies')
const noLiteralString = require('./noLiteralString')
const licenseHeader = require('./licenseHeader')
const publishConfig = require('./publishConfig')
const noMixedAngularJsHotProviders = require('./noMixedAngularJsHotProviders')

module.exports = {
  configs: {
    recommended: {
      overrides: [
        ...noPrivateDependencies.overrides,
        ...noLiteralString.overrides,
        ...licenseHeader.overrides,
        ...publishConfig.overrides,
      ],
    },
  },
  rules: {
    ...licenseHeader.rules,
    ...noPrivateDependencies.rules,
    ...publishConfig.rules,
    ...noMixedAngularJsHotProviders,
  },
}
