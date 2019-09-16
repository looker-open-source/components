import 'jest-styled-components'
import * as React from 'react'
import { mountWithTheme } from '../../../../../test/utils/create_with_theme'
import { assertSnapshot } from '../../../../../test/utils/snapshot'
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
