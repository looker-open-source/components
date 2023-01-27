/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'
import type { Colors, SpecifiableColors } from '../types'
import { generateBlendColors } from './generateBlendColors'
import { generateDerivativeColors } from './generateDerivativeColors'
import { generateStatefulColors } from './generateStatefulColors'

export const generateColors = (
  themeColors: SpecifiableColors,
  customColors?: Partial<SpecifiableColors>
): Colors => {
  const specifiable = { ...themeColors, ...pickBy(customColors, identity) }

  /**
   * If a theme customization only specifies a `text` color the `body` and
   * `title` colors of the previous theme will be passed through.
   *
   * Instead, it should inferred that the new `text` color should be applied
   * to the `body` & `title` slots unless those have been explicitly specified.
   */
  if (customColors && customColors.text) {
    if (!customColors.body) {
      specifiable.body = undefined
    }
    if (!customColors.title) {
      specifiable.title = undefined
    }
  }

  const blends = generateBlendColors(specifiable)
  const derivatives = generateDerivativeColors(specifiable, blends)
  const statefulColors = generateStatefulColors(specifiable, derivatives)

  return {
    ...specifiable,
    ...derivatives,
    ...blends,
    ...statefulColors,
  }
}
