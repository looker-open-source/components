/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.
 
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

import * as ColorHelper from './color_format_utils'
import { namedColors } from './named_colors'

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool to mine test values

// pattern detection tests
test('detects name', () => {
  expect(ColorHelper.getFormat('white')).toBe('NAME')
})

test('detects hex3', () => {
  expect(ColorHelper.getFormat('#abc')).toBe('HEX3')
})

test('detects hex6', () => {
  expect(ColorHelper.getFormat('#aabbcc')).toBe('HEX6')
})

test('rejects hex4', () => {
  expect(ColorHelper.getFormat('#abcd')).toBe('BAD')
})

test('rejects hex8', () => {
  expect(ColorHelper.getFormat('#abcdabcd')).toBe('BAD')
})

test('detects hsl', () => {
  expect(ColorHelper.getFormat('hsl(195, 100%, 50%)')).toBe('HSL')
})

test('detects hsla', () => {
  expect(ColorHelper.getFormat('hsla(195, 100%, 50%, 0.5)')).toBe('HSLA')
})

test('detects rgbi', () => {
  expect(ColorHelper.getFormat('rgb(1, 2,     3  )')).toBe('RGBI')
})

test('detects rgbia', () => {
  expect(ColorHelper.getFormat('rgba(1, 2, 3,  0.5)')).toBe('RGBIA')
})

test('detects rgbp', () => {
  expect(ColorHelper.getFormat('rgb(1%, 2%, 3%)')).toBe('RGBP')
})

test('detects rgbpa', () => {
  expect(ColorHelper.getFormat('rgba(1%,2%,3%,50%)')).toBe('RGBPA')
})

test('detects rgbpa version 2', () => {
  expect(ColorHelper.getFormat('rgba(1%,2%,3%,0.5)')).toBe('RGBPA')
})

// this pattern is supported by browsers, but not d3-color
test('detects rgbpa with 100%', () => {
  expect(ColorHelper.getFormat('rgba(100%,0%,0%,100%)')).toBe('RGBPA')
})

interface ColorSet {
  [key: string]: string
  hex6: string
  hsl: string
  hsla: string
  name: string
  rgbi: string
  rgbia: string
  rgbp: string
  rgbpa: string
}

enum MatchColor {
  white = 0,
  red,
  maroon,
  lime,
  green,
  blue,
  navy,
  black,
}

// define explicit color sets to match
const matches: ColorSet[] = [
  {
    hex6: '#ffffff',
    hsl: 'hsl(0, 0%, 100%)',
    hsla: 'hsla(0, 0%, 100%, 1)',
    name: 'white',
    rgbi: 'rgb(255, 255, 255)',
    rgbia: 'rgba(255, 255, 255, 1)',
    rgbp: 'rgb(100%, 100%, 100%)',
    rgbpa: 'rgba(100%, 100%, 100%, 1)',
  },
  {
    hex6: '#ff0000',
    hsl: 'hsl(0, 100%, 50%)',
    hsla: 'hsla(0, 100%, 50%, 1)',
    name: 'red',
    rgbi: 'rgb(255, 0, 0)',
    rgbia: 'rgba(255, 0, 0, 1)',
    rgbp: 'rgb(100%, 0%, 0%)',
    rgbpa: 'rgba(100%, 0%, 0%, 1)',
  },
  {
    hex6: '#800000',
    hsl: 'hsl(0, 100%, 25%)',
    hsla: 'hsla(0, 100%, 25%, 1)',
    name: 'maroon',
    rgbi: 'rgb(128, 0, 0)',
    rgbia: 'rgba(128, 0, 0, 1)',
    rgbp: 'rgb(50%, 0%, 0%)',
    rgbpa: 'rgba(50%, 0%, 0%, 1)',
  },
  {
    hex6: '#00ff00',
    hsl: 'hsl(120, 100%, 50%)',
    hsla: 'hsla(120, 100%, 50%, 1)',
    name: 'lime',
    rgbi: 'rgb(0, 255, 0)',
    rgbia: 'rgba(0, 255, 0, 1)',
    rgbp: 'rgb(0%, 100%, 0%)',
    rgbpa: 'rgba(0%, 100%, 0%, 1)',
  },
  {
    hex6: '#008000',
    hsl: 'hsl(120, 100%, 25%)',
    hsla: 'hsla(120, 100%, 25%, 1)',
    name: 'green',
    rgbi: 'rgb(0, 128, 0)',
    rgbia: 'rgba(0, 128, 0, 1)',
    rgbp: 'rgb(0%, 50%, 0%)',
    rgbpa: 'rgba(0%, 50%, 0%, 1)',
  },
  {
    hex6: '#0000ff',
    hsl: 'hsl(240, 100%, 50%)',
    hsla: 'hsla(240, 100%, 50%, 1)',
    name: 'blue',
    rgbi: 'rgb(0, 0, 255)',
    rgbia: 'rgba(0, 0, 255, 1)',
    rgbp: 'rgb(0%, 0%, 100%)',
    rgbpa: 'rgba(0%, 0%, 100%, 1)',
  },
  {
    hex6: '#000080',
    hsl: 'hsl(240, 100%, 25%)',
    hsla: 'hsla(240, 100%, 25%, 1)',
    name: 'navy',
    rgbi: 'rgb(0, 0, 128)',
    rgbia: 'rgba(0, 0, 128, 1)',
    rgbp: 'rgb(0%, 0%, 50%)',
    rgbpa: 'rgba(0%, 0%, 50%, 1)',
  },
  {
    hex6: '#000000',
    hsl: 'hsl(0, 0%, 0%)',
    hsla: 'hsla(0, 0%, 0%, 1)',
    name: 'black',
    rgbi: 'rgb(0, 0, 0)',
    rgbia: 'rgba(0, 0, 0, 1)',
    rgbp: 'rgb(0%, 0%, 0%)',
    rgbpa: 'rgba(0%, 0%, 0%, 1)',
  },
]

test('conversion table tests', () => {
  // enum iteration includes string name AND int position. strip int
  const keys = Object.keys(ColorHelper.ColorFormat).filter(key =>
    isNaN(parseInt(key, 10))
  )
  // for each enum type
  keys.forEach((key, index) => {
    const target =
      ColorHelper.ColorFormat[key as keyof typeof ColorHelper.ColorFormat]
    const formatName = ColorHelper.ColorFormat[index].toLocaleLowerCase()

    matches.forEach(set => {
      const source = set[formatName]
      // check each match
      // only test if source is assigned
      if (source) {
        Object.entries(set).forEach(([, value]) => {
          value &&
            expect(ColorHelper.toFormattedColorString(value, target)).toBe(
              source
            )
        })
      }
    })
  })
})

// miscellaneous tests
test('cannot convert rgbpa 100% to name due to d3 pattern blindness', () => {
  expect(
    ColorHelper.toFormattedColorString(
      'rgba(100%,0%,0%,100%)',
      ColorHelper.ColorFormat.NAME
    )
  ).toBe('')
})

test('converts opaque hsla to rgb', () => {
  expect(
    ColorHelper.toFormattedColorString(
      'hsla(0, 100%, 50%, 1)',
      ColorHelper.ColorFormat.RGBI
    )
  ).toBe('rgb(255, 0, 0)')
})

test('converts transparent hsla to hex6 as rgba', () => {
  expect(
    ColorHelper.toFormattedColorString(
      'hsla(219, 56%, 44%, 0.65)',
      ColorHelper.ColorFormat.HEX6
    )
  ).toBe('rgba(49, 93, 175, 0.65)')
})

test('converts opaque hsla to hex6 as hex6', () => {
  expect(
    ColorHelper.toFormattedColorString(
      'hsla(219, 56%, 44%, 1)',
      ColorHelper.ColorFormat.HEX6
    )
  ).toBe('#315daf')
})

test('converts hsla to rgbi[a]', () => {
  expect(
    ColorHelper.toFormattedColorString(
      'hsla(219, 56%, 44%, 0.65)',
      ColorHelper.ColorFormat.RGBI
    )
  ).toBe('rgba(49, 93, 175, 0.65)')
})

test('converts hsla to rgbia', () => {
  expect(
    ColorHelper.toFormattedColorString(
      'hsla(219, 56%, 44%, 0.65)',
      ColorHelper.ColorFormat.RGBIA
    )
  ).toBe('rgba(49, 93, 175, 0.65)')
})

test('converts hsla to rgbp[a]', () => {
  expect(
    ColorHelper.toFormattedColorString(
      'hsla(219, 56%, 44%, 0.65)',
      ColorHelper.ColorFormat.RGBP
    )
  ).toBe('rgba(19%, 37%, 69%, 0.65)')
})

test('converts hsla to rgbpa', () => {
  expect(
    ColorHelper.toFormattedColorString(
      'hsla(219, 56%, 44%, 0.65)',
      ColorHelper.ColorFormat.RGBPA
    )
  ).toBe('rgba(19%, 37%, 69%, 0.65)')
})

test('converts rgba to hsva and back', () => {
  const expected = 'rgba(49, 93, 175, 0.65)'
  const hsv = ColorHelper.toHSV(expected)

  if (!hsv) throw new Error('hsv is null')

  expect(hsv.h).toBeCloseTo(219.05)
  expect(hsv.s).toBeCloseTo(0.72)
  expect(hsv.v).toBeCloseTo(0.69)
  expect(hsv.opacity).toBe(0.65)
  const actual = ColorHelper.hsvToColorString(hsv, ColorHelper.ColorFormat.RGBI)
  expect(actual).toBe(expected)
})

test('converts all web color names to rgb, hex, and back', () => {
  Object.keys(namedColors).forEach(key => {
    const rgb = ColorHelper.toFormattedColorString(
      key,
      ColorHelper.ColorFormat.RGBI
    )
    // There is some minor loss of bits when converting between color formats
    // We should expect repeated round-trip conversions to fail
    // const hsl = ColorHelper.toString(rgb, ColorHelper.ColorFormat.HSL)
    const hex = ColorHelper.toFormattedColorString(
      rgb,
      ColorHelper.ColorFormat.HEX6
    )
    const name = ColorHelper.toFormattedColorString(
      hex,
      ColorHelper.ColorFormat.NAME
    )
    if (key !== name) {
      // could be a duplicate name, check values
      const a = namedColors[key]
      const b = namedColors[name]
      if (a !== b) {
        expect(key).toBe(name)
      }
    }
  })
})

test('converts white variants to hsv', () => {
  const set = matches[MatchColor.white]
  const keys = Object.keys(ColorHelper.ColorFormat).filter(key =>
    isNaN(parseInt(key, 10))
  )
  keys.forEach((_, index) => {
    const formatName = ColorHelper.ColorFormat[index].toLocaleLowerCase()
    const value = set[formatName]
    if (value) {
      const hsv = ColorHelper.toHSV(value)
      if (hsv) {
        expect(hsv.h).toBeNaN()
        expect(hsv.s).toBe(0)
        expect(hsv.v).toBe(1)
        expect(hsv.opacity).toBe(1)
      }
    }
  })
})

test('converts red variants to hsv', () => {
  const set = matches[MatchColor.red]
  const keys = Object.keys(ColorHelper.ColorFormat).filter(key =>
    isNaN(parseInt(key, 10))
  )
  keys.forEach((_, index) => {
    const formatName = ColorHelper.ColorFormat[index].toLocaleLowerCase()
    const value = set[formatName]
    if (value) {
      const hsv = ColorHelper.toHSV(value)
      if (hsv) {
        expect(hsv.h).toBe(0)
        expect(hsv.s).toBe(1)
        expect(hsv.v).toBe(1)
        expect(hsv.opacity).toBe(1)
      }
    }
  })
})

test('converts green variants to hsv', () => {
  const set = matches[MatchColor.green]
  const keys = Object.keys(ColorHelper.ColorFormat).filter(key =>
    isNaN(parseInt(key, 10))
  )
  keys.forEach((_, index) => {
    const formatName = ColorHelper.ColorFormat[index].toLocaleLowerCase()
    const value = set[formatName]
    if (value) {
      const hsv = ColorHelper.toHSV(value)
      if (hsv) {
        expect(hsv.h).toBe(120)
        expect(hsv.s).toBe(1)
        expect(hsv.v).toBeCloseTo(0.5)
        expect(hsv.opacity).toBe(1)
      }
    }
  })
})

test('converts black variants to hsv', () => {
  const set = matches[MatchColor.black]
  const keys = Object.keys(ColorHelper.ColorFormat).filter(key =>
    isNaN(parseInt(key, 10))
  )
  keys.forEach((_, index) => {
    const formatName = ColorHelper.ColorFormat[index].toLocaleLowerCase()
    const value = set[formatName]
    if (value) {
      const hsv = ColorHelper.toHSV(value)
      if (hsv) {
        expect(hsv.h).toBeNaN()
        expect(hsv.s).toBeNaN()
        expect(hsv.v).toBe(0)
        expect(hsv.opacity).toBe(1)
      }
    }
  })
})

const hsvToStringTest = (matcher: MatchColor) => {
  const set = matches[matcher]
  const hsv = ColorHelper.toHSV(set.name)
  const keys = Object.keys(ColorHelper.ColorFormat).filter(key =>
    isNaN(parseInt(key, 10))
  )
  keys.forEach((key, index) => {
    const target =
      ColorHelper.ColorFormat[key as keyof typeof ColorHelper.ColorFormat]
    const formatName = ColorHelper.ColorFormat[index].toLocaleLowerCase()
    const expected = set[formatName]

    if (!hsv) throw new Error('hsv is null')

    if (expected) {
      const actual = ColorHelper.hsvToColorString(hsv, target)
      expect(actual).toBe(expected)
    }
  })
}

test('converts hsv to color string variants', () => {
  const keys = Object.keys(MatchColor).filter(key => isNaN(parseInt(key, 10)))
  keys.forEach(key => {
    const target = MatchColor[key as keyof typeof MatchColor]
    hsvToStringTest(target)
  })
})
