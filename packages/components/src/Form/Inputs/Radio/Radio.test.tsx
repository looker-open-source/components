import 'jest-styled-components'
import React from 'react'
import { mountWithTheme, assertSnapshot } from 'looker-components-test-utils'

import { Radio } from './Radio'

test('Radio default', () => {
  assertSnapshot(<Radio />)
})

test('Radio checked set to true', () => {
  assertSnapshot(<Radio checked={true} />)
})

test('Radio checked set to false', () => {
  assertSnapshot(<Radio checked={false} />)
})

test('Radio with name and id', () => {
  assertSnapshot(<Radio name="Chuck" id="Chucky" />)
})

test('Radio should accept disabled', () => {
  assertSnapshot(<Radio disabled />)
})

test('Radio with aria-describedby', () => {
  assertSnapshot(<Radio aria-describedby="some-id" />)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mountWithTheme(<Radio onChange={handleChange} />)

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
