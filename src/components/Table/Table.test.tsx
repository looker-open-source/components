import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'

import { theme } from '../../theme'
import { Table } from './Table'

test('A Table should render', () => {
  const component = create(<Table theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
