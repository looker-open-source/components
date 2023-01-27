/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ComponentSettingsDefaults } from './types'

export const generateDefaults = (
  theme: ComponentSettingsDefaults,
  custom?: Partial<ComponentSettingsDefaults>
) => ({
  ...theme,
  ...custom,
})
