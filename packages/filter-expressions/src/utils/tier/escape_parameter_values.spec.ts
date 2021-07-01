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
import { escapeParameterValue } from './escape_parameter_value'

describe('Tier filter values are escaped', () => {
  it('escapes starting dash', () => {
    const result = escapeParameterValue('-no label')
    expect(result).toBe('^-no label')
  })

  it('escapes sub_region', () => {
    const result = escapeParameterValue('sub_region')
    expect(result).toBe('sub^_region')
  })

  it.each([
    '1234',
    '-1234',
    '0',
  ])(
    'does not escape string representation of number: %s',
    (parameter: string) =>
      expect(escapeParameterValue(parameter)).toBe(parameter)
  )

  it.each([
    ['12a34', '12a34'],
    ['-12a34', '^-12a34'],
    ['zub_region0', 'zub^_region0'],
  ])(
    'escapes strings with numbers that do not evaluate to a finite number: %s',
    (parameter: string, value: string) =>
      expect(escapeParameterValue(parameter)).toBe(value)
  )
})
