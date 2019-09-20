import 'jest-styled-components'
import React from 'react'
import { mountWithTheme, assertSnapshot } from '@looker/components-test-utils'

import { Slider } from './Slider'

test('Slider default', () => {
  assertSnapshot(<Slider />)
})

test('Slider with min and max', () => {
  assertSnapshot(<Slider min={1} max={11} step={0.01} value={11} />)
})

test('Slider with name and id', () => {
  assertSnapshot(<Slider name="Slip" id="Slide" />)
})

test('Slider should accept disabled', () => {
  assertSnapshot(<Slider disabled />)
})

test('Slider with aria-describedby', () => {
  assertSnapshot(<Slider aria-describedby="some-id" />)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++
  const wrapper = mountWithTheme(<Slider onChange={handleChange} />)
  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
