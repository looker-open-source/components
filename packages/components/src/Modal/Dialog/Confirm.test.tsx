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

import { renderWithTheme } from 'looker-components-test-utils'
import { semanticColors } from 'looker-design-tokens'
import { Button } from '../../Button'
import { Confirm } from './Confirm'

const requiredProps = {
  message: 'Foo',
  onConfirm: jest.fn(),
  title: 'Bar',
}

const optionalProps = {
  cancelLabel: 'Dont Delete',
  confirmLabel: 'Delete',
  message: 'This is permanent',
  onCancel: jest.fn(),
  title: 'Delete the thing?',
}

afterEach(() => {
  requiredProps.onConfirm.mockClear()
  optionalProps.onCancel.mockClear()
})

test('<Confirm/> with defaults', () => {
  const { getByText, queryByText } = renderWithTheme(
    <Confirm {...requiredProps}>
      {open => <Button onClick={open}>Do Something</Button>}
    </Confirm>
  )

  const opener = getByText('Do Something')
  fireEvent.click(opener)

  const button = getByText('Confirm')

  expect(getByText(requiredProps.title)).toBeVisible()
  expect(getByText(requiredProps.message)).toBeVisible()
  expect(button).toHaveStyle(`background: ${semanticColors.primary.main}`)

  fireEvent.click(button)
  expect(requiredProps.onConfirm).toHaveBeenCalledTimes(1)

  fireEvent.click(getByText('Cancel'))
  expect(queryByText(requiredProps.title)).toBeNull()
})

test('<Confirm/> with custom props', () => {
  const { getByText } = renderWithTheme(
    <Confirm {...requiredProps} {...optionalProps} buttonColor="danger">
      {open => <Button onClick={open}>Do Something</Button>}
    </Confirm>
  )

  const opener = getByText('Do Something')
  fireEvent.click(opener)

  const button = getByText(optionalProps.confirmLabel || '')
  expect(button).toHaveStyle(`background: ${semanticColors.danger.main}`)

  fireEvent.click(getByText(optionalProps.cancelLabel || ''))
  fireEvent.click(button)

  expect(requiredProps.onConfirm).toHaveBeenCalledTimes(1)
  expect(optionalProps.onCancel).toHaveBeenCalledTimes(1)
})
