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

import { colors } from '../colors'
import { defaultCoreColors, defaultIntentColors } from '../defaults'
import { fallbackBlends } from '../fallbacks'
import type { SpecifiableColors } from '../types'
import { generateDerivativeColors } from './generateDerivativeColors'
import {
  generateStatefulColor,
  generateStatefulColors,
} from './generateStatefulColors'

const { background, key } = colors
const specifiableColors: SpecifiableColors = {
  ...defaultCoreColors,
  ...defaultIntentColors,
}
const derivedColors = generateDerivativeColors(
  specifiableColors,
  fallbackBlends
)

describe('generateStatefulColors', () => {
  describe('generateStatefulColor', () => {
    test('text1', () => {
      expect(generateStatefulColor(background, key)).toMatchInlineSnapshot(
        {},
        `
        Object {
          "accent": "#e7e0fa",
          "border": "#6C43E0",
          "focus": "#a68eec",
          "interactive": "#7a55e3",
          "pressed": "#5424db",
          "subtle": "#f0ecfb",
          "text": "#FFFFFF",
        }
      `
      )
    })
  })

  describe('enerateStatefulColors', () => {
    test('text1', () => {
      expect(
        generateStatefulColors(specifiableColors, derivedColors)
      ).toMatchInlineSnapshot(
        {},
        `
        Object {
          "calculationAccent": "#deeddb",
          "calculationBorder": "#319220",
          "calculationFocus": "#83bd79",
          "calculationInteractive": "#37a324",
          "calculationPressed": "#27751a",
          "calculationSubtle": "#eaf4e8",
          "calculationText": "#FFFFFF",
          "criticalAccent": "#f6dbde",
          "criticalBorder": "#CC1F36",
          "criticalFocus": "#e07886",
          "criticalInteractive": "#dd223b",
          "criticalPressed": "#ad1a2e",
          "criticalSubtle": "#f9e8ea",
          "criticalText": "#FFFFFF",
          "dimensionAccent": "#dee6ef",
          "dimensionBorder": "#31689E",
          "dimensionFocus": "#83a4c4",
          "dimensionInteractive": "#3672ae",
          "dimensionPressed": "#295683",
          "dimensionSubtle": "#eaeff5",
          "dimensionText": "#FFFFFF",
          "keyAccent": "#e7e0fa",
          "keyBorder": "#6C43E0",
          "keyFocus": "#a68eec",
          "keyInteractive": "#7a55e3",
          "keyPressed": "#5424db",
          "keySubtle": "#f0ecfb",
          "keyText": "#FFFFFF",
          "measureAccent": "#f5e9dd",
          "measureBorder": "#C2772E",
          "measureFocus": "#daad81",
          "measureInteractive": "#cf8135",
          "measurePressed": "#a56527",
          "measureSubtle": "#f8f1ea",
          "measureText": "#FFFFFF",
          "neutralAccent": "#e8e9e9",
          "neutralBorder": "#71767a",
          "neutralFocus": "#a9acaf",
          "neutralInteractive": "#7b8085",
          "neutralPressed": "#606467",
          "neutralSubtle": "#f0f1f1",
          "neutralText": "#FFFFFF",
        }
      `
      )
    })
  })
})
