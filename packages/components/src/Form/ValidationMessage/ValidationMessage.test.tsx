import React from 'react'
import { createWithTheme } from 'looker-components-test-utils'
import { ValidationMessage } from './ValidationMessage'

test('An error message', () => {
  const component = createWithTheme(
    <ValidationMessage type="error" message="Error!" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
