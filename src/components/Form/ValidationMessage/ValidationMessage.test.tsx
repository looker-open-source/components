import * as React from 'react'
import { createWithTheme } from '../../../../test/utils/create_with_theme'
import { ValidationMessage } from './ValidationMessage'

test('An error message', () => {
  const component = createWithTheme(
    <ValidationMessage type="error" message="Error!" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
