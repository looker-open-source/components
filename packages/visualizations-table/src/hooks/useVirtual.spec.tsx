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
import type { FC } from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { render, screen } from '@testing-library/react'
import { useVirtual } from './useVirtual'

const wrapper: FC = ({ children }) => <>{children}</>

const mockDomRect = {
  x: 146,
  y: 50,
  width: 440,
  height: 50,
  top: 50,
  right: 586,
  bottom: 290,
  left: 146,
  toJSON: () => ({}),
}

it('Configures virtual scrolling object', () => {
  const { result } = renderHook(
    () =>
      useVirtual({
        data: Array(15).fill({}),
        scrollContainer: {
          current: ({
            addEventListener: () => null,
            removeEventListener: () => null,
            getBoundingClientRect: () => mockDomRect,
          } as unknown) as HTMLDivElement,
        },
      }),
    {
      wrapper,
    }
  )

  expect(result.current.virtualRows.length).toEqual(15)
})

it('Simulates scroll height with OffsetBottom component', () => {
  const { result } = renderHook(
    () =>
      useVirtual({
        data: Array(30).fill({}),
        scrollContainer: {
          current: ({
            addEventListener: () => null,
            removeEventListener: () => null,
            getBoundingClientRect: () => mockDomRect,
          } as unknown) as HTMLDivElement,
        },
      }),
    {
      wrapper,
    }
  )

  const { OffsetBottom } = result.current

  const MockTableComponent = () => (
    <table>
      <tbody>
        <OffsetBottom />
      </tbody>
    </table>
  )

  render(<MockTableComponent />)

  const spacer = screen.getByRole('cell')
  expect(spacer).toHaveStyle({ height: '150px' })
})

it('Simulates scroll height with OffsetTop component', () => {
  const { result } = renderHook(
    () =>
      useVirtual({
        data: Array(30).fill({}),
        scrollContainer: {
          current: ({
            addEventListener: () => null,
            removeEventListener: () => null,
            getBoundingClientRect: () => mockDomRect,
          } as unknown) as HTMLDivElement,
        },
      }),
    {
      wrapper,
    }
  )

  const { OffsetTop } = result.current

  const MockTableComponent = () => (
    <table>
      <tbody>
        <OffsetTop />
      </tbody>
    </table>
  )

  render(<MockTableComponent />)

  const spacer = screen.getByRole('cell')
  expect(spacer).toHaveStyle({ height: '120px' })
})
