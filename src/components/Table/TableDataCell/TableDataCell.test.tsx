import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'

import theme from '../../../theme'
import { TableDataCell } from './TableDataCell'

test('A <TableDataCell> should render', () => {
  const component = create(<TableDataCell theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
