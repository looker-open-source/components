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

/**
 * This function is escapes leading and trailing spaces with a caret for the
 * given string. Trailing spaces are doubly escaped.
 *
 * Double escape param is true when the filter type is matches, but false for "like" filters
 * as they
 */
export const escapeLeadingAndTrailingWhitespaces = (
  value: string,
  doubleEscapeLastEscapedTrailingSpace = true
) => {
  // the following regex escapes leading and trailing spaces only
  // (leaving other spaces, such as between two letters, as they are)
  let str = value.replace(
    /^([ ]*)(.*?)([ ]*)$/g,
    (_: string, g1?: string, g2?: string, g3?: string) => {
      const leading = g1 ? g1.replace(/[ ]/g, '^ ') : ''
      const content = g2 || ''
      const trailing = g3 ? g3.replace(/[ ]/g, '^ ') : ''
      return leading + content + trailing
    }
  )

  // we add a "^ "" at the end of the string to ensure the right-most escaped space is
  // not trimmed, most notably when the clause is "ends with" or "!ends with".
  // The thing is that the ending "^ " is disregarded by the server because of an "rstrip"
  // don't add the extra space when the given string includes a quote (single or double),
  // the server side rstrip does not apply in that case
  if (
    str.endsWith('^ ') &&
    !str.includes("'") &&
    !str.includes('"') &&
    doubleEscapeLastEscapedTrailingSpace
  ) {
    str += '^ '
  }
  return str
}
