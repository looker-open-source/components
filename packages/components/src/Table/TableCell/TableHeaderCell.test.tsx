import 'jest-styled-components'
import React from 'react'
import { createWithTheme } from 'looker-components-test-utils'
import { TableHeaderCell } from './TableHeaderCell'

test('A <TableHeaderCell> should render', () => {
  const component = createWithTheme(<TableHeaderCell>1</TableHeaderCell>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
