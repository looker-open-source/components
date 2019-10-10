import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Simulate } from 'react-dom/test-utils'

import { renderWithTheme } from '@looker/components-test-utils'
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
