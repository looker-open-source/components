/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ThemeCustomizations } from './ThemeCustomizations'

describe('ThemeCustomizations', () => {
  test('Allows partial defaults', () => {
    const customizations: ThemeCustomizations = {
      defaults: {
        brandAnimation: true,
      },
    }

    expect(customizations.defaults?.brandAnimation).toBeTruthy()
  })
})
