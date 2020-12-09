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

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { ChildHeightFunction, useWindow, useToggle } from './'

/* eslint-disable-next-line @typescript-eslint/unbound-method */
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect

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

const arr3000 = Array.from(Array(3000), (_, i) => i)
const getChildHeight: ChildHeightFunction = (_, index) => 20 + (index % 200)

const WindowedComponent = ({
  children,
  variable,
}: {
  children: JSX.Element[]
  variable?: boolean
}) => {
  const { value, toggle } = useToggle(true)
  const { content, ref } = useWindow({
    childHeight: variable ? getChildHeight : 87,
    children,
    enabled: value,
    spacerTag: 'li',
  })
  return (
    <>
      <ul ref={ref} data-testid="list">
        {content}
      </ul>
      <button onClick={toggle}>toggle</button>
    </>
  )
}

describe('useWindow', () => {
  describe('fixed', () => {
    test('returns placeholders and children in "window"', () => {
      render(
        <WindowedComponent>
          {arr3000.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </WindowedComponent>
      )
      expect(screen.getByText('0')).toBeVisible()
      expect(screen.getByText('9')).toBeVisible()
      expect(screen.queryByText('10')).not.toBeInTheDocument()

      expect(screen.queryByTestId('before')).not.toBeInTheDocument()
      expect(screen.getByTestId('after')).toHaveStyle('height: 260130px;')
    })

    test('updates window on scroll', () => {
      render(
        <WindowedComponent>
          {arr3000.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </WindowedComponent>
      )
      const list = screen.getByTestId('list')
      // fireEvent.scroll won't update the scrollTop value, need to change it manually
      Object.defineProperty(list, 'scrollTop', { value: 1514, writable: true })
      // Needed do to throttle on scroll handler
      jest.runAllTimers()
      fireEvent.scroll(list)

      expect(screen.queryByText('11')).not.toBeInTheDocument()
      expect(screen.getByText('12')).toBeVisible()
      expect(screen.getByText('27')).toBeVisible()
      expect(screen.queryByText('28')).not.toBeInTheDocument()

      expect(screen.getByTestId('before')).toHaveStyle('height: 1044px;')
      expect(screen.getByTestId('after')).toHaveStyle('height: 258564px;')
    })

    test('updates window on scroll (to end)', () => {
      render(
        <WindowedComponent>
          {arr3000.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </WindowedComponent>
      )
      const list = screen.getByTestId('list')
      // fireEvent.scroll won't update the scrollTop value, need to change it manually
      Object.defineProperty(list, 'scrollTop', {
        value: 260658,
        writable: true,
      })
      // Needed do to throttle on scroll handler
      jest.runAllTimers()
      fireEvent.scroll(list)

      expect(screen.queryByText('2990')).not.toBeInTheDocument()
      expect(screen.getByText('2991')).toBeVisible()
      expect(screen.getByText('2999')).toBeVisible()

      expect(screen.getByTestId('before')).toHaveStyle('height: 260217px;')
      expect(screen.queryByTestId('after')).not.toBeInTheDocument()
    })

    test('updates window on resize', () => {
      render(
        <WindowedComponent>
          {arr3000.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </WindowedComponent>
      )
      /* eslint-disable-next-line @typescript-eslint/unbound-method */
      Element.prototype.getBoundingClientRect = jest.fn(() => {
        return {
          bottom: 0,
          height: 873,
          left: 0,
          right: 0,
          toJSON: jest.fn(),
          top: 0,
          width: 260,
          x: 0,
          y: 0,
        }
      })
      fireEvent(window, new Event('resize'))

      expect(screen.getByText('0')).toBeVisible()
      expect(screen.getByText('16')).toBeVisible()
      expect(screen.queryByText('17')).not.toBeInTheDocument()

      expect(screen.queryByTestId('before')).not.toBeInTheDocument()
      expect(screen.getByTestId('after')).toHaveStyle('height: 259521px;')
    })
  })

  describe('variable', () => {
    test('returns placeholders and children in "window"', () => {
      render(
        <WindowedComponent variable>
          {arr3000.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </WindowedComponent>
      )
      expect(screen.getByText('0')).toBeVisible()
      expect(screen.getByText('35')).toBeVisible()
      expect(screen.queryByText('36')).not.toBeInTheDocument()

      expect(screen.queryByTestId('before')).not.toBeInTheDocument()
      expect(screen.getByTestId('after')).toHaveStyle('height: 357150px;')
    })

    test('updates window on scroll', () => {
      render(
        <WindowedComponent variable>
          {arr3000.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </WindowedComponent>
      )
      const list = screen.getByTestId('list')
      // fireEvent.scroll won't update the scrollTop value, need to change it manually
      Object.defineProperty(list, 'scrollTop', { value: 1514, writable: true })
      // Needed do to throttle on scroll handler
      jest.runAllTimers()
      fireEvent.scroll(list)

      expect(screen.queryByText('17')).not.toBeInTheDocument()
      expect(screen.getByText('18')).toBeVisible()
      expect(screen.getByText('58')).toBeVisible()
      expect(screen.queryByText('59')).not.toBeInTheDocument()

      expect(screen.getByTestId('before')).toHaveStyle('height: 513px;')
      expect(screen.getByTestId('after')).toHaveStyle('height: 355609px;')
    })

    test('updates window on scroll (to end)', () => {
      render(
        <WindowedComponent variable>
          {arr3000.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </WindowedComponent>
      )
      const list = screen.getByTestId('list')
      // fireEvent.scroll won't update the scrollTop value, need to change it manually
      Object.defineProperty(list, 'scrollTop', {
        value: 358158,
        writable: true,
      })
      // Needed do to throttle on scroll handler
      jest.runAllTimers()
      fireEvent.scroll(list)

      expect(screen.queryByText('2992')).not.toBeInTheDocument()
      expect(screen.getByText('2993')).toBeVisible()
      expect(screen.getByText('2999')).toBeVisible()

      expect(screen.getByTestId('before')).toHaveStyle('height: 356988px;')
      expect(screen.queryByTestId('after')).not.toBeInTheDocument()
    })

    test('updates window on resize', () => {
      render(
        <WindowedComponent variable>
          {arr3000.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </WindowedComponent>
      )
      /* eslint-disable-next-line @typescript-eslint/unbound-method */
      Element.prototype.getBoundingClientRect = jest.fn(() => {
        return {
          bottom: 0,
          height: 873,
          left: 0,
          right: 0,
          toJSON: jest.fn(),
          top: 0,
          width: 260,
          x: 0,
          y: 0,
        }
      })
      fireEvent(window, new Event('resize'))

      expect(screen.getByText('0')).toBeVisible()
      expect(screen.getByText('44')).toBeVisible()
      expect(screen.queryByText('45')).not.toBeInTheDocument()

      expect(screen.queryByTestId('before')).not.toBeInTheDocument()
      expect(screen.getByTestId('after')).toHaveStyle('height: 356610px;')
    })
  })
})
