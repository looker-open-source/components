import { assertSnapshot, renderWithTheme } from '@looker/components-test-utils'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { fireEvent } from '@testing-library/react'
import { theme } from '@looker/design-tokens'
import { Chip } from './Chip'

test('Chip renders correctly', () => {
  assertSnapshot(<Chip>chip</Chip>)
})

test('Chip renders disabled', () => {
  assertSnapshot(<Chip disabled>chip</Chip>)
})

test('Chip onDelete renders correctly', () => {
  const onDeleteTrigger = jest.fn()

  const { getByRole } = renderWithTheme(
    <ThemeProvider theme={theme}>
      <Chip onDelete={onDeleteTrigger}>clickable</Chip>
    </ThemeProvider>
  )

  fireEvent.click(getByRole('button'))
  expect(onDeleteTrigger).toHaveBeenCalledTimes(1)

  fireEvent.keyDown(getByRole('button'), {
    charCode: 8,
    code: 8,
    key: 'Backspace',
  })
  expect(onDeleteTrigger).toHaveBeenCalledTimes(2)
})
