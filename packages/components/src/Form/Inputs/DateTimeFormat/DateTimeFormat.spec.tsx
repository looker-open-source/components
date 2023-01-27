/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { render } from '@testing-library/react'
import React from 'react'
import ar from 'date-fns/locale/ar-SA'
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
