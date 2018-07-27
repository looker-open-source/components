import * as React from 'react'
import { Label } from './Label'
import { createWithTheme } from '../../../../test/utils/create_with_theme'

test('A Label', () => {
  const component = createWithTheme(<Label htmlFor="party">🎉</Label>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
