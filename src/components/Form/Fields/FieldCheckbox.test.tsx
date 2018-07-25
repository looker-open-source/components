import * as React from 'react'
import { create } from 'react-test-renderer'
import 'jest-styled-components'
import theme from '../../../themes'
import { FieldCheckbox } from './FieldCheckbox'

test('A FieldCheckbox', () => {
  const component = create(
    <FieldCheckbox label="👍" name="thumbsUp" id="thumbs-up" theme={theme} />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
