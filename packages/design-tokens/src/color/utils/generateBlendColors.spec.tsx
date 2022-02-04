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

import type { SpecifiableColors } from '../types'
import { defaultCoreColors, defaultIntentColors } from '../defaults'
import { generateBlendColors } from './generateBlendColors'

const specifiableColors: SpecifiableColors = {
  ...defaultCoreColors,
  ...defaultIntentColors,
}

describe('generateBlendColors', () => {
  test('default', () => {
    expect(generateBlendColors(specifiableColors)).toMatchInlineSnapshot(
      {},
      `
      Object {
        "text1": "#9da0a3",
        "text2": "#71767a",
        "text3": "#555b5f",
        "text4": "#40464b",
        "text5": "#262D33",
        "ui1": "#f4f4f4",
        "ui2": "#e0e0e0",
        "ui3": "#c4c4c4",
        "ui4": "#a8a8a8",
        "ui5": "#262626",
      }
    `
    )
  })

  test('dark mode', () => {
    expect(
      generateBlendColors({
        ...specifiableColors,
        background: specifiableColors.text,
        text: specifiableColors.background,
      })
    ).toMatchInlineSnapshot(
      {},
      `
      Object {
        "text1": "#878b8e",
        "text2": "#b3b5b7",
        "text3": "#cfd0d2",
        "text4": "#e4e5e6",
        "text5": "#FFFFFF",
        "ui1": "#33393f",
        "ui2": "#4d5257",
        "ui3": "#707579",
        "ui4": "#94989b",
        "ui5": "#fff",
      }
    `
    )
  })
})
