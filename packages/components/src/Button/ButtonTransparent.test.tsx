import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import { assertSnapshotShallow } from 'looker-components-test-utils'
import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'looker-design-tokens'
import { ButtonTransparent } from './ButtonTransparent'

test('ButtonTransparent is rendered ', () => {
  assertSnapshotShallow(<ButtonTransparent>transparent</ButtonTransparent>)
})

test('ButtonTransparent has the correct style', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <ButtonTransparent>transparent</ButtonTransparent>
    </ThemeProvider>
  )

  expect(getByText('transparent')).toMatchSnapshot()
})
