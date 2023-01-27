/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { generateColors } from '../../color'
import type { Theme } from '../theme'
import { defaultFontFallbacks } from '../../tokens'
import { generateDefaults } from '../../defaults'
import type { ThemeCustomizations } from '../ThemeCustomizations'
import { generateFontFamilies } from '../../utils/typography'

export const generateTheme = (
  theme: Theme,
  customizations?: ThemeCustomizations
): Theme => {
  if (!customizations) {
    return theme
  }

  const { fontSources } = customizations

  const fonts = customizations.fontFamilies
    ? generateFontFamilies(
        theme.fonts,
        defaultFontFallbacks,
        customizations.fontFamilies
      )
    : theme.fonts

  const colors = customizations.colors
    ? generateColors(theme.colors, customizations.colors)
    : theme.colors

  const defaults = customizations.defaults
    ? generateDefaults(theme.defaults, customizations.defaults)
    : theme.defaults

  return {
    ...theme,
    colors,
    defaults,
    fontSources,
    fonts,
  }
}
