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
import { fireEvent, screen } from '@testing-library/react'
import { children, label, lorem } from '../fixtures/accordion'
import { Accordion2 } from './Accordion2'
import { Controlled } from './stories/index.stories'

const defaultProps = { children, label, lorem }

describe('Accordion2', () => {
  test('Basic', () => {
    renderWithTheme(<Accordion2 {...defaultProps} />)
    const accordionLabel = screen.getByText(label)
    expect(screen.queryByText(children)).not.toBeInTheDocument()
    fireEvent.click(accordionLabel)
    screen.getByText(children)
    fireEvent.click(accordionLabel)
    expect(screen.queryByText(children)).not.toBeInTheDocument()
  })

  test('defaultOpen - renders children by default when defaultOpen === true', () => {
    renderWithTheme(<Accordion2 defaultOpen {...defaultProps} />)

    screen.getByText(children)
  })

  test('Triggers onClose and onOpen callbacks label click', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()

    renderWithTheme(
      <Accordion2 onOpen={onOpen} onClose={onClose} {...defaultProps} />
    )
    const accordionLabel = screen.getByText(label)
    fireEvent.click(accordionLabel)
    expect(onOpen).toHaveBeenCalledTimes(1)
    fireEvent.click(accordionLabel)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test('Controlled - shows and hides children with provided isOpen and toggleOpen props', () => {
    renderWithTheme(<Controlled />)
    const accordionLabel = screen.getByText('See more')
    screen.getByText(lorem)
    fireEvent.click(accordionLabel)
    expect(screen.queryByText(lorem)).not.toBeInTheDocument()
    fireEvent.click(accordionLabel)
    screen.getByText(lorem)
  })

  test('Wraps handlers passed in', () => {
    const handleKeyDown = jest.fn()
    const handleKeyUp = jest.fn()
    const handleClick = jest.fn()
    const handleBlur = jest.fn()

    renderWithTheme(
      <Accordion2
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onClick={handleClick}
        onBlur={handleBlur}
        {...defaultProps}
      />
    )

    const accordionLabel = screen.getByText(label)
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

  test('Validate both controlled props are required', () => {
    renderWithTheme(
      // @ts-expect-error isOpen without toggleOpen is invalid
      <Accordion2 isOpen {...defaultProps} />
    )
  })

  test('defaultOpen mutation should be ignored', () => {
    const Example = () => {
      const [defaultOpen, setDefaultOpen] = React.useState(true)

      return (
        <>
          <button onClick={() => setDefaultOpen(!defaultOpen)}>Toggle</button>
          <Accordion2 defaultOpen={defaultOpen} label="Hello">
            World
          </Accordion2>
          )
        </>
      )
    }

    renderWithTheme(<Example />)
    expect(screen.getByText('World')).toBeInTheDocument()
    // Accordion should ignore change
    fireEvent.click(screen.getByText('Toggle'))
    expect(screen.getByText('World')).toBeInTheDocument()
  })
})
