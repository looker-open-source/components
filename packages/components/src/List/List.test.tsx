/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import { ListItem } from './ListItem'
import { List } from './List'

/* eslint-disable-next-line @typescript-eslint/unbound-method */
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect

describe('List', () => {
  test('allocates space for ListItem when a sibling has an icon', () => {
    const { getByTestId } = renderWithTheme(
      <List>
        <ListItem icon="Calendar">Gouda</ListItem>
        <ListItem id="cheddar">Cheddar</ListItem>
      </List>
    )

    getByTestId('list-item-cheddar-icon-placeholder')
  })

  describe('windowing', () => {
    beforeEach(() => {
      jest.useFakeTimers()
      /* eslint-disable-next-line @typescript-eslint/unbound-method */
      Element.prototype.getBoundingClientRect = jest.fn(() => {
        return {
          bottom: 0,
          height: 360,
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
        <List>
          {arr3000.map((num) => (
            <ListItem key={num}>{num}</ListItem>
          ))}
        </List>
      )

      /**
       * We expect the first 16 elements based on the math below:
       * 6 + 360px / 36px
       * (buffer elements) + (ul height from mock / default ListItem height)
       */
      expect(screen.getByText('0')).toBeVisible()
      expect(screen.getByText('15')).toBeVisible()
      expect(screen.queryByText('16')).not.toBeInTheDocument()

      /**
       * We expect the after container to have height: 107424px based on the math below:
       * (3000 - 16) * 36px
       * (total ListItems - displayed ListItems) * default ListItem height
       */
      expect(screen.queryByTestId('before')).not.toBeInTheDocument()
      expect(screen.getByTestId('after')).toHaveStyle('height: 107424px;')
    })
  })
})
