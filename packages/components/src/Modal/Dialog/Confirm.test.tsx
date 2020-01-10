/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import { fireEvent } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '@looker/components-test-utils'
import { semanticColors } from '@looker/design-tokens'
import { Button } from '../../Button'
import { Confirm } from './Confirm'

const modalProps = {
  message: 'Foo',
  onCancel: jest.fn(),
  onChange: jest.fn(),
  onConfirm: jest.fn(),
  title: 'Bar',
}

const buttonColor: 'danger' = 'danger'
const cancelColor: 'primary' = 'primary'

const optionalProps = {
  buttonColor,
  cancelColor,
  cancelLabel: "Don't Delete",
  confirmLabel: 'Delete',
  message: 'This is permanent',
  title: 'Delete the thing?',
}

afterEach(() => {
  jest.clearAllMocks()
})

describe('Modal rendering', () => {
  test('Rendering <Confirm /> required props', () => {
    const { getByText, queryByTestId } = renderWithTheme(
      <Confirm {...modalProps}>
        {open => <Button onClick={open}>Do Something</Button>}
      </Confirm>
    )

    // open modal
    const opener = getByText('Do Something')
    fireEvent.click(opener)

    // verify prop rendering
    expect(queryByTestId('confirmation-dialog')).toBeVisible()
    expect(getByText(modalProps.title)).toBeVisible()
    expect(getByText(modalProps.message)).toBeVisible()

    const confirmButton = getByText('Confirm')
    expect(confirmButton).toHaveStyle(
      `background: ${semanticColors.primary.main}`
    )
  })

  test('Rendering <Confirm /> optional props', () => {
    const { getByText } = renderWithTheme(
      <Confirm {...modalProps} {...optionalProps}>
        {open => <Button onClick={open}>Do Something</Button>}
      </Confirm>
    )

    // open modal
    const opener = getByText('Do Something')
    fireEvent.click(opener)

    // verify prop rendering
    const confirmButton = getByText(optionalProps.confirmLabel)
    expect(confirmButton).toHaveStyle(
      `background: ${semanticColors.danger.main}`
    )

    const cancelButton = getByText(optionalProps.cancelLabel)
    expect(cancelButton).toHaveStyle(`color: ${semanticColors.primary.main}`)

    expect(getByText(optionalProps.title)).toBeVisible()
    expect(getByText(optionalProps.message)).toBeVisible()
  })
})

describe('Confirm button behavior', () => {
  test('<Confirm/> confirm button closes modal and calls onConfirm callback', () => {
    const { getByText, queryByTestId } = renderWithTheme(
      <Confirm {...modalProps}>
        {open => <Button onClick={open}>Do Something</Button>}
      </Confirm>
    )

    // Open modal
    const opener = getByText('Do Something')
    fireEvent.click(opener)

    expect(queryByTestId('confirmation-dialog')).toBeVisible()
    expect(queryByTestId('discard-changes-dialog')).not.toBeInTheDocument()

    // Click confirm button
    const confirmButton = getByText('Confirm')
    fireEvent.click(confirmButton)

    expect(modalProps.onConfirm).toHaveBeenCalledTimes(1)
    expect(queryByTestId('confirmation-dialog')).not.toBeInTheDocument()
    expect(queryByTestId('discard-changes-dialog')).not.toBeInTheDocument()
  })
})

describe('Close modal without saving changes', () => {
  test('<Confirm /> cancel button closes modal and calls onCancel callback by default', () => {
    const { getByText, queryByTestId } = renderWithTheme(
      <Confirm {...modalProps}>
        {open => <Button onClick={open}>Do Something</Button>}
      </Confirm>
    )

    // open confirm dialog
    const opener = getByText('Do Something')
    fireEvent.click(opener)

    expect(queryByTestId('confirmation-dialog')).toBeVisible()
    expect(queryByTestId('discard-changes-dialog')).not.toBeInTheDocument()

    // close confirm dialog without submitting
    const cancelButton = getByText('Cancel')
    fireEvent.click(cancelButton)
    expect(modalProps.onConfirm).not.toHaveBeenCalled()
    expect(modalProps.onCancel).toHaveBeenCalledTimes(1)

    expect(queryByTestId('confirmation-dialog')).not.toBeInTheDocument()
    expect(queryByTestId('discard-changes-dialog')).not.toBeInTheDocument()
  })

  test('<Confirm /> cancel button renders "discard changes modal" when protectChanges is true', () => {
    const FormInput = (
      <>
        <label htmlFor="form-input">Form Input</label>
        <input type="text" id="form-input" />
      </>
    )

    const { getByText, queryByTestId, getByLabelText } = renderWithTheme(
      <Confirm {...modalProps} message={FormInput} protectChanges={true}>
        {open => <Button onClick={open}>Do Something</Button>}
      </Confirm>
    )

    // open confirm dialog with form input inside
    const opener = getByText('Do Something')
    fireEvent.click(opener)

    expect(queryByTestId('confirmation-dialog')).toBeVisible()
    expect(queryByTestId('discard-changes-dialog')).not.toBeInTheDocument()

    // change form input value and try to close
    const input = getByLabelText('Form Input')
    fireEvent.change(input)
    expect(modalProps.onChange).toHaveBeenCalledTimes(1)

    const cancelButton = getByText('Cancel')
    fireEvent.click(cancelButton)
    expect(modalProps.onCancel).not.toHaveBeenCalled()

    // confirmation dialog should be replaced by confirm close dialog
    expect(queryByTestId('confirmation-dialog')).not.toBeInTheDocument()
    expect(queryByTestId('discard-changes-dialog')).toBeVisible()

    // confirm modal close
    const confirmCloseButton = getByText('Discard Changes')
    fireEvent.click(confirmCloseButton)

    expect(modalProps.onCancel).toHaveBeenCalledTimes(1)
    expect(queryByTestId('confirmation-dialog')).not.toBeInTheDocument()
    expect(queryByTestId('discard-changes-dialog')).not.toBeInTheDocument()
  })
})
