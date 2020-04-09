/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import { Prompt } from './Prompt'

const requiredProps = {
  inputLabel: 'Foo',
  onSave: jest.fn(),
  title: 'Bar',
}

const optionalProps = {
  cancelLabel: 'Cancel Cheese',
  defaultValue: 'Default Value Cheese',
  onCancel: jest.fn(),
  saveLabel: 'Save Cheese',
  secondary: <div>Secondary Cheese</div>,
}

afterEach(() => {
  requiredProps.onSave.mockClear()
})

test('<Prompt/> with defaults', () => {
  const { getByText, queryByText } = renderWithTheme(
    <Prompt {...requiredProps}>
      {(open) => <Button onClick={open}>Sesame</Button>}
    </Prompt>
  )

  const opener = getByText('Sesame')
  fireEvent.click(opener)

  const button = getByText('Save')

  expect(getByText(requiredProps.inputLabel)).toBeVisible()
  expect(getByText(requiredProps.title)).toBeVisible()
  expect(button).toHaveStyle(`background: ${semanticColors.primary.main}`)

  fireEvent.submit(button)
  expect(requiredProps.onSave).toHaveBeenCalledTimes(1)

  expect(queryByText(requiredProps.inputLabel)).toBeNull()
  expect(queryByText(requiredProps.title)).toBeNull()
})

test('<Prompt/> with custom props', () => {
  const { getByDisplayValue, getByText } = renderWithTheme(
    <Prompt {...optionalProps} {...requiredProps}>
      {(open) => <Button onClick={open}>Sesame</Button>}
    </Prompt>
  )

  const opener = getByText('Sesame')
  fireEvent.click(opener)

  expect(getByText(optionalProps.cancelLabel)).toBeInTheDocument()
  expect(getByDisplayValue(optionalProps.defaultValue)).toBeInTheDocument()
  expect(getByText(optionalProps.saveLabel)).toBeInTheDocument()
  expect(getByText('Secondary Cheese')).toBeInTheDocument()

  fireEvent.click(getByText('Cancel Cheese'))
  expect(optionalProps.onCancel).toHaveBeenCalledTimes(1)
  expect(requiredProps.onSave).toHaveBeenCalledTimes(0)
})
