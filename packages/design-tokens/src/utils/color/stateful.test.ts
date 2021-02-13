/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { SpecifiableColors } from '../../system'
import {
  colors,
  defaultCoreColors,
  defaultIntentColors,
} from '../../tokens/color'
import { generateDerivativeColors } from './derivatives'
import { generateStatefulColor, generateStatefulColors } from './stateful'

const { background, key } = colors
const specifiableColors: SpecifiableColors = {
  ...defaultCoreColors,
  ...defaultIntentColors,
}
const derivedColors = generateDerivativeColors(specifiableColors)

describe('generateStatefulColors', () => {
  describe('enerateStatefulColor', () => {
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
          "criticalAccent": "#f6dbde",
          "criticalBorder": "#CC1F36",
          "criticalFocus": "#e07886",
          "criticalInteractive": "#dd223b",
          "criticalPressed": "#ad1a2e",
          "criticalSubtle": "#f9e8ea",
          "criticalText": "#FFFFFF",
          "keyAccent": "#e7e0fa",
          "keyBorder": "#6C43E0",
          "keyFocus": "#a68eec",
          "keyInteractive": "#7a55e3",
          "keyPressed": "#5424db",
          "keySubtle": "#f0ecfb",
          "keyText": "#FFFFFF",
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
