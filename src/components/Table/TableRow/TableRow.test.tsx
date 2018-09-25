import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'

import { theme } from '../../../style/theme'
import { TableRow } from './TableRow'

test('A <TableRow> should render', () => {
  const component = create(<TableRow theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
