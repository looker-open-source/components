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

import { getWindowedListBoundaries } from './getWindowedListBoundaries'

describe('getWindowedListBoundaries', () => {
  test('returns entire length if enabled is false', () => {
    const result = getWindowedListBoundaries({
      containerHeight: 446,
      containerScrollPosition: 0,
      enabled: false,
      itemHeight: 57,
      length: 129,
    })

    expect(result.start).toEqual(0)
    expect(result.end).toEqual(128)
  })

  test('returns 0 0 if containerHeight and containerScrollPosition are missing', () => {
    const result = getWindowedListBoundaries({
      itemHeight: 31,
      length: 98,
    })

    expect(result.start).toEqual(0)
    expect(result.end).toEqual(0)
  })

  test('top of list', () => {
    const result = getWindowedListBoundaries({
      containerHeight: 1002,
      containerScrollPosition: 0,
      itemHeight: 16,
      length: 873,
    })

    expect(result.start).toEqual(0)
    expect(result.end).toEqual(68)
  })

  test('middle of list', () => {
    const result = getWindowedListBoundaries({
      containerHeight: 775,
      containerScrollPosition: 922,
      itemHeight: 26,
      length: 1109,
    })

    expect(result.start).toEqual(30)
    expect(result.end).toEqual(71)
  })

  test('end of list', () => {
    const result = getWindowedListBoundaries({
      containerHeight: 300,
      containerScrollPosition: 1200,
      itemHeight: 30,
      length: 50,
    })

    expect(result.start).toEqual(35)
    expect(result.end).toEqual(49)
  })

  test('top of list (custom buffer)', () => {
    const result = getWindowedListBoundaries({
      buffer: 11,
      containerHeight: 1002,
      containerScrollPosition: 0,
      itemHeight: 16,
      length: 873,
    })

    expect(result.start).toEqual(0)
    expect(result.end).toEqual(74)
  })

  test('middle of list (custom buffer)', () => {
    const result = getWindowedListBoundaries({
      buffer: 11,
      containerHeight: 775,
      containerScrollPosition: 922,
      itemHeight: 26,
      length: 1109,
    })

    expect(result.start).toEqual(24)
    expect(result.end).toEqual(77)
  })

  test('end of list (custom buffer)', () => {
    const result = getWindowedListBoundaries({
      buffer: 11,
      containerHeight: 300,
      containerScrollPosition: 1200,
      itemHeight: 30,
      length: 50,
    })

    expect(result.start).toEqual(29)
    expect(result.end).toEqual(49)
  })
})
