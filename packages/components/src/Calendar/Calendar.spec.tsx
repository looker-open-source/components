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
import { act, fireEvent, screen } from '@testing-library/react'
import * as stories from './Calendar.stories'

const { Basic, Range } = composeStories(stories)

beforeEach(() => {
  jest.useFakeTimers()
})
afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})
const runTimers = () =>
  act(() => {
    jest.runOnlyPendingTimers()
  })

describe('Calendar', () => {
  test('ripple', () => {
    renderWithTheme(<Basic />)

    const calendar = screen.getAllByText('1')[0].closest('button')
    expect(calendar).not.toHaveClass('bg-on fg-in')
    expect(calendar).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      // This should change to 0.1 when brandAnimation default becomes true
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0',
    })

    calendar && fireEvent.focus(calendar)
    expect(calendar).toHaveClass('bg-on')

    calendar && fireEvent.mouseDown(calendar)
    expect(calendar).toHaveClass('bg-on fg-in')

    // foreground is locked for a minimum time to animate the ripple
    calendar && fireEvent.mouseUp(calendar)
    runTimers()
    expect(calendar).toHaveClass('bg-on fg-out')
    runTimers()
    expect(calendar).toHaveClass('bg-on')

    calendar && fireEvent.blur(calendar)
    expect(calendar).not.toHaveClass('bg-on fg-in')
  })
  describe('Range selection', () => {
    test('select start and end', () => {
      const onSelectRangeMock = jest.fn()
      renderWithTheme(
        <Range
          viewMonth={new Date('January 12, 2022')}
          onSelectRange={onSelectRangeMock}
        />
      )
      // 3 months fully rendered – current month, 1 before, 1 after
      const start = screen.getAllByText('8')[1]
      const end = screen.getAllByText('23')[1]
      fireEvent.click(start)
      fireEvent.click(end)
      expect(start).toHaveAttribute('aria-selected', 'true')
      expect(end).toHaveAttribute('aria-selected', 'true')
      expect(onSelectRangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "from": 2022-01-08T08:00:00.000Z,
          },
        ],
        Array [
          Object {
            "from": 2022-01-08T08:00:00.000Z,
            "to": 2022-01-23T08:00:00.000Z,
          },
        ],
      ]
    `)
    })

    test('range spanning multiple months', () => {
      renderWithTheme(<Range viewMonth={new Date('February 12, 2022')} />)
      const start = screen.getAllByText('8')[0]
      const end = screen.getAllByText('23')[1]
      fireEvent.click(start)
      fireEvent.click(end)
      // Title has range background style
      expect(screen.getAllByText('Feb 2022')[1]).toHaveStyle(
        'background: rgb(232, 229, 255)'
      )
    })
  })
})
