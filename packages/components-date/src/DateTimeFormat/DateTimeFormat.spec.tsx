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

import { render } from '@testing-library/react'
import React from 'react'
import ar from 'date-fns/locale/ar-SA'
import { Locales } from '../locale/deprecated'
import { DateTimeFormat } from './DateTimeFormat'
const date = new Date('January 25, 1988 11:58:03')

describe('DateTimeFormat', () => {
  test('renders', () => {
    const { container } = render(<DateTimeFormat>{date}</DateTimeFormat>)
    expect(container).toMatchInlineSnapshot(`
      <div>
        Jan 25, 1988, 11:58:03 AM
      </div>
    `)
  })

  test('specific locale', () => {
    const { container } = render(
      <DateTimeFormat locale={ar}>{date}</DateTimeFormat>
    )
    expect(container).toMatchInlineSnapshot(`
      <div>
        ينا 25, 1988, 11:58:03 ص
      </div>
    `)
  })

  test('specific locale (deprecated)', () => {
    const { container } = render(
      <DateTimeFormat locale={Locales.Arabic}>{date}</DateTimeFormat>
    )
    expect(container).toMatchInlineSnapshot(`
      <div>
        ينا 25, 1988, 11:58:03 ص
      </div>
    `)
  })

  test('displays timeZone prop if one is passed', () => {
    const { container } = render(
      <DateTimeFormat timeZone="Asia/Kolkata">{date}</DateTimeFormat>
    )
    expect(container).toMatchInlineSnapshot(`
      <div>
        Jan 26, 1988, 1:28:03 AM GMT+5:30
      </div>
    `)
  })

  test('format prop short if one is passed', () => {
    const { container } = render(
      <DateTimeFormat format="short">{date}</DateTimeFormat>
    )
    expect(container).toMatchInlineSnapshot(`
      <div>
        01/25/1988, 11:58 AM
      </div>
    `)
  })

  test('format prop long if one is passed', () => {
    const { container } = render(
      <DateTimeFormat format="long">{date}</DateTimeFormat>
    )
    expect(container).toMatchInlineSnapshot(`
      <div>
        January 25th, 1988 at 11:58:03 AM GMT-8
      </div>
    `)
  })

  test('format prop full if one is passed', () => {
    const { container } = render(
      <DateTimeFormat format="full">{date}</DateTimeFormat>
    )
    expect(container).toMatchInlineSnapshot(`
      <div>
        Monday, January 25th, 1988 at 11:58:03 AM GMT-08:00
      </div>
    `)
  })
})
