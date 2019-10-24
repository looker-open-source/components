import 'jest-styled-components'
import React from 'react'
import { createWithTheme } from 'looker-components-test-utils'
import { TableFoot } from './TableFoot'

test('A <TableFoot> should render', () => {
  const component = createWithTheme(<TableFoot />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
