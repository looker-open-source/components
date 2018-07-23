import * as React from 'react'
import { Input, InputTypes } from './Input'
import { create } from 'react-test-renderer'
import 'jest-styled-components'
import theme from '../../../themes'

test('An Input', () => {
  const component = create(
    <Input type={InputTypes.Text} id="test" name="test" theme={theme} />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('An Input with a placeholder', () => {
  const component = create(
    <Input
      type={InputTypes.Text}
      id="test"
      name="test"
      placeholder="🍕"
      theme={theme}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A required Input', () => {
  const component = create(
    <Input
      type={InputTypes.Text}
      id="test"
      name="test"
      required={true}
      theme={theme}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
