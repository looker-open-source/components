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
import { getFilterTokenItem } from './get_filter_token_item'
import { parseFilterExpression } from '@looker/filter-expressions'

describe('get_filter_token_item', () => {
  describe('gets number item', () => {
    const type = 'number'
    it('works for slider', () => {
      const ast = parseFilterExpression(type, '[35,60]')
      const item = getFilterTokenItem(ast, type, 'slider')
      expect(item.type).toEqual('=')
      expect(item.value).toStrictEqual([35])
    })
    it('works for range', () => {
      const ast = parseFilterExpression(type, '35')
      const item = getFilterTokenItem(ast, type, 'range_slider')
      expect(item.type).toEqual('between')
      expect(item.low).toBe(35)
      expect(item.high).toBe(35)
    })
  })

  describe('gets a date item', () => {
    const type = 'date'

    beforeEach(() => {
      const defaultDate = new Date('2019-03-10T00:00:00.000-08:00')
      jest.spyOn(Date, 'now').mockImplementation(() => defaultDate.getTime())
    })

    it('works for day_picker', () => {
      const ast = parseFilterExpression(type, '2019/03/03 to 2019/03/07')
      const item = getFilterTokenItem(ast, type, 'day_picker')
      expect(item.type).toEqual('on')
      expect(item.date).toMatchInlineSnapshot(`
        Object {
          "day": 10,
          "month": 3,
          "year": 2019,
        }
      `)
    })
    it('works for day_range_picker', () => {
      const ast = parseFilterExpression(type, '2019/03/03')
      const item = getFilterTokenItem(ast, type, 'day_range_picker')
      expect(item.type).toEqual('range')
      expect(item.start).toMatchInlineSnapshot(`
        Object {
          "day": "03",
          "month": "03",
          "year": "2019",
        }
      `)
      expect(item.end).toMatchInlineSnapshot(
        { day: 11, hour: 0, minute: 0, month: 3, second: 0, year: 2019 },
        `
        Object {
          "day": 11,
          "hour": 0,
          "minute": 0,
          "month": 3,
          "second": 0,
          "year": 2019,
        }
      `
      )
    })

    it('works for relative_timeframes for a day value', () => {
      const ast = parseFilterExpression(type, '2019/03/03')
      const item = getFilterTokenItem(ast, type, 'relative_timeframes')
      expect(item.type).toEqual('range')
      expect(item.start).toMatchInlineSnapshot(`
        Object {
          "day": "03",
          "month": "03",
          "year": "2019",
        }
      `)
      expect(item.end).toMatchInlineSnapshot(
        { day: 11, hour: 0, minute: 0, month: 3, second: 0, year: 2019 },
        `
        Object {
          "day": 11,
          "hour": 0,
          "minute": 0,
          "month": 3,
          "second": 0,
          "year": 2019,
        }
      `
      )
    })

    it('works for relative_timeframes when provided a relative timeframes value', () => {
      const ast = parseFilterExpression(type, '14 day')
      const item = getFilterTokenItem(ast, type, 'relative_timeframes')
      expect(item.type).toEqual('past')
      expect(item.unit).toEqual('day')
      expect(item.value).toEqual(14)
    })

    it('works for relative_timeframes when provided a non relative timeframes value', () => {
      const ast = parseFilterExpression(type, '2018,2019')
      const item = getFilterTokenItem(ast, type, 'relative_timeframes')
      expect(item.type).toEqual('past')
      expect(item.unit).toEqual('day')
      expect(item.value).toEqual(7)
    })
  })
})
