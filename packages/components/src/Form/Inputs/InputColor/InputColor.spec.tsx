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

import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import type { FormEvent } from 'react'
import React, { useState } from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'

import { Button } from '../../../Button'
import { InputColor } from './InputColor'

describe('InputColor', () => {
  test('starts with a named color value', () => {
    renderWithTheme(<InputColor value="green" />)
    expect(screen.getByDisplayValue('green')).toBeInTheDocument()
  })

  test('responds to input value change', () => {
    renderWithTheme(<InputColor value="green" />)
    const input = screen.getByDisplayValue('green')
    input.focus()
    fireEvent.change(input, { target: { value: 'blue' } })
    expect(screen.getByDisplayValue('blue')).toBeInTheDocument()
    fireEvent.click(document)
  })

  test('with controlled state', () => {
    function Wrapper() {
      const [value, setValue] = useState('')
      function handleClick() {
        setValue('yellow')
      }
      function handleChange(e: FormEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value)
      }
      return (
        <>
          <Button onClick={handleClick}>Turn yellow</Button>
          <InputColor
            value={value}
            onChange={handleChange}
            placeholder="Select a color"
          />
        </>
      )
    }
    renderWithTheme(<Wrapper />)

    const button = screen.getByText('Turn yellow')
    const input = screen.getByPlaceholderText('Select a color')
    expect(input).toHaveValue('')
    fireEvent.click(button)
    expect(input).toHaveValue('yellow')
    fireEvent.change(input, { target: { value: 'purple' } })
    expect(input).toHaveValue('purple')

    fireEvent.click(document)
  })

  test('opens on swatch click', () => {
    renderWithTheme(<InputColor value="green" />)
    fireEvent.click(screen.getByTestId('swatch'))
    expect(screen.getByTestId('color-picker')).toBeInTheDocument()
    fireEvent.click(document)
  })

  test('can receive focus and blur handlers', () => {
    const onBlur = jest.fn()
    const onFocus = jest.fn()
    renderWithTheme(
      <InputColor onBlur={onBlur} onFocus={onFocus} value="green" />
    )

    const input = screen.getByDisplayValue('green')

    input.focus()
    expect(input).toHaveFocus()
    expect(onFocus).toHaveBeenCalled()

    input.blur()
    expect(input).not.toHaveFocus()
    expect(onBlur).toHaveBeenCalled()
  })

  test('changes color on <ColorPicker/> click', () => {
    renderWithTheme(<InputColor placeholder="Select a color" />)
    const input = screen.getByPlaceholderText(
      'Select a color'
    ) as HTMLInputElement

    fireEvent.click(screen.getByTestId('swatch'))

    const lightSaturationPreview = screen.getByTestId(
      'light-saturation-preview'
    )

    fireEvent.mouseDown(lightSaturationPreview, { clientX: 0, clientY: 0 })

    expect(input.value).toBe('#ffffff')

    /**
     * Close popover to silence act() warning
     * Note: Having just one click event produces the act() warning,
     * but having two events gets around this.
     *
     * Something about firing a mouseDown event (as opposed to a click
     * event) within the popover leads to funky test behavior. We need to
     * fire a mouseDown here, though, since the LightSaturationPreview uses mouse down
     * to the start the color handle movement / dragging.
     */
    fireEvent.click(document)
    fireEvent.click(document)
  })

  // mouseMove doesn't seem to move mouse position; leaving as test.skip( for now
  test.skip('changes color on <ColorPicker/> mouse drag', () => {
    renderWithTheme(<InputColor placeholder="Select a color" />)
    const input = screen.getByPlaceholderText(
      'Select a color'
    ) as HTMLInputElement

    fireEvent.click(screen.getByTestId('swatch'))

    const lightSaturationPreview = screen.getByTestId(
      'light-saturation-preview'
    )

    fireEvent.mouseDown(lightSaturationPreview)

    fireEvent.mouseMove(lightSaturationPreview, { clientX: 200, clientY: 0 })
    expect(input.value).toBe('#ff0000')

    fireEvent.mouseUp(lightSaturationPreview)

    /**
     * Close popover to silence act() warning
     * Note: Having just one click event produces the act() warning,
     * but having two events gets around this.
     *
     * Something about firing a mouseDown event (as opposed to a click
     * event) within the popover leads to funky test behavior. We need to
     * fire a mouseDown here, though, since the LightSaturationPreview uses mouse down
     * to the start the color handle movement / dragging.
     */
    fireEvent.click(document)
    fireEvent.click(document)
  })

  test('disabled', () => {
    renderWithTheme(<InputColor disabled value="green" />)

    // Find input, verify it's disabled
    expect(screen.getByRole('textbox')).toBeDisabled()

    // Find swatch, verify clicking doesn't open Popover
    fireEvent.click(screen.getByTestId('swatch'))
    expect(screen.queryByTestId('color-picker')).not.toBeInTheDocument()
  })

  test('readOnly', () => {
    renderWithTheme(<InputColor readOnly value="green" />)

    // Find input, verify it's readOnly
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly')

    // Find swatch, verify clicking doesn't open Popover
    fireEvent.click(screen.getByTestId('swatch'))
    expect(screen.queryByTestId('color-picker')).not.toBeInTheDocument()
  })

  test('clear value', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(<InputColor value="green" onChange={onChangeMock} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '' } })
    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "currentTarget": Object {
              "name": undefined,
              "value": "",
            },
            "target": Object {
              "name": undefined,
              "value": "",
            },
          },
        ],
      ]
    `)

    fireEvent.click(document)
  })

  test('clear value with button', () => {
    const onChangeMock = jest.fn()
    renderWithTheme(<InputColor value="green" onChange={onChangeMock} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "currentTarget": Object {
              "name": undefined,
              "value": "",
            },
            "target": Object {
              "name": undefined,
              "value": "",
            },
          },
        ],
      ]
    `)
  })
})
