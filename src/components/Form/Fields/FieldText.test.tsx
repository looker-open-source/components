import * as React from 'react'
import { FieldText } from './FieldText'
import { createWithTheme } from '../../../../test/utils/create_with_theme'

test('A FieldText', () => {
  const component = createWithTheme(
    <FieldText label="👍" name="thumbsUp" id="thumbs-up" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
