import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'

import theme from '../../../themes'
import { TableHead } from './TableHead'

test('A <TableHead> should render', () => {
  const component = create(<TableHead theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
