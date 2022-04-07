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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { composeStories } from '@storybook/testing-react'
import { fireEvent, screen } from '@testing-library/react'
import * as stories from './Calendar.stories'

const { Basic } = composeStories(stories)

describe('CalendarNav', () => {
  test('expected month displayed', () => {
    renderWithTheme(<Basic />)
    const month = screen.getAllByText('Jul 2021')
    expect(month[0]).toBeInTheDocument()
    expect(month.length).toBe(2)
  })

  test('button next and previous exist', () => {
    renderWithTheme(<Basic />)
    const next = screen.getByText('next month')
    const previous = screen.getByText('previous month')
    expect(next).toBeInTheDocument()
    expect(previous).toBeInTheDocument()
  })

  test('button next changes displayed month', () => {
    renderWithTheme(<Basic />)
    const next = screen.getByText('next month')
    fireEvent.click(next)
    const nextMonth = screen.getAllByText('Aug 2021')
    expect(nextMonth[0]).toBeInTheDocument()
  })

  test('button previous changes displayed month', () => {
    renderWithTheme(<Basic />)
    const previous = screen.getByText('previous month')
    fireEvent.click(previous)
    const previousMonth = screen.getAllByText('Jun 2021')
    expect(previousMonth[0]).toBeInTheDocument()
  })
})
