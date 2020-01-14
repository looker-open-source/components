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

  const { getByTestId, getByRole } = renderWithTheme(
    <ThemeProvider theme={theme}>
      <Chip onDelete={onDeleteTrigger} data-testid="chip">
        clickable
      </Chip>
    </ThemeProvider>
  )

  fireEvent.click(getByRole('button'))
  expect(onDeleteTrigger).toHaveBeenCalledTimes(1)

  const chip = getByTestId('chip')

  fireEvent.keyDown(chip, {
    key: 'Backspace',
  })
  expect(onDeleteTrigger).toHaveBeenCalledTimes(2)
})
