import * as React from 'react'
import { create } from 'react-test-renderer'
import 'jest-styled-components'
import theme from '../../../themes'
import { FieldText } from './FieldText'

test('A FieldText', () => {
  const component = create(
    <FieldText label="👍" name="thumbsUp" id="thumbs-up" theme={theme} />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
