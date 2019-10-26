import 'jest-styled-components'
import { ReactElement } from 'react'
import { createWithTheme, shallowWithTheme } from './create_with_theme'

export const assertSnapshot = <T extends {}>(element: ReactElement<T>) => {
  expect(createWithTheme(element).toJSON()).toMatchSnapshot()
}

export const assertSnapshotShallow = <T extends {}>(
  element: ReactElement<T>
) => {
  expect(shallowWithTheme(element)).toMatchSnapshot()
}
