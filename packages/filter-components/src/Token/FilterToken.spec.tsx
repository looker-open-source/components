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
import { composeStories } from '@storybook/testing-react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { i18nInit } from '../utils'
import * as stories from './FilterToken.stories'
const { Basic, Expression, Error, Inline } = composeStories(stories)

describe('FilterToken', () => {
  i18nInit()
  it('shows the filter summary', () => {
    renderWithTheme(<Expression />)
    const token = screen.getByRole('button')
    expect(token).toHaveTextContent('is foo or bar')
  })

  it('opens a popover with filter UI', () => {
    renderWithTheme(<Basic />)
    const token = screen.getByRole('button', { name: 'is any time' })
    fireEvent.click(token)
    // the popover
    expect(screen.getByRole('dialog')).toBeVisible()
    // the filter dropdown
    expect(screen.getByDisplayValue('is any time')).toBeVisible()

    fireEvent.click(document)
  })

  it('shows error validation', () => {
    renderWithTheme(<Error />)
    const token = screen.getByRole('button', { name: 'Value required' })
    fireEvent.click(token)
    expect(screen.getByDisplayValue('is any time')).toBeInvalid()
    expect(screen.getByText('Selection required')).toBeVisible()

    fireEvent.click(document)
  })

  it('renders filter UI inline', () => {
    renderWithTheme(<Inline />)
    expect(screen.getByDisplayValue('is any time')).toBeVisible()
  })
})
