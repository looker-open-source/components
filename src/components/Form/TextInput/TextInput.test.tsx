import * as React from 'react'
import { TextInput } from './TextInput'
import { create } from 'react-test-renderer'
import 'jest-styled-components'
import theme from '../../../themes'

test('A TextInput', () => {
  const component = create(
    <TextInput label="🍕🎉" name="pizzaParty" id="pizza-party" theme={theme} />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
