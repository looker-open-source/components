import * as React from 'react'
import 'jest-styled-components'
import { FieldCheckbox } from './FieldCheckbox'
import { createWithTheme } from '../../../../test/utils/create_with_theme'

test('A FieldCheckbox', () => {
  const component = createWithTheme(
    <FieldCheckbox label="👍" name="thumbsUp" id="thumbs-up" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
