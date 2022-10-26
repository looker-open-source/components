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
import { isScrollable } from './useOptionScroll'

describe('isScrollable', () => {
  test.each`
    rootScrollHeight | rootClientHeight | expected
    ${300}           | ${200}           | ${true}
    ${200}           | ${200}           | ${false}
    ${0}             | ${0}             | ${false}
  `(
    `scrollable=$expected`,
    ({ rootScrollHeight, rootClientHeight, expected }) => {
      const grandParent = {
        clientHeight: rootClientHeight,
        parentElement: null,
        scrollHeight: rootScrollHeight,
      }
      const parent = {
        clientHeight: 200,
        parentElement: grandParent,
        scrollHeight: 200,
      }
      const child = {
        clientHeight: 100,
        parentElement: parent,
        scrollHeight: 100,
      }
      expect(isScrollable((child as unknown) as HTMLElement)).toEqual(expected)
    }
  )
})
