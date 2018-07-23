import * as React from 'react'
import { Checkbox } from './CheckBox'
import { create } from 'react-test-renderer'
import 'jest-styled-components'
import theme from '../../../themes'

test('A TextInput', () => {
  const component = create(
    <Checkbox label="👍" name="thumbsUp" id="thumbs-up" theme={theme} />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
