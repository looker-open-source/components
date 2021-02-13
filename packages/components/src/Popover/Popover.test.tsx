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

import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import 'jest-styled-components'
import React, { useRef } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Button } from '../Button'
import { Popover } from './Popover'

const SimpleContent = <div>simple content</div>

describe('Popover', () => {
  afterEach(() => {
    const root = document.getElementById('modal-root')
    if (root) {
      // remove modalRoot after every test so the DOCUMENT_POSITION_FOLLOWING check
      // won't misleadingly fail since render adds the output to the end of the body
      document.body.removeChild(root)
    }
  })

  test('cloneElement style opens and closes', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Popover content={SimpleContent}>
        <button>Test</button>
      </Popover>
    )

    // Verify hidden
    expect(queryByText('simple content')).not.toBeInTheDocument()

    const trigger = getByText('Test')
    fireEvent.click(trigger)

    // Find content
    expect(getByText('simple content')).toBeInTheDocument()

    fireEvent.click(trigger)
    expect(queryByText('simple content')).not.toBeInTheDocument()
  })

  test('renderProps style expanded opens and closes', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Popover content={SimpleContent}>
        {(popoverProps) => <button {...popoverProps}>Test</button>}
      </Popover>
    )

    // Verify hidden
    expect(queryByText('simple content')).not.toBeInTheDocument()

    const trigger = getByText('Test')
    fireEvent.click(trigger)

    // Find content
    expect(getByText('simple content')).toBeInTheDocument()

    fireEvent.click(trigger)
    expect(queryByText('simple content')).not.toBeInTheDocument()
  })

  test('cloneElement style opens and closes', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Popover content={SimpleContent}>
        <button>Test</button>
      </Popover>
    )

    // Verify hidden
    expect(queryByText('simple content')).not.toBeInTheDocument()

    const trigger = getByText('Test')
    fireEvent.click(trigger)

    // Find content
    expect(getByText('simple content')).toBeInTheDocument()

    fireEvent.click(trigger)
    expect(queryByText('simple content')).not.toBeInTheDocument()
  })

  test('stopPropagation works - event on container is not called', () => {
    const mockContainerOnClick = jest.fn()

    const { getByText } = renderWithTheme(
      <div onClick={mockContainerOnClick}>
        <Popover content={SimpleContent}>
          <button>Test</button>
        </Popover>
      </div>
    )
    const trigger = getByText('Test')
    fireEvent.click(trigger)
    expect(getByText('simple content')).toBeInTheDocument()
    expect(mockContainerOnClick).not.toHaveBeenCalled()

    fireEvent.click(document)
  })

  test('Open popover does not cancel event on "dismissal click"', () => {
    const doThing = jest.fn()

    const { getByText, queryByText } = renderWithTheme(
      <>
        <Popover content={SimpleContent}>
          <button>Instant Click</button>
        </Popover>
        <a onClick={doThing}>Do thing...</a>
      </>
    )

    const trigger = getByText('Instant Click')
    fireEvent.click(trigger) // open Popover

    const closer = getByText('Do thing...')
    fireEvent.click(closer)
    expect(queryByText('simple content')).not.toBeInTheDocument()
    expect(doThing).toBeCalledTimes(1)
  })

  test('With cancelClickOutside = true, open popover cancels 1st click event', () => {
    const doThing = jest.fn()

    const { getByText, queryByText } = renderWithTheme(
      <>
        <Popover content={SimpleContent} cancelClickOutside>
          <button>Instant Click</button>
        </Popover>
        <a onClick={doThing}>Do thing...</a>
      </>
    )

    const trigger = getByText('Instant Click')
    fireEvent.click(trigger) // open Popover

    const closer = getByText('Do thing...')
    fireEvent.click(closer)
    expect(queryByText('simple content')).not.toBeInTheDocument()
    expect(doThing).toBeCalledTimes(0)
  })

  test('Popover trigger is shown/hidden on hover of hoverDisclosureRef', () => {
    const Component = () => {
      const hoverRef = useRef<HTMLDivElement>(null)
      return (
        <div ref={hoverRef}>
          <Popover content={SimpleContent} hoverDisclosureRef={hoverRef}>
            <Button>Instant Click</Button>
          </Popover>
          Some text in the div
        </div>
      )
    }
    const { getByText, queryByText } = renderWithTheme(<Component />)

    const trigger = queryByText('Instant Click')
    const div = getByText('Some text in the div')

    expect(trigger).not.toBeInTheDocument()

    fireEvent(
      div,
      new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: true,
      })
    )
    const triggerNew = getByText('Instant Click')
    expect(queryByText('simple content')).not.toBeInTheDocument()
    fireEvent.click(triggerNew) // open Popover
    expect(queryByText('simple content')).toBeInTheDocument()

    fireEvent.click(document)
  })
})
