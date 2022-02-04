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
import { i18nInit } from '../i18n'
import { getUnitLabel } from './get_unit_label'

describe('Returns a label', () => {
  beforeEach(() =>
    i18nInit().catch(e => {
      throw new Error(e)
    })
  )

  it('should return a valid plural unit label', () => {
    expect(getUnitLabel('week', 3)).toBe('weeks')
  })
  it('should return the unit if value is 1', () => {
    expect(getUnitLabel('month', 1)).toBe('month')
  })

  it('should return the unit if unit is not found', () => {
    expect(getUnitLabel('something else', 2)).toBe('something else')
  })
})
