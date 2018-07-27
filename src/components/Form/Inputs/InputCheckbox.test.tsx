import * as React from 'react'
import { create } from 'react-test-renderer'
import 'jest-styled-components'
import theme from '../../../themes'
import { InputCheckbox } from './InputCheckbox'

test('An InputCheckbox', () => {
  const component = create(
    <InputCheckbox name="thumbsUp" id="thumbs-up" theme={theme} />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
