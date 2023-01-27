/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { textBlends } from '../blendPoints'
import type { BlendColors, DerivativeColors, SpecifiableColors } from '../types'
import { accentBlendScale, generateInteractive } from './generateStatefulColors'
import { mixColors } from './mixColors'
import { mixScaledColors } from './mixScaledColors'

export const generateDerivativeColors = (
  {
    background,
    inform,
    link,
    positive,
    text,
    warn,
    title,
    body,
  }: SpecifiableColors,
  { text5 }: BlendColors
): DerivativeColors => {
  const accents = {
    informAccent: mixScaledColors(accentBlendScale, inform, background),
    positiveAccent: mixScaledColors(accentBlendScale, positive, background),
    warnAccent: mixScaledColors(accentBlendScale, warn, background),
  }

  return {
    body: body || text5,
    field: background,
    inverse: text,
    inverseOn: background,
    linkInteractive: generateInteractive(link),
    neutral: mixColors(textBlends[1], text, background),
    title: title || text5,
    ...accents,
  }
}
