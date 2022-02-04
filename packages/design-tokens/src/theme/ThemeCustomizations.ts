/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
