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

import { getChartGeometry } from './getChartGeometry'

describe('getChartGeometry', () => {
  describe('legend type === legend', () => {
    const legendType = 'legend'
    const width = 100
    const height = 500
    const labelWidth = 50

    test('defines a square based on the larger width or height prop', () => {
      const { canvasH, canvasW } = getChartGeometry({
        legendType,
        width,
        height,
        labelWidth,
      })
      expect(canvasW).toEqual(height)
      expect(canvasH).toEqual(height)
    })
    test('defines an appropriate pie radius and center position', () => {
      const { pieCenterX, pieCenterY, outerRadius } = getChartGeometry({
        legendType,
        width,
        height,
        labelWidth,
      })

      expect(pieCenterX).toMatchInlineSnapshot(`242.5`)
      expect(pieCenterY).toMatchInlineSnapshot(`242.5`)
      expect(outerRadius).toMatchInlineSnapshot(`227.5`)
    })
  })

  describe('legend type === labels', () => {
    const legendType = 'labels'
    const width = 100
    const height = 500
    const labelWidth = 100
    test('defines a rectangle based on the larger width or height prop minus labelWidth', () => {
      const { canvasH, canvasW } = getChartGeometry({
        legendType,
        width,
        height,
        labelWidth,
      })
      expect(canvasW).toEqual(height)
      expect(canvasH).toMatchInlineSnapshot(`363.5783396384056`)
    })
    test('defines an appropriate pie radius and center position', () => {
      const { pieCenterX, pieCenterY, outerRadius } = getChartGeometry({
        legendType,
        width,
        height,
        labelWidth,
      })

      expect(pieCenterX).toMatchInlineSnapshot(`242.5`)
      expect(pieCenterY).toMatchInlineSnapshot(`174.2891698192028`)
      expect(outerRadius).toMatchInlineSnapshot(`91.07833963840565`)
    })
  })
})
