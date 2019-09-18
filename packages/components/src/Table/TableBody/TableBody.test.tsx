import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '@looker/components-test-utils'
import { TableBody } from './TableBody'

test('A <TableBody> should render', () => {
  const component = createWithTheme(<TableBody />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
