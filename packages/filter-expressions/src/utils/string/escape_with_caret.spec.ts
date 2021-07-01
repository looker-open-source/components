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
import { escapeWithCaret } from './escape_with_caret'

describe('Escape With Caret', () => {
  describe('when the string contains any special characters', () => {
    it('returns the same string with special characters escaped with a caret', () => {
      expect(escapeWithCaret('something^')).toBe('something^^')
      expect(escapeWithCaret('something_')).toBe('something^_')
      expect(escapeWithCaret('something%')).toBe('something^%')
    })
  })

  describe('when the string does not contain any special characters', () => {
    it('returns the same string', () => {
      expect(escapeWithCaret('some-thing,.')).toBe('some-thing,.')
    })
  })
})
