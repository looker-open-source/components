import 'jest-styled-components'
import React from 'react'
import { createWithTheme } from '@looker/components-test-utils'
import { TableRow } from './TableRow'

test('A <TableRow> should render', () => {
  const component = createWithTheme(<TableRow />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
