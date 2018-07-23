import * as React from 'react'
import { Label } from './Label'
import { create } from 'react-test-renderer'
import 'jest-styled-components'
import theme from '../../../themes'

test('A Label', () => {
  const component = create(<Label htmlFor="party">🎉</Label>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
