import * as React from 'react'
import 'jest-styled-components'
import { create } from 'react-test-renderer'

import theme from '../../../themes'
import { TableDataCell } from './TableDataCell'

test('A <TableDataCell> should render', () => {
  const component = create(<TableDataCell theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
