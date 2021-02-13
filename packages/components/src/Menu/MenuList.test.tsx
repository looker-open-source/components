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

import { screen } from '@testing-library/react'
import 'jest-styled-components'
import * as React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'
import { MenuList } from './MenuList'

/* eslint-disable-next-line @typescript-eslint/unbound-method */
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect

describe('MenuList', () => {
  test('allocates space for MenuItem when a sibling has an icon', () => {
    const { getByTestId } = renderWithTheme(
      <MenuList>
        <MenuItem icon="Calendar">Gouda</MenuItem>
        <MenuItem id="cheddar">Cheddar</MenuItem>
      </MenuList>
    )

    getByTestId('menu-item-cheddar-icon-placeholder')
  })

  describe('windowing', () => {
    beforeEach(() => {
      jest.useFakeTimers()
      /* eslint-disable-next-line @typescript-eslint/unbound-method */
      Element.prototype.getBoundingClientRect = jest.fn(() => {
        return {
          bottom: 0,
          height: 342,
          left: 0,
          right: 0,
          toJSON: jest.fn(),
          top: 0,
          width: 260,
          x: 0,
          y: 0,
        }
      })
    })

    afterEach(() => {
      jest.runOnlyPendingTimers()
      jest.useRealTimers()
      jest.resetAllMocks()
      /* eslint-disable-next-line @typescript-eslint/unbound-method */
      Element.prototype.getBoundingClientRect = globalGetBoundingClientRect
    })

    test('fixed', () => {
      const arr3000 = Array.from(Array(3000), (_, i) => i)
      renderWithTheme(
        <MenuList>
          {arr3000.map((num) => (
            <MenuItem key={num}>{num}</MenuItem>
          ))}
        </MenuList>
      )

      expect(screen.getByText('0')).toBeVisible()
      expect(screen.getByText('14')).toBeVisible()
      expect(screen.queryByText('15')).not.toBeInTheDocument()

      expect(screen.queryByTestId('before')).not.toBeInTheDocument()
      expect(screen.getByTestId('after')).toHaveStyle('height: 119400px;')
    })

    test('variable', () => {
      const arr200 = Array.from(Array(200), (_, i) => i)
      renderWithTheme(
        <MenuList windowing="variable">
          {arr200.map((num) => (
            <MenuGroup key={num}>
              {Array.from(Array((num + 1) % 15), (_, i) => (
                <MenuItem key={i}>{`${num}_${i}`}</MenuItem>
              ))}
            </MenuGroup>
          ))}
        </MenuList>
      )

      expect(screen.getByText('0_0')).toBeVisible()
      expect(screen.getByText('6_6')).toBeVisible()
      expect(screen.queryByText('7_0')).not.toBeInTheDocument()

      expect(screen.queryByTestId('before')).not.toBeInTheDocument()
      expect(screen.getByTestId('after')).toHaveStyle('height: 61993px;')
    })
  })
})
