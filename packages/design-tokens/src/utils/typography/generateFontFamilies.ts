/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'
import type { FontFamilyChoices } from '../../system'
import type {
  FontFamilies,
  FontFamilyFallbacks,
} from '../../system/typography/font_families'
import { fontFacesToFamily } from './fontFacesToFamily'

export const generateFontFamilies = (
  defaultFonts: FontFamilyChoices,
  fallbacks: FontFamilyFallbacks,
  customFonts?: Partial<FontFamilyChoices>
) => {
  const fontFamilies: FontFamilyChoices = {
    ...defaultFonts,
    ...pickBy(customFonts, identity),
  }

  Object.entries(fontFamilies).map(
    ([key, fontFace]) =>
      (fontFamilies[key as FontFamilies] = fontFacesToFamily(
        fontFace,
        fallbacks[key as FontFamilies]
      ))
  )

  return fontFamilies
}
