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

import range from 'lodash/range'
import {
  cartesian2hsv,
  generateColorWheel,
  hsv2cartesian,
  hsv2polar,
  PolarBrightness,
  polarbrightness2hsv,
  scalePBRadius,
  white,
} from './color_wheel_utils'

describe('color_wheel_utils', () => {
  describe('white', () => {
    test('that it works', () => {
      const w = white()

      expect(w.brightness).toEqual(1)
      expect(w.coord.angle).toEqual(0)
      expect(w.coord.radius).toEqual(0)
    })
  })

  describe('range', () => {
    const worksForSize = (n: number) => {
      test(`Size ${n}`, () => {
        const arr = range(n)
        expect(arr.length).toEqual(n)
      })
    }

    for (let i = 0; i < 10; i++) {
      worksForSize(i)
    }
  })

  describe('hsv2polar', () => {
    test(`HSV: 0, 0, 1`, () => {
      const coord = hsv2polar({ h: 0, s: 0, v: 1 })
      expect(coord.angle).toEqual(0)
      expect(coord.radius).toEqual(0)
    })

    test(`HSV: 90, 45, 1`, () => {
      const coord = hsv2polar({ h: 90, s: 45, v: 1 })
      expect(coord.angle).toEqual(Math.PI / 2)
      expect(coord.radius).toEqual(45)
    })

    test(`HSV: 180, 30, .4`, () => {
      const coord = hsv2polar({ h: 180, s: 30, v: 0.4 })
      expect(coord.angle).toEqual(Math.PI)
      expect(coord.radius).toEqual(30)
    })
  })

  describe('polarbrightness2hsv', () => {
    test(`PB: 0, 0, 1`, () => {
      const hsv = polarbrightness2hsv({
        brightness: 1,
        coord: { angle: 0, radius: 0 },
      })
      expect(hsv.h).toEqual(0)
      expect(hsv.s).toEqual(0)
      expect(hsv.v).toEqual(1)
    })

    test(`PB: 0, 1, 0.5`, () => {
      const hsv = polarbrightness2hsv({
        brightness: 0.5,
        coord: { angle: 0, radius: 1 },
      })
      expect(hsv.h).toEqual(0)
      expect(hsv.s).toEqual(1)
      expect(hsv.v).toEqual(0.5)
    })

    test(`PB: Math.PI/2, 1, 0.5`, () => {
      const hsv = polarbrightness2hsv({
        brightness: 0.5,
        coord: { angle: Math.PI / 2, radius: 1 },
      })
      expect(hsv.h).toEqual(90)
      expect(hsv.s).toEqual(1)
      expect(hsv.v).toEqual(0.5)
    })

    test(`PB: Math.PI, 0.3, 0.7`, () => {
      const hsv = polarbrightness2hsv({
        brightness: 0.7,
        coord: { angle: Math.PI, radius: 0.3 },
      })
      expect(hsv.h).toEqual(180)
      expect(hsv.s).toEqual(0.3)
      expect(hsv.v).toEqual(0.7)
    })
  })

  describe('scalePBRadius', () => {
    const testScale = (scale: number, pb: PolarBrightness) => {
      test(`Test polar-brightness scales by ${scale}`, () => {
        const scaled = scalePBRadius(scale, pb)
        expect(scaled.brightness).toEqual(pb.brightness)
        expect(scaled.coord.angle).toEqual(pb.coord.angle)
        expect(scaled.coord.radius).toEqual(pb.coord.radius * scale)
      })
    }

    for (let i = 1; i <= 10; i++) {
      testScale(i, { brightness: 0.7, coord: { angle: Math.PI, radius: 3 } })
    }
  })

  describe('cartesian2hsv', () => {
    const testBrightnessPassesThrough = (brightness: number) => {
      test(`Test brightness passes through: ${brightness}`, () => {
        const hsv = cartesian2hsv(brightness, 1, { x: 1, y: 1 })
        expect(hsv.v).toEqual(brightness)
      })
    }

    for (let i = 0; i <= 1; i += 0.1) {
      testBrightnessPassesThrough(i)
    }

    test('(1,1) with radius 1 and brightness of 1', () => {
      const hsv = cartesian2hsv(1, 1, { x: 1, y: 1 })
      expect(hsv.h).toEqual(0)
      expect(hsv.s).toEqual(0)
    })

    test('(5,5) with radius 1 and brightness of 0.5 will return white ', () => {
      const hsv = cartesian2hsv(1, 1, { x: 5, y: 5 })
      expect(hsv.h).toEqual(0)
      expect(hsv.s).toEqual(0)
    })

    test('(3,0) with radius 3 and brightness of 1', () => {
      const hsv = cartesian2hsv(1, 3, { x: 3, y: 4 })
      expect(hsv.h).toEqual(90)
      expect(hsv.s).toEqual(1 / 3)
    })
  })

  describe('hsv2cartesian', () => {
    test('HSV = (0,0,0)', () => {
      const coord = hsv2cartesian(5, { h: 0, s: 0, v: 0 })
      expect(coord.x).toBeCloseTo(5)
      expect(coord.y).toBeCloseTo(5)
    })

    test('HSV = (45,1,1)', () => {
      const coord = hsv2cartesian(5, { h: 45, s: 1, v: 1 })
      expect(coord.x).toBeCloseTo(8.53, 1)
      expect(coord.y).toBeCloseTo(8.53, 1)
    })

    test('HSV = (1,0,1)', () => {
      const coord = hsv2cartesian(5, { h: 90, s: 0, v: 1 })
      expect(coord.x).toBeCloseTo(5)
      expect(coord.y).toBeCloseTo(5)
    })

    test('HSV = (0,1,1)', () => {
      const coord = hsv2cartesian(5, { h: 135, s: 1, v: 1 })
      expect(coord.x).toBeCloseTo(1.46)
      expect(coord.y).toBeCloseTo(8.53, 1)
    })

    test('HSV = (90,1,1)', () => {
      const coord = hsv2cartesian(5, { h: 180, s: 0, v: 1 })
      expect(coord.x).toBeCloseTo(5)
      expect(coord.y).toBeCloseTo(5)
    })
  })

  describe('generateColorWheel', () => {
    const worksForSize = (radius: number) => {
      test(`Generating weehl with radius of size: ${radius}`, () => {
        const arr = generateColorWheel(radius, 1)
        expect(arr.length).toEqual(radius * 2)
        expect(arr[0].length).toEqual(radius * 2)
      })
    }

    for (let i = 1; i < 20; i++) {
      worksForSize(i)
    }
  })
})
