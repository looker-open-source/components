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
 * valueRepresentsNumber tests a string to see if it represents a finite number value
 * We use Lodash's isFinite to check for typeof 'number' and for finiity (native JavaScript `isFinite`)
 * We use isFinite rather than isNumber because we need to guard against NaN,
 * which results when we attempt to coerce a non-numeric string
 * @param value a string that may or may not represent a number value
 */
const valueRepresentsNumber = (value: string): boolean =>
  // Coercion of value to a number is not technically necessary according to the ES6 spec for `isFinite`,
  // But TypeScript expects it, and in fact it is what you would expect the standard to be
  isFinite(Number(value))

/**
 * Escapes a tier filter expression using ^ used for parameter fields
 * Only escape the string if it does not represent a finite number
 */
export const escapeParameterValue = (value: string) =>
  valueRepresentsNumber(value) ? value : value.replace(/([\^_%,"']|^-)/g, '^$1')
