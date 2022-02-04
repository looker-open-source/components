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
import { parseFilterExpression, summary } from '../utils'

const location = [
  ['36.97, -122.03', '36.97, -122.03'],
  ['-36.97, 122.03', '-36.97, 122.03'],
  ['-36.97, -122.03', '-36.97, -122.03'],
  ['40 miles from -36.97, -122.03', '40 miles from -36.97, -122.03'],
  ['40 miles from 36.97, -122.03', '40 miles from 36.97, -122.03'],
  ['100 miles from 36.97, -122.03', '100 miles from 36.97, -122.03'],
  [
    'inside box from 72.33, -173.14 to 14.39, -61.70',
    '72.3°N, 173.1°W to 14.4°N, 61.7°W',
  ],
  ['', 'is anywhere'],
  ['NOT NULL', 'is not null'],
  ['-NULL', 'is not null'],
  ['NULL', 'is null'],
]

describe('Location grammar can parse expressions', () => {
  it.each(location)('%s', (expression, result) => {
    expect(parseFilterExpression('location', expression)).toMatchSnapshot()
    expect(summary({ type: 'location', expression })).toBe(result)
  })
})
