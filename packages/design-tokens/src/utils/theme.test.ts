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

import { theme } from '../theme'
import { generateTheme } from './theme'

describe('generateTheme', () => {
  test('color', () => {
    const generated = generateTheme(theme, {
      colors: { background: 'black', key: 'purple', text: 'white' },
    })
    expect(generated.colors).toMatchInlineSnapshot(`
      Object {
        "background": "black",
        "body": "#f2f2f2",
        "critical": "#CC1F36",
        "criticalAccent": "#37080e",
        "criticalBorder": "#CC1F36",
        "criticalFocus": "#d01f37",
        "criticalInteractive": "#dd223b",
        "criticalPressed": "#ad1a2e",
        "criticalSubtle": "#220509",
        "criticalText": "black",
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
        "neutral": "#a5a5a5",
        "neutralAccent": "#2c2c2c",
        "neutralBorder": "#a5a5a5",
        "neutralFocus": "#a8a8a8",
        "neutralInteractive": "#afafaf",
        "neutralPressed": "#939393",
        "neutralSubtle": "#1c1c1c",
        "neutralText": "black",
        "positive": "#24b25f",
        "positiveAccent": "#093019",
        "secondary": "#a5a5a5",
        "subdued": "#727272",
        "text": "white",
        "text1": "#727272",
        "text2": "#a5a5a5",
        "text3": "#c6c6c6",
        "text4": "#e0e0e0",
        "text5": "#f2f2f2",
        "title": "#f2f2f2",
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
        "body": "'Times new roman', 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif",
        "brand": "verdana, 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif",
        "code": "fixed, Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace",
      }
    `)
  })

  test('stock', () => {
    expect(generateTheme(theme)).toMatchInlineSnapshot(`
      Object {
        "breakpoints": Array [
          "30rem",
          "48rem",
          "64rem",
          "75rem",
          "90rem",
        ],
        "colors": Object {
          "background": "#FFFFFF",
          "body": "#262D33",
          "critical": "#CC1F36",
          "criticalAccent": "#FFE5E9",
          "criticalBorder": "#ED3B53",
          "criticalFocus": "#FF667A",
          "criticalInteractive": "#dd223b",
          "criticalPressed": "#ad1a2e",
          "criticalSubtle": "#FFF2F4",
          "criticalText": "#FFFFFF",
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
          "neutral": "#71767a",
          "neutralAccent": "#F5F6F7",
          "neutralBorder": "#939BA5",
          "neutralFocus": "#C1C6CC",
          "neutralInteractive": "#7a818b",
          "neutralPressed": "#5f656e",
          "neutralSubtle": "#FBFBFC",
          "neutralText": "#FFFFFF",
          "positive": "#24b25f",
          "positiveAccent": "#dbf2e5",
          "secondary": "#707781",
          "subdued": "#939BA5",
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
        },
        "easings": Object {
          "ease": "cubic-bezier(0.86, 0, 0.07, 1)",
          "easeIn": "cubic-bezier(0.895, 0.03, 0.685, 0.22);",
          "easeInBack": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
          "easeOut": "cubic-bezier(0.165, 0.84, 0.44, 1)",
          "easeOutBack": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        },
        "fontSizes": Object {
          "large": "1.125rem",
          "medium": "1rem",
          "small": "0.875rem",
          "xlarge": "1.375rem",
          "xsmall": "0.75rem",
          "xxlarge": "1.5rem",
          "xxsmall": "0.6875rem",
          "xxxlarge": "1.75rem",
          "xxxxlarge": "2.25rem",
          "xxxxxlarge": "2.75rem",
        },
        "fontWeights": Object {
          "bold": 700,
          "medium": 500,
          "normal": 400,
          "semiBold": 600,
        },
        "fonts": Object {
          "body": "Roboto, 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif",
          "brand": "Roboto, 'Noto Sans JP', 'Noto Sans CJK KR', 'Noto Sans Arabic UI', 'Noto Sans Devanagari UI', 'Noto Sans Hebrew', 'Noto Sans Thai UI', Helvetica, Arial, sans-serif",
          "code": "'Roboto Mono', Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace",
        },
        "lineHeights": Object {
          "large": "1.5rem",
          "medium": "1.5rem",
          "small": "1.25rem",
          "xlarge": "1.75rem",
          "xsmall": "1rem",
          "xxlarge": "2.25rem",
          "xxsmall": "1rem",
          "xxxlarge": "2.25rem",
          "xxxxlarge": "2.75rem",
          "xxxxxlarge": "3.25rem",
        },
        "radii": Object {
          "large": "0.5rem",
          "medium": "0.25rem",
          "none": "0rem",
          "small": "0.125rem",
          "xsmall": "0.0625rem",
        },
        "shadows": Object {
          "1": "0px 1px 8px rgba(0, 0, 0, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.05)",
          "2": "0 2px 12px rgba(0, 0, 0, 0.11), 0 1px 4px rgba(0, 0, 0, 0.04)",
          "3": "0 3px 18px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.04)",
          "4": "0 4px 20px rgba(0, 0, 0, 0.14), 0 1px 4px rgba(0, 0, 0, 0.04),  0 10px 8px 4px rgba(0, 0, 0, 0.01)",
          "5": "0 2px 30px rgba(0, 0, 0,.16), 0 1px 4px rgba(0, 0, 0, 0.04),  0 14px 10px 8px rgba(0, 0, 0, 0.02)",
          "6": "0 5px 42px 0px rgba(0, 0, 0,.18),  0 1px 4px rgba(0, 0, 0, 0.05), 0 16px 20px 10px rgba(0, 0, 0, 0.025)",
        },
        "sizes": Object {
          "large": "2rem",
          "medium": "1.5rem",
          "small": "1.25rem",
          "xsmall": "1.125rem",
          "xxsmall": "1rem",
          "xxxsmall": "0.75rem",
        },
        "space": Object {
          "large": "1.25rem",
          "medium": "1rem",
          "none": "0rem",
          "small": "0.75rem",
          "xlarge": "2rem",
          "xsmall": "0.5rem",
          "xxlarge": "2.5rem",
          "xxsmall": "0.25rem",
          "xxxlarge": "3.75rem",
          "xxxsmall": "0.125rem",
          "xxxxlarge": "5rem",
        },
        "transitions": Object {
          "complex": 400,
          "intricate": 500,
          "moderate": 300,
          "none": 0,
          "quick": 150,
          "rapid": 100,
          "simple": 200,
        },
        "zIndexFloor": 1,
      }
    `)
  })
})
