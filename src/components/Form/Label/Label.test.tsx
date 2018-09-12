import * as React from 'react'
import { createWithTheme } from '../../../../test/utils/create_with_theme'
import { Label } from './Label'

test('A Label', () => {
  const component = createWithTheme(<Label htmlFor="party">🎉</Label>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
