import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../../test/utils/create_with_theme'
import { TableBody } from './TableBody'

test('A <TableBody> should render', () => {
  const component = createWithTheme(<TableBody />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
