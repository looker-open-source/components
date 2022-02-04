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

import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import React, { useState } from 'react'

import { renderWithTheme } from '@looker/components-test-utils'
import type { StatefulColor } from '@looker/design-tokens'
import { theme } from '@looker/design-tokens'
import { Button } from '../../Button'
import { Prompt } from './Prompt'

const onSaveCallback = jest.fn()

const requiredProps = {
  inputLabel: 'Foo',
  onSave: (_: string, close: () => void) => {
    close()
    onSaveCallback()
  },
  title: 'Bar',
}

const optionalProps = {
  cancelColor: 'critical' as StatefulColor,
  cancelLabel: 'Cancel Cheese',
  defaultValue: 'Default Value Cheese',
  onCancel: jest.fn(),
  saveLabel: 'Save Cheese',
  secondary: <div>Secondary Cheese</div>,
}

afterEach(() => {
  onSaveCallback.mockClear()
})

test('<Prompt/> with defaults', async () => {
  renderWithTheme(
    <Prompt {...requiredProps}>
      {open => <Button onClick={open}>Open Prompt</Button>}
    </Prompt>
  )

  const opener = screen.getByText('Open Prompt')
  fireEvent.click(opener)

  const saveButton = screen.getByText('Save')
  const input = screen.getByPlaceholderText(requiredProps.inputLabel)

  expect(input).toBeVisible()
  expect(screen.getByText(requiredProps.title)).toBeVisible()
  expect(saveButton).toHaveStyleRule(`background: ${theme.colors.key}`)

  fireEvent.click(saveButton)
  expect(onSaveCallback).toHaveBeenCalledTimes(0)

  fireEvent.change(input, { target: { value: 'Has Text In It' } })
  fireEvent.click(saveButton)
  expect(onSaveCallback).toHaveBeenCalledTimes(1)

  await waitForElementToBeRemoved(() =>
    screen.queryByText(requiredProps.inputLabel)
  )
  expect(screen.queryByText(requiredProps.inputLabel)).not.toBeInTheDocument()
  expect(screen.queryByText(requiredProps.title)).not.toBeInTheDocument()
})

test('<Prompt/> with custom props', () => {
  renderWithTheme(
    <Prompt {...optionalProps} {...requiredProps}>
      {open => <Button onClick={open}>Open Prompt</Button>}
    </Prompt>
  )

  const opener = screen.getByText('Open Prompt')
  fireEvent.click(opener)

  const saveButton = screen.getByText(optionalProps.saveLabel)
  const cancelButton = screen.getByText(optionalProps.cancelLabel)

  expect(cancelButton).toBeInTheDocument()
  expect(cancelButton).toHaveStyleRule(`color: ${theme.colors.critical}`)
  expect(saveButton).toBeInTheDocument()
  expect(saveButton).toHaveStyleRule(`background: ${theme.colors.key}`)
  expect(
    screen.getByDisplayValue(optionalProps.defaultValue)
  ).toBeInTheDocument()
  expect(screen.getByText('Secondary Cheese')).toBeInTheDocument()

  fireEvent.click(screen.getByText('Cancel Cheese'))
  expect(optionalProps.onCancel).toHaveBeenCalledTimes(1)
  expect(onSaveCallback).toHaveBeenCalledTimes(0)
})

test('<Prompt /> does not clear value after closing', () => {
  renderWithTheme(
    <Prompt {...requiredProps}>
      {open => <Button onClick={open}>Open Prompt</Button>}
    </Prompt>
  )

  const opener = screen.getByText('Open Prompt')
  fireEvent.click(opener)

  const cancelButton = screen.getByText('Cancel')
  let input = screen.getByPlaceholderText(requiredProps.inputLabel)

  fireEvent.change(input, { target: { value: 'Hello World' } })
  expect(input).toHaveValue('Hello World')
  fireEvent.click(cancelButton)

  fireEvent.click(opener)
  // Note: Need to re-query for the input; not doing so results in stale value on the input element
  input = screen.getByPlaceholderText(requiredProps.inputLabel)
  expect(input).toHaveValue('Hello World')
})

test('<Prompt /> clears value after closing with clearOnCancel', () => {
  renderWithTheme(
    <Prompt clearOnCancel {...requiredProps}>
      {open => <Button onClick={open}>Open Prompt</Button>}
    </Prompt>
  )

  const opener = screen.getByText('Open Prompt')
  fireEvent.click(opener)

  const cancelButton = screen.getByText('Cancel')
  let input = screen.getByPlaceholderText(requiredProps.inputLabel)

  fireEvent.change(input, { target: { value: 'Hello World' } })
  expect(input).toHaveValue('Hello World')
  fireEvent.click(cancelButton)

  fireEvent.click(opener)
  // Note: Need to re-query for the input; not doing so results in stale value on the input element
  input = screen.getByPlaceholderText(requiredProps.inputLabel)
  expect(input).toHaveValue('')
})

test('<Prompt /> updates when defaultValue changes', () => {
  const PromptTest = () => {
    const [defaultValue, setDefaultValue] = useState('Gouda')

    return (
      <>
        <Prompt {...requiredProps} defaultValue={defaultValue}>
          {open => <Button onClick={open}>Open Prompt</Button>}
        </Prompt>
        <Button onClick={() => setDefaultValue('Swiss')}>
          Set Default Value to Swiss
        </Button>
      </>
    )
  }

  renderWithTheme(<PromptTest />)

  fireEvent.click(screen.getByText('Open Prompt'))
  screen.getByDisplayValue('Gouda')
  fireEvent.click(screen.getByText('Cancel'))

  fireEvent.click(screen.getByText('Set Default Value to Swiss'))
  fireEvent.click(screen.getByText('Open Prompt'))
  screen.getByDisplayValue('Swiss')
})
