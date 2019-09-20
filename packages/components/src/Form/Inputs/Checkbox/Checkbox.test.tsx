import 'jest-styled-components'
import React from 'react'
import { mountWithTheme, assertSnapshot } from '@looker/components-test-utils'

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
