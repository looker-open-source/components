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
// import { fireEvent } from '@testing-library/react'
import React from 'react'
import { Simulate } from 'react-dom/test-utils'

import { renderWithTheme } from 'looker-components-test-utils'
import { palette } from 'looker-design-tokens'
import { ButtonGroup } from './ButtonGroup'
import { ButtonItem } from './ButtonItem'

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

test('<ButtonGroup/> uncontrolled', () => {
  const onChangeMock = jest.fn()
  const { container, getByLabelText, getByText } = renderWithTheme(
    <form>
      <ButtonGroup name="fruits" label="Fruits">
        <ButtonItem selected>Apples</ButtonItem>
        <ButtonItem onChange={onChangeMock}>Oranges</ButtonItem>
        <ButtonItem>Bananas</ButtonItem>
      </ButtonGroup>
    </form>
  )

  const apples = getByLabelText('Apples')
  const oranges = getByLabelText('Oranges')

  expect(apples).toHaveAttribute('checked')
  expect(oranges).not.toHaveAttribute('checked')
  expect(getByText('Apples')).toHaveStyle(`color: ${palette.purple400}`)
  expect(getByText('Oranges')).toHaveStyle(`color: ${palette.charcoal600}`)

  expect(getByLabelText('Bananas')).toBeInTheDocument()

  Simulate.change(apples)
  expect(onChangeMock).not.toHaveBeenCalled()

  Simulate.change(oranges)
  expect(onChangeMock).toHaveBeenCalled()

  const form = container.querySelector('form')
  if (form) {
    const formData = new FormData(form)
    expect(formData.get('fruits')).toEqual('Oranges')
  }
})

test('<ButtonGroup/> controlled', () => {
  const onChangeMock = jest.fn()
  const { getByLabelText } = renderWithTheme(
    <ButtonGroup value={['Bananas']} onChange={onChangeMock}>
      <ButtonItem>Apples</ButtonItem>
      <ButtonItem>Oranges</ButtonItem>
      <ButtonItem>Bananas</ButtonItem>
    </ButtonGroup>
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
  expect(onChangeMock.mock.calls[0][0]).toEqual(['Bananas', 'Apples'])
  expect(onChangeMock.mock.calls[1][0]).toEqual([])
  expect(onChangeMock.mock.calls[2][0]).toEqual(['Bananas', 'Oranges'])
})
