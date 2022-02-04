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
import { filterOptions } from './option_utils'

const options = [
  { label: 'Foo', value: '0' },
  { label: 'Bar', value: '1' },
  { label: 'Baz', value: '2' },
]

describe('filterOptions', () => {
  describe('when filterTerm is empty', () => {
    it('returns all options with no excludedValues', () => {
      const resultOptions = filterOptions(options, '')
      expect(resultOptions).toEqual(options)
    })

    it('returns all options with no empty excludedValues', () => {
      const resultOptions2 = filterOptions(options, '', [])
      expect(resultOptions2).toEqual(options)
    })

    it('returns all options with no matches in excludedValues', () => {
      const resultOptions3 = filterOptions(options, '', ['18'])
      expect(resultOptions3).toEqual(options)
    })
  })

  it('returns options where the label matches the term anywhere, case-insensitive', () => {
    const resultOptions = filterOptions(options, 'oo')
    expect(resultOptions).toEqual([options[0]])

    const resultOptions2 = filterOptions(options, 'ba')
    expect(resultOptions2).toEqual([options[1], options[2]])
  })

  it('returns options where the value is not in excludedValues', () => {
    const resultOptions = filterOptions(options, '', ['0'])
    expect(resultOptions).toEqual([options[1], options[2]])

    const resultOptions2 = filterOptions(options, 'ba', ['1'])
    expect(resultOptions2).toEqual([options[2]])
  })
})
