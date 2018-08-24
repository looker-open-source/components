import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../../test/utils/create_with_theme'
import { FieldCheckbox } from './FieldCheckbox'

test('A FieldCheckbox', () => {
  const component = createWithTheme(
    <FieldCheckbox label="👍" name="thumbsUp" id="thumbs-up" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
