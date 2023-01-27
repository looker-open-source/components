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
import { FieldSelect } from './FieldSelect'

describe('FieldSelect', () => {
  test('autoResize', () => {
    renderWithTheme(<FieldSelect label="Auto resize" autoResize />)
    // Both the div[role="combobox"] and the input share the label
    const label = screen.getByLabelText('Auto resize')
    expect(label).toHaveStyleRule('width: auto')
  })

  test('Accepts a value', () => {
    renderWithTheme(
      <FieldSelect
        label="👍"
        value="foobar"
        options={[{ label: 'Foobar', value: 'foobar' }]}
      />
    )
    expect(screen.getByRole('textbox')).toHaveValue('Foobar')
  })

  test('Should trigger onChange handler', () => {
    const onChange = jest.fn()

    renderWithTheme(
      <FieldSelect
        label="👍"
        value="foobar"
        onChange={onChange}
        options={[{ label: 'Foobar', value: 'foobar' }]}
      />
    )

    const input = screen.getByLabelText('👍')
    fireEvent.mouseDown(input)
    const foobar = screen.getByText('Foobar')
    fireEvent.click(foobar)
    expect(onChange).toHaveBeenCalledTimes(1)
    fireEvent.click(document)
  })

  test('With an validation message displayed', () => {
    renderWithTheme(
      <FieldSelect
        label="thumbs up"
        name="thumbsUp"
        id="thumbs-up"
        validationMessage={{ message: 'This is an error', type: 'error' }}
      />
    )
    expect(screen.getAllByLabelText('thumbs up')[0]).toBeVisible()
    expect(screen.getByText('This is an error')).toBeVisible()
  })

  test('With description has proper aria setup', () => {
    const description = 'This is a description'

    renderWithTheme(
      <FieldSelect id="test" defaultValue="example" description={description} />
    )

    const input = screen.getByDisplayValue('example')
    const id = input.getAttribute('aria-describedby')
    expect(id).toBeDefined()

    const descriptionDom = screen.getByText(description)
    expect(descriptionDom.parentElement).toBeInTheDocument()
    expect(descriptionDom.parentElement?.id).toEqual(id)
  })

  test('With error has proper aria setup', () => {
    const errorMessage = 'This is an error'

    renderWithTheme(
      <FieldSelect
        id="test"
        defaultValue="example"
        validationMessage={{ message: errorMessage, type: 'error' }}
      />
    )

    const input = screen.getByDisplayValue('example')
    const id = input.getAttribute('aria-describedby')
    expect(id).toBeDefined()

    const errorMessageDom = screen.getByText(errorMessage)
    expect(errorMessageDom.parentElement).toBeInTheDocument()
    expect(errorMessageDom.parentElement?.id).toEqual(id)
  })
})
