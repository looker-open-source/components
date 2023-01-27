/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { SpecifiableColors } from '../color'
import type { FontFamilyChoices, FontSources } from '../system'
import type { ComponentSettingsDefaults } from '../defaults'

export interface ThemeCustomizations {
  /**
   * Override default color specifications
   */
  colors?: Partial<SpecifiableColors>
  /**
   *
   */
  defaults?: Partial<ComponentSettingsDefaults>
  /**
   * Override default font-family specifications. Specified fonts will have our built-in
   * font-stack appended. Built-in font stacks are designed to provide i18n character
   * support and fallbacks for browsers that can't load web fonts.
   */
  fontFamilies?: Partial<FontFamilyChoices>
  /**
   * Specify font sources
   */
  fontSources?: FontSources
}
