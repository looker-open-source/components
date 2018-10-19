import {
  generateColorWheel,
  hsv2polar,
  mappableArray,
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

  describe('mappableArray', () => {
    const worksForSize = (n: number) => {
      test(`Size ${n}`, () => {
        const arr = mappableArray(n)
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
