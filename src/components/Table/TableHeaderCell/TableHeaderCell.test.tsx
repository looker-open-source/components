import * as React from 'react'
import 'jest-styled-components'
import { create } from 'react-test-renderer'

import { TableHeaderCell } from './TableHeaderCell'
import theme from '../../../themes'

test('A <TableHeaderCell> should render', () => {
  const component = create(<TableHeaderCell theme={theme}>1</TableHeaderCell>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
