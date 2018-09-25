import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import { theme } from '../../../style/theme'
import { FormControl } from './FormGroup'

test('A FormControl', () => {
  const component = create(<FormControl theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
