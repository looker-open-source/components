import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { fireEvent } from '@testing-library/react'
import {
  assertSnapshotShallow,
  renderWithTheme,
} from 'looker-components-test-utils'
import { theme } from 'looker-design-tokens'
import { ThemeProvider } from 'styled-components'

import { FieldColor } from './FieldColor'

test('Default FieldColor', () => {
  assertSnapshotShallow(<FieldColor />)
})

test('FieldColor with hidden input', () => {
  const { queryByRole } = renderWithTheme(
    <FieldColor value="yellow" hideInput />
  )
  expect(queryByRole('input')).not.toBeInTheDocument()
})

test('FieldColor starts with a named color value', () => {
  const { getByDisplayValue } = renderWithTheme(<FieldColor value="green" />)
  expect(getByDisplayValue('green')).toBeInTheDocument()
})

test('FieldColor starts with a named color value', () => {
  const { getByDisplayValue } = renderWithTheme(<FieldColor value="green" />)
  fireEvent.change(getByDisplayValue('green'), { target: { value: 'blue' } })
  expect(getByDisplayValue('blue')).toBeInTheDocument()
})

const FieldColorValidationMessage = () => {
  return (
    <ThemeProvider theme={theme}>
      <FieldColor validationMessage={{ message: 'Error!', type: 'error' }} />
    </ThemeProvider>
  )
}

test('FieldColor with a validation message', () => {
  const { queryByText } = renderWithTheme(<FieldColorValidationMessage />)
  expect(queryByText('Error!')).toBeInTheDocument()
})
