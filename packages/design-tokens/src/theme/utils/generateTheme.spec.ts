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

import { theme } from '../theme'
import { generateTheme } from './generateTheme'

describe('generateTheme', () => {
  test('custom text color', () => {
    const generated = generateTheme(theme, {
      colors: { text: 'black' },
    })
    expect(generated.colors).toMatchInlineSnapshot(`
      Object {
        "background": "#FFFFFF",
        "body": "black",
        "calculation": "#319220",
        "calculationAccent": "#deeddb",
        "calculationBorder": "#319220",
        "calculationFocus": "#83bd79",
        "calculationInteractive": "#37a324",
        "calculationPressed": "#27751a",
        "calculationSubtle": "#eaf4e8",
        "calculationText": "#FFFFFF",
        "critical": "#CC1F36",
        "criticalAccent": "#f6dbde",
        "criticalBorder": "#CC1F36",
        "criticalFocus": "#e07886",
        "criticalInteractive": "#dd223b",
        "criticalPressed": "#ad1a2e",
        "criticalSubtle": "#f9e8ea",
        "criticalText": "#FFFFFF",
        "dimension": "#31689E",
        "dimensionAccent": "#dee6ef",
        "dimensionBorder": "#31689E",
        "dimensionFocus": "#83a4c4",
        "dimensionInteractive": "#3672ae",
        "dimensionPressed": "#295683",
        "dimensionSubtle": "#eaeff5",
        "dimensionText": "#FFFFFF",
        "field": "#FFFFFF",
        "inform": "#0087e1",
        "informAccent": "#d6ebfa",
        "inverse": "black",
        "inverseOn": "#FFFFFF",
        "key": "#6C43E0",
        "keyAccent": "#e7e0fa",
        "keyBorder": "#6C43E0",
        "keyFocus": "#a68eec",
        "keyInteractive": "#7a55e3",
        "keyPressed": "#5424db",
        "keySubtle": "#f0ecfb",
        "keyText": "#FFFFFF",
        "link": "#0059b2",
        "linkInteractive": "#0063c6",
        "measure": "#C2772E",
        "measureAccent": "#f5e9dd",
        "measureBorder": "#C2772E",
        "measureFocus": "#daad81",
        "measureInteractive": "#cf8135",
        "measurePressed": "#a56527",
        "measureSubtle": "#f8f1ea",
        "measureText": "#FFFFFF",
        "neutral": "#595959",
        "neutralAccent": "#e4e4e4",
        "neutralBorder": "#595959",
        "neutralFocus": "#9b9b9b",
        "neutralInteractive": "#636363",
        "neutralPressed": "#474747",
        "neutralSubtle": "#eee",
        "neutralText": "#FFFFFF",
        "pageBackground": "#FFFFFF",
        "positive": "#24b25f",
        "positiveAccent": "#dbf2e5",
        "text": "black",
        "text1": "#8c8c8c",
        "text2": "#595959",
        "text3": "#383838",
        "text4": "#1e1e1e",
        "text5": "black",
        "title": "black",
        "ui1": "#f4f4f4",
        "ui2": "#e0e0e0",
        "ui3": "#c4c4c4",
        "ui4": "#a8a8a8",
        "ui5": "#262626",
        "warn": "#FFA800",
        "warnAccent": "#fff1d6",
      }
    `)
  })

  test('inverted theme', () => {
    const generated = generateTheme(theme, {
      colors: { background: 'black', key: 'purple', text: 'white' },
    })
    expect(generated.colors).toMatchInlineSnapshot(`
      Object {
        "background": "black",
        "body": "white",
        "calculation": "#319220",
        "calculationAccent": "#0d2708",
        "calculationBorder": "#319220",
        "calculationFocus": "#319420",
        "calculationInteractive": "#37a324",
        "calculationPressed": "#27751a",
        "calculationSubtle": "#081805",
        "calculationText": "black",
        "critical": "#CC1F36",
        "criticalAccent": "#37080e",
        "criticalBorder": "#CC1F36",
        "criticalFocus": "#d01f37",
        "criticalInteractive": "#dd223b",
        "criticalPressed": "#ad1a2e",
        "criticalSubtle": "#220509",
        "criticalText": "black",
        "dimension": "#31689E",
        "dimensionAccent": "#0d1c2a",
        "dimensionBorder": "#31689E",
        "dimensionFocus": "#316aa1",
        "dimensionInteractive": "#3672ae",
        "dimensionPressed": "#295683",
        "dimensionSubtle": "#08111a",
        "dimensionText": "black",
        "field": "black",
        "inform": "#0087e1",
        "informAccent": "#00243d",
        "inverse": "white",
        "inverseOn": "black",
        "key": "purple",
        "keyAccent": "#202",
        "keyBorder": "purple",
        "keyFocus": "#820082",
        "keyInteractive": "#940094",
        "keyPressed": "#5c005c",
        "keySubtle": "#150015",
        "keyText": "black",
        "link": "#0059b2",
        "linkInteractive": "#0063c6",
        "measure": "#C2772E",
        "measureAccent": "#34200c",
        "measureBorder": "#C2772E",
        "measureFocus": "#c5792e",
        "measureInteractive": "#cf8135",
        "measurePressed": "#a56527",
        "measureSubtle": "#201407",
        "measureText": "black",
        "neutral": "#a5a5a5",
        "neutralAccent": "#2c2c2c",
        "neutralBorder": "#a5a5a5",
        "neutralFocus": "#a8a8a8",
        "neutralInteractive": "#afafaf",
        "neutralPressed": "#939393",
        "neutralSubtle": "#1c1c1c",
        "neutralText": "black",
        "pageBackground": "#FFFFFF",
        "positive": "#24b25f",
        "positiveAccent": "#093019",
        "text": "white",
        "text1": "#727272",
        "text2": "#a5a5a5",
        "text3": "#c6c6c6",
        "text4": "#e0e0e0",
        "text5": "white",
        "title": "white",
        "ui1": "#0f0f0f",
        "ui2": "#2d2d2d",
        "ui3": "#575757",
        "ui4": "#828282",
        "ui5": "#fff",
        "warn": "#FFA800",
        "warnAccent": "#452d00",
      }
    `)
  })

  test('title and body colors', () => {
    const generated = generateTheme(theme, {
      colors: { body: 'aqua', title: 'red' },
    })
    expect(generated.colors.body).toEqual('aqua')
    expect(generated.colors.title).toEqual('red')
  })

  test('fontFamilies', () => {
    const generated = generateTheme(theme, {
      fontFamilies: {
        body: "'Times new roman'",
        brand: 'verdana',
        code: 'fixed',
      },
    })
    expect(generated.fonts).toMatchInlineSnapshot(`
      Object {
        "body": "'Times new roman', 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif",
        "brand": "verdana, 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif",
        "code": "fixed, Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace",
      }
    `)
  })

  test('fontFamilies - unquoted faces', () => {
    const generated = generateTheme(theme, {
      fontFamilies: {
        body: 'Open Sans, Noto Sans',
      },
    })
    expect(generated.fonts.body).toMatchInlineSnapshot(
      `"'Open Sans', 'Noto Sans', 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif"`
    )
  })

  test('stock', () => {
    expect(generateTheme(theme).fonts).toMatchInlineSnapshot(`
      Object {
        "body": "Roboto, 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif",
        "brand": "Roboto, 'Noto Sans', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif",
        "code": "'Roboto Mono', Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace",
      }
    `)

    expect(generateTheme(theme).colors).toMatchInlineSnapshot(`
      Object {
        "background": "#FFFFFF",
        "body": "#262D33",
        "calculation": "#319220",
        "calculationAccent": "#deeddb",
        "calculationBorder": "#319220",
        "calculationFocus": "#83bd79",
        "calculationInteractive": "#37a324",
        "calculationPressed": "#27751a",
        "calculationSubtle": "#eaf4e8",
        "calculationText": "#FFFFFF",
        "critical": "#CC1F36",
        "criticalAccent": "#FFE5E9",
        "criticalBorder": "#ED3B53",
        "criticalFocus": "#FF667A",
        "criticalInteractive": "#dd223b",
        "criticalPressed": "#ad1a2e",
        "criticalSubtle": "#FFF2F4",
        "criticalText": "#FFFFFF",
        "dimension": "#31689E",
        "dimensionAccent": "#dee6ef",
        "dimensionBorder": "#31689E",
        "dimensionFocus": "#83a4c4",
        "dimensionInteractive": "#3672ae",
        "dimensionPressed": "#295683",
        "dimensionSubtle": "#eaeff5",
        "dimensionText": "#FFFFFF",
        "field": "#FFFFFF",
        "inform": "#0087e1",
        "informAccent": "#d6ebfa",
        "inverse": "#262D33",
        "inverseOn": "#FFFFFF",
        "key": "#6C43E0",
        "keyAccent": "#E8E5FF",
        "keyBorder": "#6C43E0",
        "keyFocus": "#9785F2",
        "keyInteractive": "#7a55e3",
        "keyPressed": "#5424db",
        "keySubtle": "#F3F2FF",
        "keyText": "#FFFFFF",
        "link": "#0059b2",
        "linkInteractive": "#0063c6",
        "measure": "#C2772E",
        "measureAccent": "#f5e9dd",
        "measureBorder": "#C2772E",
        "measureFocus": "#daad81",
        "measureInteractive": "#cf8135",
        "measurePressed": "#a56527",
        "measureSubtle": "#f8f1ea",
        "measureText": "#FFFFFF",
        "neutral": "#71767a",
        "neutralAccent": "#F5F6F7",
        "neutralBorder": "#939BA5",
        "neutralFocus": "#C1C6CC",
        "neutralInteractive": "#7a818b",
        "neutralPressed": "#5f656e",
        "neutralSubtle": "#FBFBFC",
        "neutralText": "#FFFFFF",
        "pageBackground": "#FFFFFF",
        "positive": "#24b25f",
        "positiveAccent": "#dbf2e5",
        "text": "#262D33",
        "text1": "#939BA5",
        "text2": "#707781",
        "text3": "#4C535B",
        "text4": "#343C42",
        "text5": "#262D33",
        "title": "#262D33",
        "ui1": "#F5F6F7",
        "ui2": "#DEE1E5",
        "ui3": "#C1C6CC",
        "ui4": "#939BA5",
        "ui5": "#262D33",
        "warn": "#FFA800",
        "warnAccent": "#fff1d6",
      }
    `)
  })

  describe('fontSources', () => {
    const generated = generateTheme(theme, {
      fontSources: [
        {
          url: 'http://not-really-a.font.com',
        },
        {
          face: 'Faux Font',
          url: 'http://faux-font.com',
        },
      ],
    })

    expect(generated.fontSources).toMatchInlineSnapshot(`
      Array [
        Object {
          "url": "http://not-really-a.font.com",
        },
        Object {
          "face": "Faux Font",
          "url": "http://faux-font.com",
        },
      ]
    `)
  })
})
