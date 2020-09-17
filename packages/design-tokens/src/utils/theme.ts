/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import { Theme } from '../theme'
import { FontFamilyChoices, SpecifiableColors } from '../system'
import { generateFontFamilies } from '../utils/typography'
import { generateColors } from './color'

export interface ThemeCustomizations {
  /**
   * Override default color specifications
   */
  colors?: Partial<SpecifiableColors>
  /**
   * Override default font-family specifications. Specified fonts will have out built-in
   * font-stack appended. Built-in font stacks are designed to provide i18n character
   * support and fallbacks for browsers that can't load web fonts.
   */
  fontFamilies?: Partial<FontFamilyChoices>
}

export const generateTheme = (
  theme: Theme,
  customizations?: ThemeCustomizations
): Theme => {
  if (!customizations) {
    return theme
  }

  const fonts = customizations.fontFamilies
    ? generateFontFamilies(theme.fonts, customizations.fontFamilies)
    : theme.fonts

  const colors = customizations.colors
    ? generateColors(theme.colors, customizations.colors)
    : theme.colors

  return {
    ...theme,
    colors,
    fonts,
  }
}
