import 'jest-styled-components'
import React from 'react'
import { createWithTheme } from 'looker-components-test-utils'
import { TableDataCell } from './TableDataCell'

test('A <TableDataCell> should render', () => {
  const component = createWithTheme(<TableDataCell />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
