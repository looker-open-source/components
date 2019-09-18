import 'jest-styled-components'
import React from 'react'
import { mountWithTheme } from '@looker/components-test-utils'
import { assertSnapshot } from '@looker/components-test-utils'
import { ToggleSwitch } from './ToggleSwitch'

test('ToggleSwitch default', () => {
  assertSnapshot(<ToggleSwitch />)
})

test('ToggleSwitch on set to true', () => {
  assertSnapshot(<ToggleSwitch on={true} />)
})

test('ToggleSwitch on set to false', () => {
  assertSnapshot(<ToggleSwitch on={false} />)
})

test('ToggleSwitch that is disabled', () => {
  assertSnapshot(<ToggleSwitch on={true} disabled />)
})

test('Big ToggleSwitch', () => {
  assertSnapshot(<ToggleSwitch size={60} />)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mountWithTheme(<ToggleSwitch onChange={handleChange} />)

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
