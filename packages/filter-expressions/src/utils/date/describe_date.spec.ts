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
import type { GrammarTestItem } from '../../grammars'
import { dateExpressionTestItems } from '../../grammars'
import type { FilterModel } from '../../types'
import { i18nInit } from '../i18n'
import { summary } from '../summary/summary'
import { describeDate } from './describe_date'

describe('Summary', () => {
  beforeEach(() =>
    i18nInit().catch(e => {
      throw new Error(e)
    })
  )

  dateExpressionTestItems.forEach((testItem: GrammarTestItem) => {
    const { expression, describe } = testItem

    it('works for date expression ' + expression, () => {
      const description = summary({ type: 'date', expression })
      expect(description).toBe(describe)
    })
  })

  it('is empty for an undefined value', () => {
    const item: FilterModel = { id: '0', is: true, type: 'other' }
    const description = describeDate(item)
    expect(description).toBe('')
  })

  it('should not add time into description for "on date" filter without time', () => {
    const date = { day: 4, month: 11, year: 2017 }
    const item: FilterModel = { date, id: '0', is: true, type: 'on' }
    const description = describeDate(item, 'date_time')
    expect(description).toBe('is on 2017/11/04')
  })
})
