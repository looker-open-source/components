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
import { Portal } from '@looker/components'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React, { useState } from 'react'
import { MultiInput } from './MultiInput'

describe('MultiInput', () => {
  const item = {
    id: '1',
    type: '=',
    is: true,
    value: [],
  }

  it('calls onChange with numbers', () => {
    const onChange = jest.fn()
    renderWithTheme(
      <MultiInput item={item} onChange={onChange} placeholder="any value" />
    )

    const input = screen.getByPlaceholderText('any value')
    fireEvent.change(input, { target: { value: '123,456,' } })

    expect(input).toHaveValue('')
    expect(onChange).toHaveBeenCalledWith('1', { value: [123, 456] })
  })

  it('calls onChange with valid inputValue when closed', async () => {
    const onChange = jest.fn()
    const ClosingComponent = () => {
      const [isOpen, setIsOpen] = useState(true)
      const handleClick = () => setIsOpen(false)
      return (
        <>
          {isOpen ? (
            <Portal>
              <MultiInput
                item={item}
                onChange={onChange}
                placeholder="any value"
              />
            </Portal>
          ) : (
            <div>Closed</div>
          )}
          <button onClick={handleClick}>Close</button>
        </>
      )
    }
    renderWithTheme(<ClosingComponent />)

    const input = screen.getByPlaceholderText('any value')
    fireEvent.change(input, { target: { value: '123' } })
    expect(onChange).not.toHaveBeenCalled()

    const button = screen.getByText('Close')
    fireEvent.click(button)
    const closed = await screen.findByText('Closed')
    expect(closed).toBeInTheDocument()
    expect(onChange).toHaveBeenCalledWith('1', { value: [123] })
  })

  it('does not call onChange if a non-number is entered', () => {
    const onChange = jest.fn()
    renderWithTheme(
      <MultiInput item={item} onChange={onChange} placeholder="any value" />
    )

    const input = screen.getByPlaceholderText('any value')
    fireEvent.change(input, { target: { value: '100k,' } })

    expect(input).toHaveValue('100k')
    expect(onChange).not.toHaveBeenCalled()
  })

  it('calls onChange with a big integer', () => {
    const onChange = jest.fn()
    renderWithTheme(
      <MultiInput item={item} onChange={onChange} placeholder="any value" />
    )

    const input = screen.getByPlaceholderText('any value')
    fireEvent.change(input, { target: { value: '12345678901234567890,' } })

    expect(onChange.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "1",
          Object {
            "value": Array [
              12345678901234567890n,
            ],
          },
        ],
      ]
    `)
  })
})
