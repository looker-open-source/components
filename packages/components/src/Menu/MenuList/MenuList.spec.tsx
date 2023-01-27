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

import { screen } from '@testing-library/react'
import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { MenuItem } from '../MenuItem'
import { MenuHeading } from '../MenuHeading'
import { MenuDivider } from '../MenuDivider'
import { MenuList } from './MenuList'

/* eslint-disable-next-line @typescript-eslint/unbound-method */
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect

describe('MenuList', () => {
  describe('windowing', () => {
    beforeEach(() => {
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
      jest.resetAllMocks()
      /* eslint-disable-next-line @typescript-eslint/unbound-method */
      Element.prototype.getBoundingClientRect = globalGetBoundingClientRect
    })

    test('windows a long list', () => {
      const arr3000 = Array.from(Array(3000), (_, i) => i)
      renderWithTheme(
        <MenuList>
          {arr3000.map(num => (
            <MenuItem key={num}>{num}</MenuItem>
          ))}
        </MenuList>
      )

      expect(screen.getByText('0')).toBeVisible()
      expect(screen.getByText('15')).toBeVisible()
      expect(screen.queryByText('16')).not.toBeInTheDocument()

      const totalItems = arr3000.length
      const windowedItems = 16
      const defaultItemHeight = 36
      const height = (totalItems - windowedItems) * defaultItemHeight
      expect(screen.queryByTestId('before')).not.toBeInTheDocument()
      expect(screen.getByTestId('after')).toHaveStyle(`height: ${height}px;`)
      // Without overflow auto, windowing won't work.
      // Testing the style here because we can't test rendered height.
      expect(screen.getByRole('menu')).toHaveStyle('overflow: auto')
    })
  })

  describe('composition', () => {
    test('renders a MenuHeading, MenuDivider and MenuItems together', () => {
      renderWithTheme(
        <MenuList>
          <MenuHeading>My Menu List</MenuHeading>
          <MenuItem>First</MenuItem>
          <MenuDivider data-testid="divider" />
          <MenuItem>Last</MenuItem>
        </MenuList>
      )

      expect(screen.getByTestId('divider')).toBeVisible()
      screen.getByText('My Menu List')
    })
  })
})
