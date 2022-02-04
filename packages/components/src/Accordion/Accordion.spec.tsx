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

import React, { useState } from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { Accordion, AccordionContent, AccordionDisclosure } from '.'

const globalConsole = global.console

describe('Accordion', () => {
  test('Renders AccordionDisclosure and AccordionContent (on label click)', () => {
    renderWithTheme(
      <Accordion content="My Accordion Content">My Accordion Label</Accordion>
    )
    const accordionLabel = screen.getByText('My Accordion Label')
    expect(screen.queryByText('My Accordion Content')).not.toBeInTheDocument()
    fireEvent.click(accordionLabel)
    screen.getByText('My Accordion Content')
    fireEvent.click(accordionLabel)
    expect(screen.queryByText('My Accordion Content')).not.toBeInTheDocument()
  })

  test('Renders AccordionContent by default when defaultOpen === true', () => {
    renderWithTheme(
      <Accordion defaultOpen content="My Accordion Content">
        My Accordion Label
      </Accordion>
    )

    screen.getByText('My Accordion Content')
  })

  test('Triggers onClose and onOpen callbacks on AccordionDisclosure click', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()

    renderWithTheme(
      <Accordion
        onOpen={onOpen}
        onClose={onClose}
        content="My Accordion Content"
      >
        My Accordion Label
      </Accordion>
    )
    const accordionLabel = screen.getByText('My Accordion Label')
    fireEvent.click(accordionLabel)
    expect(onOpen).toHaveBeenCalledTimes(1)
    fireEvent.click(accordionLabel)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('Shows and hides children of AccordionContent on AccordionDisclosure click with provided isOpen and toggleOpen props', () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(true)

      return (
        <Accordion
          isOpen={isOpen}
          toggleOpen={setIsOpen}
          content="My Accordion Content"
        >
          My Accordion Label
        </Accordion>
      )
    }

    renderWithTheme(<Wrapper />)
    const accordionLabel = screen.getByText('My Accordion Label')
    screen.getByText('My Accordion Content')
    fireEvent.click(accordionLabel)
    expect(screen.queryByText('My Accordion Content')).not.toBeInTheDocument()
    fireEvent.click(accordionLabel)
    screen.getByText('My Accordion Content')
  })

  // TODO: Move handler props to Accordion during AccordionDisclosure refactor PR
  test('Wraps handlers passed into AccordionDisclosure', () => {
    const handleKeyDown = jest.fn()
    const handleKeyUp = jest.fn()
    const handleClick = jest.fn()
    const handleBlur = jest.fn()

    renderWithTheme(
      <Accordion
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onClick={handleClick}
        onBlur={handleBlur}
        content="My Accordion Content"
      >
        My Accordion Label
      </Accordion>
    )

    const accordionLabel = screen.getByText('My Accordion Label')
    fireEvent.click(accordionLabel)
    expect(handleClick).toHaveBeenCalled()
    fireEvent.blur(accordionLabel)
    expect(handleBlur).toHaveBeenCalled()
    fireEvent.keyDown(accordionLabel, {
      key: 'Enter',
    })
    expect(handleKeyDown).toHaveBeenCalled()
    fireEvent.keyUp(accordionLabel, {
      key: 'Enter',
    })
    expect(handleKeyUp).toHaveBeenCalled()
  })

  describe('warnings', () => {
    beforeEach(() => {
      global.console = {
        ...globalConsole,
        warn: jest.fn(),
      }
    })

    afterEach(() => {
      global.console = globalConsole
    })

    test('warns if isOpen is provided without toggleOpen prop', () => {
      renderWithTheme(
        <Accordion isOpen={true} content="My Accordion Content">
          My Accordion Label
        </Accordion>
      )

      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalled()
    })

    test('warns if children is a falsy value', () => {
      renderWithTheme(
        <Accordion content="My Accordion Content">{false}</Accordion>
      )

      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalled()
    })
  })

  describe('legacy composition', () => {
    test('renders Accordion when using AccordionDisclosure and AccordionContent children', () => {
      renderWithTheme(
        <Accordion defaultOpen>
          <AccordionDisclosure>Disclosure</AccordionDisclosure>
          <AccordionContent>Content</AccordionContent>
        </Accordion>
      )

      screen.getByText('Disclosure')
      screen.getByText('Content')
    })
  })
})
