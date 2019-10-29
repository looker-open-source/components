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

import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Simulate } from 'react-dom/test-utils'

import { renderWithTheme } from 'looker-components-test-utils'
import { ButtonItem } from './ButtonItem'
import { ButtonToggle } from './ButtonToggle'

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

test('<ButtonToggle/> controlled', () => {
  const onChangeMock = jest.fn()
  const { getByLabelText } = renderWithTheme(
    <ButtonToggle value="Bananas" onChange={onChangeMock}>
      <ButtonItem>Apples</ButtonItem>
      <ButtonItem>Oranges</ButtonItem>
      <ButtonItem>Bananas</ButtonItem>
    </ButtonToggle>
  )

  const apples = getByLabelText('Apples')
  const bananas = getByLabelText('Bananas')
  const oranges = getByLabelText('Oranges')

  expect(bananas).toHaveAttribute('checked')
  expect(oranges).not.toHaveAttribute('checked')

  Simulate.change(apples)
  Simulate.change(bananas)
  Simulate.change(oranges)
  expect(onChangeMock).toHaveBeenCalledTimes(3)
  expect(onChangeMock.mock.calls[0][0]).toEqual('Apples')
  expect(onChangeMock.mock.calls[1][0]).toEqual('Bananas')
  expect(onChangeMock.mock.calls[2][0]).toEqual('Oranges')
})
