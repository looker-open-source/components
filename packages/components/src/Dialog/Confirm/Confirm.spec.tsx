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
import React from 'react'

import { renderWithTheme } from '@looker/components-test-utils'
import { theme } from '@looker/design-tokens'
import { Button } from '../../Button'
import { jaJP } from '../../locales'
import { Confirm } from './Confirm'

const requiredProps = {
  message: 'Foo',
  onConfirm: jest.fn(),
  title: 'Bar',
}

const optionalProps = {
  cancelLabel: "Don't Delete",
  confirmLabel: 'Delete',
  message: 'This is permanent',
  onCancel: jest.fn(),
  title: 'Delete the thing?',
}

afterEach(() => {
  requiredProps.onConfirm.mockClear()
  optionalProps.onCancel.mockClear()
})

describe('Confirm', () => {
  test('with defaults', async () => {
    renderWithTheme(
      <Confirm {...requiredProps}>
        {open => <Button onClick={open}>Do Something</Button>}
      </Confirm>
    )

    const opener = screen.getByText('Do Something')
    fireEvent.click(opener)

    const button = screen.getByText('Confirm')

    expect(screen.getByText(requiredProps.title)).toBeVisible()
    expect(screen.getByText(requiredProps.message)).toBeVisible()
    expect(button).toHaveStyleRule(`background: ${theme.colors.key}`)

    fireEvent.click(button)
    expect(requiredProps.onConfirm).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByText('Cancel'))
    await waitForElementToBeRemoved(() =>
      screen.queryByText(requiredProps.title)
    )
    expect(screen.queryByText(requiredProps.title)).not.toBeInTheDocument()
  })

  test('with custom props', () => {
    renderWithTheme(
      <Confirm {...requiredProps} {...optionalProps} buttonColor="critical">
        {open => <Button onClick={open}>Do Something</Button>}
      </Confirm>
    )

    const opener = screen.getByText('Do Something')
    fireEvent.click(opener)

    const button = screen.getByText(optionalProps.confirmLabel || '')
    expect(button).toHaveStyleRule(`background: ${theme.colors.critical}`)

    fireEvent.click(screen.getByText(optionalProps.cancelLabel || ''))
    fireEvent.click(button)

    expect(requiredProps.onConfirm).toHaveBeenCalledTimes(1)
    expect(optionalProps.onCancel).toHaveBeenCalledTimes(1)
  })

  test('i18n', () => {
    renderWithTheme(
      <Confirm {...requiredProps}>
        {open => <Button onClick={open}>Do Something</Button>}
      </Confirm>,
      undefined,
      jaJP
    )

    const opener = screen.getByText('Do Something')
    fireEvent.click(opener)

    const buttons = screen.getAllByRole('button')
    // "Confirm" in Japanese
    expect(buttons[0]).toHaveTextContent('確認')
    // "Cancel" in Japanese
    expect(buttons[1]).toHaveTextContent('キャンセル')
  })
})
