import * as React from 'react'
import { FormGroup } from './FormGroup'
import { create } from 'react-test-renderer'
import 'jest-styled-components'
import theme from '../../../themes'

test('A FormGroup', () => {
  const component = create(<FormGroup theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
