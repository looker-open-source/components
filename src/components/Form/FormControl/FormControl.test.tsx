import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../../test/utils/create_with_theme'
import { FormControl } from './FormControl'

test('A FormControl', () => {
  const component = createWithTheme(<FormControl />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
