import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'

import { theme } from '../../../theme'
import { TableBody } from './TableBody'

test('A <TableBody> should render', () => {
  const component = create(<TableBody theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
