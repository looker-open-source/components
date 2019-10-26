import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import { assertSnapshotShallow } from 'looker-components-test-utils'
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'looker-design-tokens'
import { ButtonOutline } from './ButtonOutline'

test('ButtonOutline is rendered ', () => {
  assertSnapshotShallow(<ButtonOutline>Outline</ButtonOutline>)
})

test('ButtonOutline has the correct style', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <ButtonOutline>Outline</ButtonOutline>
    </ThemeProvider>
  )

  expect(getByText('Outline')).toMatchSnapshot()
})
