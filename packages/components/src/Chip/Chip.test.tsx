import { assertSnapshot, renderWithTheme } from '@looker/components-test-utils'
import React from 'react'
import { fireEvent } from '@testing-library/react'
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
    <Chip onDelete={onDeleteTrigger} data-testid="chip">
      clickable
    </Chip>
  )

  fireEvent.click(getByRole('button'))
  expect(onDeleteTrigger).toHaveBeenCalledTimes(1)

  const chip = getByTestId('chip')

  fireEvent.keyDown(chip, {
    key: 'Backspace',
  })
  expect(onDeleteTrigger).toHaveBeenCalledTimes(2)
})
