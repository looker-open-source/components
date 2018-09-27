import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../../test/utils/create_with_theme'
import { TableRow } from './TableRow'

test('A <TableRow> should render', () => {
  const component = createWithTheme(<TableRow />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
