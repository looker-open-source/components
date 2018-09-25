import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../../test/utils/create_with_theme'
import { TableHead } from './TableHead'

test('A <TableHead> should render', () => {
  const component = createWithTheme(<TableHead />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
