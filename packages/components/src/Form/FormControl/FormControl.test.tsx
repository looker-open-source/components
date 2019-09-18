import 'jest-styled-components'
import React from 'react'
import { createWithTheme } from '@looker/components-test-utils'
import { FormControl } from './FormControl'

test('A FormControl', () => {
  const component = createWithTheme(<FormControl />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
