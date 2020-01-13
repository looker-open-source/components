import { assertSnapshot } from '@looker/components-test-utils'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent } from '@testing-library/react'
import { theme } from '@looker/design-tokens'
import { Chip } from './Chip'

test('Chip renders correctly', () => {
  assertSnapshot(<Chip>chip</Chip>)
})

test('Chip renders disabled', () => {
  assertSnapshot(<Chip disabled>chip</Chip>)
})

test('Chip onDelete renders correctly', () => {
  const onDeleteTrigger = () => alert('hello')
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Chip onDelete={onDeleteTrigger}>clickable</Chip>
    </ThemeProvider>
  )

  fireEvent.click(getByText('clickable'))
  expect(getByText('clickable')).toHaveBeenCalled()

  fireEvent.keyDown(getByText('clickable'), {
    charCode: 8,
    code: 8,
    key: 'Backspace',
  })
  expect(getByText('clickable')).toHaveBeenCalled()
})
