import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'

import theme from '../../../themes'
import { TableHeaderCell } from './TableHeaderCell'

test('A <TableHeaderCell> should render', () => {
  const component = create(<TableHeaderCell theme={theme}>1</TableHeaderCell>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
