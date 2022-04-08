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
import en from 'date-fns/locale/en-US'
import ko from 'date-fns/locale/ko'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import type { MonthTitleProps } from './MonthTitle'
import { MonthTitle } from './MonthTitle'

describe('MonthTitle', () => {
  const defaultProps: MonthTitleProps = {
    inline: false,
    locale: en,
    month: new Date('July 1, 2021'),
    rangeType: 'draft',
  }

  test('above 1st week', () => {
    renderWithTheme(
      <MonthTitle {...defaultProps} month={new Date('Jan 12, 2022')} />
    )
    const title = screen.getByText('Jan 2022')
    expect(title).toHaveStyle('margin-bottom: 0.125rem')
  })

  test('inline with 1st week', () => {
    renderWithTheme(<MonthTitle {...defaultProps} inline />)
    const title = screen.getByText('Jul 2021')
    expect(title).toHaveStyle('margin-bottom: -2rem')
  })

  test('localization', () => {
    renderWithTheme(<MonthTitle {...defaultProps} locale={ko} />)
    expect(screen.getByText('7월 2021')).toBeVisible()
  })
})
