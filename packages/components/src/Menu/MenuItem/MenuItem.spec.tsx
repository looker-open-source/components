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

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Science } from '@styled-icons/material-outlined'
import { act, fireEvent, screen } from '@testing-library/react'

import { MenuItem } from './MenuItem'

const globalConsole = global.console
const warnMock = jest.fn()

beforeEach(() => {
  jest.useFakeTimers()
  global.console = {
    warn: warnMock,
  } as unknown as Console
})

afterEach(() => {
  global.console = globalConsole
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

const runTimers = () =>
  act(() => {
    jest.runOnlyPendingTimers()
  })

describe('MenuItem', () => {
  test('renders', () => {
    renderWithTheme(<MenuItem>who!</MenuItem>)
    expect(screen.getByText('who!')).toBeVisible()
  })

  test('detail', () => {
    renderWithTheme(<MenuItem detail="Is an excellent question">who!</MenuItem>)
    expect(screen.getByText('Is an excellent question')).toBeVisible()
  })

  test('icon', () => {
    renderWithTheme(<MenuItem icon={<Science />}>Icon</MenuItem>)
    expect(screen.getByText('Icon')).toBeVisible()
  })

  test('artwork', () => {
    renderWithTheme(
      <MenuItem
        icon={
          <svg xmlns="http://www.w3.org/2000/svg">
            <title>SVG Title Here</title>
          </svg>
        }
      >
        Artwork
      </MenuItem>
    )
    expect(screen.getByTitle('SVG Title Here')).toBeInTheDocument()
  })

  test('disabled to be a button', () => {
    const callbackFn = jest.fn()

    renderWithTheme(
      <MenuItem
        disabled={true}
        href="https://google.com"
        onClick={callbackFn}
        target="_blank"
      >
        Item
      </MenuItem>
    )
    const item = screen.getByText('Item')
    expect(item.closest('button')).toBeInTheDocument()
  })

  test('disabled is not clickable', () => {
    const callbackFn = jest.fn()

    renderWithTheme(
      <MenuItem itemRole="button" disabled onClick={callbackFn}>
        Item
      </MenuItem>
    )

    const item = screen.getByText('Item')
    fireEvent.click(item)

    expect(callbackFn).toHaveBeenCalledTimes(0)
  })

  test('link with target="_blank" and no passed-in rel prop value uses rel="noopener noreferrer"', () => {
    renderWithTheme(
      <MenuItem itemRole="link" href="https://google.com" target="_blank">
        Link
      </MenuItem>
    )

    const item = screen.getByRole('menuitem')

    expect(item.nodeName).toBe('A')
    expect(item).toHaveAttribute('target', '_blank')
    expect(item).toHaveAttribute('href', 'https://google.com')
    expect(item).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('link with target="_blank" and passed-in rel prop value auto appends "noopener noreferrer" to rel prop value', () => {
    renderWithTheme(
      <MenuItem
        itemRole="link"
        href="https://google.com"
        rel="nogouda"
        target="_blank"
      >
        Link
      </MenuItem>
    )

    const item = screen.getByRole('menuitem')

    expect(item.nodeName).toBe('A')
    expect(item).toHaveAttribute('target', '_blank')
    expect(item).toHaveAttribute('href', 'https://google.com')
    expect(item).toHaveAttribute('rel', 'nogouda noopener noreferrer')
  })

  test('link without target="_blank" does not auto append "noopener noreferrer"', () => {
    renderWithTheme(
      <MenuItem itemRole="link" rel="nogouda" href="https://google.com">
        Link
      </MenuItem>
    )

    const item = screen.getByRole('menuitem')

    expect(item.nodeName).toBe('A')
    expect(item).toHaveAttribute('href', 'https://google.com')
    expect(item).toHaveAttribute('rel', 'nogouda')
  })

  test('warns on nested menu item w/ detail', () => {
    const warnMock = jest.fn()

    global.console = {
      warn: warnMock,
    } as unknown as Console

    renderWithTheme(
      <MenuItem detail="Something" nestedMenu>
        Nested Menu
      </MenuItem>
    )
    expect(warnMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "The detail prop is not supported when nestedMenu is used.",
        ],
        Array [
          "The detail prop is not supported when nestedMenu is used.",
        ],
      ]
    `)
  })
  describe('ripple effect', () => {
    test('default', () => {
      renderWithTheme(<MenuItem>Menu Item</MenuItem>)

      const menu = screen.getByText('Menu Item').closest('button')
      expect(menu).not.toHaveClass('bg-on fg-in')
      expect(menu).toHaveStyle({
        '--ripple-color': '#71767a',
        '--ripple-scale-end': '1',
        '--ripple-scale-start': '0.1',
        '--ripple-size': '100%',
        '--ripple-translate': '0, 0',
      })

      menu && fireEvent.focus(menu)
      expect(menu).toHaveClass('bg-on')

      menu && fireEvent.mouseDown(menu)
      expect(menu).toHaveClass('bg-on fg-in')

      // foreground is locked for a minimum time to animate the ripple
      menu && fireEvent.mouseUp(menu)
      runTimers()
      expect(menu).toHaveClass('bg-on fg-out')
      runTimers()
      expect(menu).toHaveClass('bg-on')

      menu && fireEvent.blur(menu)
      expect(menu).not.toHaveClass('bg-on fg-in')
      fireEvent.click(document)
    })
  })
})
