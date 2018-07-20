import * as React from 'react'
import 'jest-styled-components'
import { create } from 'react-test-renderer'

import { Table } from './Table'
import theme from '../../themes'

test('A Table should render', () => {
  const component = create(<Table theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
