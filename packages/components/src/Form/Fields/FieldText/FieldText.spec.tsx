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
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FieldText } from './FieldText'

describe('FieldText', () => {
  test('default label', () => {
    renderWithTheme(<FieldText id="FieldTextID" label="👍" />)
    expect(screen.getByLabelText('👍')).toBeInTheDocument()
  })

  test('label inline', () => {
    renderWithTheme(<FieldText id="FieldTextID" inline label="👍" />)
    expect(screen.getByLabelText('👍')).toBeInTheDocument()
  })

  test('A FieldText required', () => {
    renderWithTheme(<FieldText id="FieldTextID" label="👍" required />)
    expect(screen.getByLabelText('👍 required')).toBeRequired()
  })

  test('A FieldText disabled', () => {
    renderWithTheme(<FieldText disabled id="FieldTextID" label="👍" />)
    expect(screen.getByLabelText('👍')).toBeDisabled()
  })

  test('description', () => {
    renderWithTheme(
      <FieldText
        description="no vegetables allowed"
        id="FieldTextID"
        label="Text Input"
        placeholder="placeholder"
      />
    )
    expect(screen.getByText('no vegetables allowed')).toBeInTheDocument()
  })

  test('detail', () => {
    renderWithTheme(
      <FieldText
        detail="5/50"
        id="FieldTextID"
        label="hello"
        placeholder="placeholder"
      />
    )
    expect(screen.getByText('5/50')).toBeInTheDocument()
  })

  test('description has proper aria setup', () => {
    const description = 'This is a description'

    renderWithTheme(
      <FieldText id="test" defaultValue="example" description={description} />
    )

    const input = screen.getByDisplayValue('example')
    const id = input.getAttribute('aria-describedby')
    expect(id).toBeDefined()

    const descriptionDom = screen.getByText(description)
    expect(descriptionDom.parentElement).toBeInTheDocument()
    expect(descriptionDom.parentElement?.id).toEqual(id)
  })

  test('error has proper aria setup', () => {
    const errorMessage = 'This is an error'

    renderWithTheme(
      <FieldText
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

  test('onChange handler', () => {
    const onChange = jest.fn()
    renderWithTheme(<FieldText id="FieldTextID" onChange={onChange} />)
    userEvent.type(screen.getByRole('textbox'), 'Hello world')
    expect(onChange).toHaveBeenCalledTimes(11)
  })
})
