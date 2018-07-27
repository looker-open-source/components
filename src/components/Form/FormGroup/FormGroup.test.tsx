import * as React from 'react'
import { FormControl } from './FormGroup'
import { create } from 'react-test-renderer'
import 'jest-styled-components'
import theme from '../../../themes'

test('A FormControl', () => {
  const component = create(<FormControl theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
