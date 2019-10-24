import 'jest-styled-components'
import React from 'react'
import { createWithTheme } from 'looker-components-test-utils'
import { TableHead } from './TableHead'

test('A <TableHead> should render', () => {
  const component = createWithTheme(<TableHead />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
