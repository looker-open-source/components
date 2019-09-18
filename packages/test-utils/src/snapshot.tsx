import 'jest-styled-components'
import React from 'react'
import { createWithTheme, shallowWithTheme } from './create_with_theme'

export const assertSnapshot = <T extends {}>(
  element: React.ReactElement<T>
) => {
  expect(createWithTheme(element).toJSON()).toMatchSnapshot()
}

export const assertSnapshotShallow = <T extends {}>(
  element: React.ReactElement<T>
) => {
  expect(shallowWithTheme(element)).toMatchSnapshot()
}
