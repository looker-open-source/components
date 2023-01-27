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

import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen } from '@testing-library/react'
import 'jest-styled-components'
import React, { useRef } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Button } from '../Button'
import { Popover } from './Popover'
import { PopoverLayout } from './Layout'

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

  test('Accessibility', () => {
    renderWithTheme(
      <Popover
        id="a11y"
        content={
          <PopoverLayout header="Header text" footer>
            content
          </PopoverLayout>
        }
      >
        <Button>Open</Button>
      </Popover>
    )

    const openPopover = screen.getByText('Open')
    fireEvent.click(openPopover)

    expect(screen.getByText('Header text')).toBeInTheDocument()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('dialog')).toHaveAttribute(
      'aria-labelledby',
      'a11y-heading'
    )
    expect(screen.getByText('Header text')).toHaveAttribute(
      'id',
      'a11y-heading'
    )

    fireEvent.click(document)
  })

  test('cloneElement style opens and closes', () => {
    renderWithTheme(
      <Popover content={SimpleContent}>
        <button>Test</button>
      </Popover>
    )

    // Verify hidden
    expect(screen.queryByText('simple content')).not.toBeInTheDocument()

    const trigger = screen.getByText('Test')
    fireEvent.click(trigger)

    // Find content
    expect(screen.getByText('simple content')).toBeInTheDocument()

    fireEvent.click(trigger)
    expect(screen.queryByText('simple content')).not.toBeInTheDocument()
  })

  test('renderProps style expanded opens and closes', () => {
    renderWithTheme(
      <Popover content={SimpleContent}>
        {popoverProps => <button {...popoverProps}>Test</button>}
      </Popover>
    )

    // Verify hidden
    expect(screen.queryByText('simple content')).not.toBeInTheDocument()

    const trigger = screen.getByText('Test')
    fireEvent.click(trigger)

    // Find content
    expect(screen.getByText('simple content')).toBeInTheDocument()

    fireEvent.click(trigger)
    expect(screen.queryByText('simple content')).not.toBeInTheDocument()
  })

  test('preventDefault works on trigger 2nd click', () => {
    // preventDefault here avoids JSDOM error
    const mockFormSubmit = jest.fn(e => e.preventDefault())

    renderWithTheme(
      <form onSubmit={mockFormSubmit}>
        <Popover content={SimpleContent}>
          <button>Test</button>
        </Popover>
      </form>
    )
    const trigger = screen.getByText('Test')
    // Click to open
    fireEvent.click(trigger)
    // Then click to close
    fireEvent.click(trigger)
    expect(mockFormSubmit).not.toHaveBeenCalled()
  })

  test('stopPropagation works - event on container is not called', () => {
    const mockContainerOnClick = jest.fn()

    renderWithTheme(
      <div onClick={mockContainerOnClick}>
        <Popover content={SimpleContent}>
          <button>Test</button>
        </Popover>
      </div>
    )
    const trigger = screen.getByText('Test')
    fireEvent.click(trigger)
    expect(screen.getByText('simple content')).toBeInTheDocument()
    expect(mockContainerOnClick).not.toHaveBeenCalled()

    fireEvent.click(document)
  })

  test('Open popover does not cancel event on "dismissal click"', () => {
    const doThing = jest.fn()

    renderWithTheme(
      <>
        <Popover content={SimpleContent}>
          <button>Instant Click</button>
        </Popover>
        <a onClick={doThing}>Do thing...</a>
      </>
    )

    const trigger = screen.getByText('Instant Click')
    fireEvent.click(trigger) // open Popover

    const closer = screen.getByText('Do thing...')
    fireEvent.click(closer)
    expect(screen.queryByText('simple content')).not.toBeInTheDocument()
    expect(doThing).toBeCalledTimes(1)
  })

  test('With cancelClickOutside = true, open popover cancels 1st click event', () => {
    const doThing = jest.fn()

    renderWithTheme(
      <>
        <Popover content={SimpleContent} cancelClickOutside>
          <button>Instant Click</button>
        </Popover>
        <a onClick={doThing}>Do thing...</a>
      </>
    )

    const trigger = screen.getByText('Instant Click')
    fireEvent.click(trigger) // open Popover

    const closer = screen.getByText('Do thing...')
    fireEvent.click(closer)
    expect(screen.queryByText('simple content')).not.toBeInTheDocument()
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
    renderWithTheme(<Component />)

    const trigger = screen.queryByText('Instant Click')
    const div = screen.getByText('Some text in the div')

    expect(trigger).not.toBeInTheDocument()

    fireEvent(
      div,
      new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: true,
      })
    )
    const triggerNew = screen.getByText('Instant Click')
    expect(screen.queryByText('simple content')).not.toBeInTheDocument()
    fireEvent.click(triggerNew) // open Popover
    expect(screen.getByText('simple content')).toBeInTheDocument()

    fireEvent.click(document)
  })

  test('onClose', () => {
    const onCloseMock = jest.fn()
    renderWithTheme(
      <Popover content={SimpleContent} onClose={onCloseMock}>
        <Button>Open</Button>
      </Popover>
    )

    const button = screen.getByText('Open')
    fireEvent.click(button)
    expect(screen.getByText('simple content')).toBeVisible()

    fireEvent.click(document)
    expect(screen.queryByText('simple content')).not.toBeInTheDocument()
    expect(onCloseMock).toHaveBeenCalled()
  })
})
