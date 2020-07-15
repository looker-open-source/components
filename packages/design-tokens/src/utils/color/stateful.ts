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

import { darken, lighten } from 'polished'
import {
  StatefulColors,
  StatefulColorChoices,
  SpecifiableColors,
} from '../../system/color'
import { mixScaledColors } from './blend'

/* eslint-disable sort-keys-fix/sort-keys-fix */

export const generateInteractive = (color: string) => lighten(0.04, color)
export const generatePressed = (color: string) => darken(0.07, color)

const generateStatefulColor = (
  background: string,
  color: string
): StatefulColorChoices => {
  return {
    subtle: mixScaledColors(10, color, background),
    accent: mixScaledColors(16, color, background),
    focus: mixScaledColors(60, color, background),
    interactive: generateInteractive(color),
    pressed: generatePressed(color),
    text: background,
    border: color,
  }
}

export const generateStatefulColors = (
  colors: SpecifiableColors
): StatefulColors => {
  const { background, key, critical, neutral } = colors

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
  }
}
