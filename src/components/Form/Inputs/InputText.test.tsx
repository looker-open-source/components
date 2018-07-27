import * as React from 'react'
import { create } from 'react-test-renderer'
import 'jest-styled-components'
import theme from '../../../themes'
import { InputText } from './InputText'

test('An InputText', () => {
  const component = create(
    <InputText label="👍" name="thumbsUp" id="thumbs-up" theme={theme} />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
