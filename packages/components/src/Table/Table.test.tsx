import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../test/utils/create_with_theme'
import { Table } from './Table'

test('A Table should render', () => {
  const component = createWithTheme(<Table />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
