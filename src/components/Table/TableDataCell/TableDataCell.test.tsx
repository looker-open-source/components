import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../../test/utils/create_with_theme'
import { TableDataCell } from './TableDataCell'

test('A <TableDataCell> should render', () => {
  const component = createWithTheme(<TableDataCell />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
