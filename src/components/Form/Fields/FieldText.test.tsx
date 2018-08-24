import * as React from 'react'
import { createWithTheme } from '../../../../test/utils/create_with_theme'
import { FieldText } from './FieldText'

test('A FieldText', () => {
  const component = createWithTheme(
    <FieldText label="👍" name="thumbsUp" id="thumbs-up" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
