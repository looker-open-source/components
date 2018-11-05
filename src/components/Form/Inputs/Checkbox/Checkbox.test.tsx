import 'jest-styled-components'
import * as React from 'react'
import { mountWithTheme } from '../../../../../test/utils/create_with_theme'
import { assertSnapshot } from '../../../../../test/utils/snapshot'
import { Checkbox } from './Checkbox'

test('Checkbox default', () => {
  assertSnapshot(<Checkbox />)
})

test('Checkbox checked set to true', () => {
  assertSnapshot(<Checkbox checked={true} />)
})

test('Checkbox checked set to false', () => {
  assertSnapshot(<Checkbox checked={false} />)
})

test('Checkbox with name and id', () => {
  assertSnapshot(<Checkbox name="Chuck" id="Chucky" />)
})

test('Checkbox should accept disabled', () => {
  assertSnapshot(<Checkbox disabled />)
})

test('Checkbox with aria-describedby', () => {
  assertSnapshot(<Checkbox aria-describedby="some-id" />)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mountWithTheme(<Checkbox onChange={handleChange} />)

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
