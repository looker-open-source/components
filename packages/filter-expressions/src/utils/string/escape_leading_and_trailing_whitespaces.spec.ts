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
import { escapeLeadingAndTrailingWhitespaces } from './escape_leading_and_trailing_whitespaces'

describe('Escape Leading and Trailing Whitespaces', () => {
  it('should return the same string if no trailing/leading spaces', () => {
    expect(escapeLeadingAndTrailingWhitespaces('something')).toBe('something')
    expect(
      escapeLeadingAndTrailingWhitespaces('something with a     space')
    ).toBe('something with a     space')
  })
  it('should escape leading spaces', () => {
    expect(escapeLeadingAndTrailingWhitespaces(' leading space here')).toBe(
      '^ leading space here'
    )
    expect(
      escapeLeadingAndTrailingWhitespaces('  double leading space here')
    ).toBe('^ ^ double leading space here')
  })
  it('should escape trailing spaces', () => {
    expect(escapeLeadingAndTrailingWhitespaces('trailing space here ')).toBe(
      'trailing space here^ ^ '
    )
    expect(
      escapeLeadingAndTrailingWhitespaces('2 trailing spaces here  ')
    ).toBe('2 trailing spaces here^ ^ ^ ')
  })
  it('should escape a leading and trailing space', () => {
    expect(escapeLeadingAndTrailingWhitespaces(' leading and trailing ')).toBe(
      '^ leading and trailing^ ^ '
    )
    expect(
      escapeLeadingAndTrailingWhitespaces('  leading and trailing  ')
    ).toBe('^ ^ leading and trailing^ ^ ^ ')
  })

  it('should not do a double escape at the end', () => {
    expect(escapeLeadingAndTrailingWhitespaces('hello there ', false)).toBe(
      'hello there^ '
    )
  })
})
