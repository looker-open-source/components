import * as React from 'react'
import 'jest-styled-components'
import { create } from 'react-test-renderer'

import { TableRow } from './TableRow'
import theme from '../../../themes'

test('A <TableRow> should render', () => {
  const component = create(<TableRow theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
