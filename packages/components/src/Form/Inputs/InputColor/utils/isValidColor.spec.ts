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

import range from 'lodash/range'
import { isValidColor } from './isValidColor'

describe('isValidColor', () => {
  const testColor = (pred: boolean) => (color: string) => {
    test(`${color}`, () => {
      expect(isValidColor(color)).toBe(pred)
    })
  }

  const rand = (num: number) => Math.floor(Math.random() * num)
  const randChar = (str: string) => str[rand(str.length)]
  const randString = (chars: string, size: number) =>
    '#'.concat(
      range(size)
        .map(() => randChar(chars))
        .join('')
    )

  describe('Valid CSS word colors', () => {
    ;[
      'red',
      'green',
      'papayawhip',
      'white',
      'aqua',
      'ivory',
      'cadetblue',
      'thistle',
      'yellow',
      'olive',
      'snow',
    ].forEach(testColor(true))
  })

  describe('Invalid CSS word colors', () => {
    ;[
      'Lipstickred',
      'applegreen',
      'papayawhipsmoothie',
      'offwhite',
      'aquaman',
      'ivorytower',
      'armygreen',
      'thistleandweeds',
      'yellowbanana',
      'oliveoil',
      'snowwhite',
    ].forEach(testColor(false))
  })

  describe('Valid 3 string RGB colors', () => {
    range(20)
      .map(() => randString('0123456789ABCDEF', 3))
      .map(testColor(true))
  })

  describe('Invalid 3 string RGB colors', () => {
    range(20)
      .map(() => randString('GHIJKLMNOPpo_+!&^%$', 3))
      .map(testColor(false))
  })

  describe('Valid 6 string RGB colors', () => {
    range(20)
      .map(() => randString('0123456789ABCDEF', 6))
      .map(testColor(true))
  })

  describe('Invalid 6 string RGB colors', () => {
    range(20)
      .map(() => randString('GHIJKLMNOPpo_+!&^%$', 6))
      .map(testColor(false))
  })
})
