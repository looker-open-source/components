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
import { act, fireEvent, screen } from '@testing-library/react'
import { Box2 } from '../Layout/Box2'
import { Truncate } from './Truncate'

const longLabel = 'This is a long label that should trigger truncation'

describe('Truncate', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  const runTimers = () =>
    act(() => {
      jest.runOnlyPendingTimers()
    })

  test('Basic', () => {
    renderWithTheme(<Truncate>Hello world</Truncate>)
    const trigger = screen.getByText('Hello world')
    fireEvent.mouseOver(trigger)

    runTimers()
    const tooltip = screen.getAllByText('Hello world')
    expect(tooltip.length).toEqual(1)
  })

  /**
   * JSDom doesn't replicate browser enough to trigger a measurable overflow
   * event.
   *
   * Need to figure out a clever way to trigger overflow so test can prove
   * the tooltip is enabled in overflow scenario
   */
  xtest('Truncate active', () => {
    renderWithTheme(
      <Box2 width="5rem">
        <Truncate>{longLabel}</Truncate>
      </Box2>
    )

    const trigger = screen.getAllByText(longLabel)[0]
    fireEvent.mouseOver(trigger)

    runTimers()
    const tooltip = screen.getAllByText(longLabel)[1]
    expect(tooltip).toBeVisible()

    fireEvent.mouseOut(tooltip)
    runTimers()
    expect(tooltip).not.toBeInTheDocument()
  })

  test('Truncate detail', () => {
    renderWithTheme(
      <Truncate description="description text">Hello World</Truncate>
    )

    const trigger = screen.getByText('Hello World')
    fireEvent.mouseOver(trigger)

    runTimers()
    const tooltip = screen.getByText('description text')
    expect(tooltip).toBeVisible()

    fireEvent.mouseOut(tooltip)
    runTimers()
    expect(tooltip).not.toBeInTheDocument()
  })
})
