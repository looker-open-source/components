import * as React from 'react'
import 'jest-styled-components'
import { create } from 'react-test-renderer'

import theme from '../../../themes'
import { TableBody } from './TableBody'

test('A <TableBody> should render', () => {
  const component = create(<TableBody theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
