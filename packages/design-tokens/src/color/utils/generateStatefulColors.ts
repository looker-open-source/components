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

import darken from 'polished/lib/color/darken'
import lighten from 'polished/lib/color/lighten'
import type {
  StatefulColors,
  StatefulColorChoices,
  SpecifiableColors,
  DerivativeColors,
} from '../types'
import type { ExtendedStateColors } from '../types/stateful'
import { mixScaledColors } from './mixScaledColors'

/* eslint-disable sort-keys-fix/sort-keys-fix */

export const generateInteractive = (color: string) => lighten(0.04, color)
export const generatePressed = (color: string) => darken(0.07, color)

export const accentBlendScale = 16

export const generateStatefulColor = (
  background: string,
  color: string
): StatefulColorChoices => {
  return {
    subtle: mixScaledColors(10, color, background),
    accent: mixScaledColors(accentBlendScale, color, background),
    focus: mixScaledColors(60, color, background),
    interactive: generateInteractive(color),
    pressed: generatePressed(color),
    text: background,
    border: color,
  }
}

export const generateExtendedStatefulColors = (
  specifiable: SpecifiableColors
): ExtendedStateColors => {
  const { background, calculation, dimension, measure } = specifiable

  const calculationColors = generateStatefulColor(background, calculation)
  const dimensionColors = generateStatefulColor(background, dimension)
  const measureColors = generateStatefulColor(background, measure)

  return {
    calculationSubtle: calculationColors.subtle,
    calculationAccent: calculationColors.accent,
    calculationFocus: calculationColors.focus,
    calculationInteractive: calculationColors.interactive,
    calculationPressed: calculationColors.pressed,
    calculationText: calculationColors.text,
    calculationBorder: calculationColors.border,

    dimensionSubtle: dimensionColors.subtle,
    dimensionAccent: dimensionColors.accent,
    dimensionFocus: dimensionColors.focus,
    dimensionInteractive: dimensionColors.interactive,
    dimensionPressed: dimensionColors.pressed,
    dimensionText: dimensionColors.text,
    dimensionBorder: dimensionColors.border,

    measureSubtle: measureColors.subtle,
    measureAccent: measureColors.accent,
    measureFocus: measureColors.focus,
    measureInteractive: measureColors.interactive,
    measurePressed: measureColors.pressed,
    measureText: measureColors.text,
    measureBorder: measureColors.border,
  }
}

export const generateStatefulColors = (
  specifiable: SpecifiableColors,
  derivatives: DerivativeColors
): StatefulColors => {
  const { background, key, critical } = specifiable
  const { neutral } = derivatives

  const extendedStatefulColors = generateExtendedStatefulColors(specifiable)

  const keyColors = generateStatefulColor(background, key)
  const criticalColors = generateStatefulColor(background, critical)
  const neutralColors = generateStatefulColor(background, neutral)

  return {
    keySubtle: keyColors.subtle,
    keyAccent: keyColors.accent,
    keyFocus: keyColors.focus,
    keyInteractive: keyColors.interactive,
    keyPressed: keyColors.pressed,
    keyText: keyColors.text,
    keyBorder: keyColors.border,

    criticalSubtle: criticalColors.subtle,
    criticalAccent: criticalColors.accent,
    criticalFocus: criticalColors.focus,
    criticalInteractive: criticalColors.interactive,
    criticalPressed: criticalColors.pressed,
    criticalText: criticalColors.text,
    criticalBorder: criticalColors.border,

    neutralSubtle: neutralColors.subtle,
    neutralAccent: neutralColors.accent,
    neutralFocus: neutralColors.focus,
    neutralInteractive: neutralColors.interactive,
    neutralPressed: neutralColors.pressed,
    neutralText: neutralColors.text,
    neutralBorder: neutralColors.border,

    ...extendedStatefulColors,
  }
}
