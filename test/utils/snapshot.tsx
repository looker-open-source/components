import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from './create_with_theme'

export const assertSnapshot = <T extends {}>(
  element: React.ReactElement<T>
) => {
  expect(createWithTheme(element).toJSON()).toMatchSnapshot()
}
