import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '@looker/components-test-utils'
import { Table } from './Table'

test('A Table should render', () => {
  const component = createWithTheme(<Table />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
