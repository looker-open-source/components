import 'jest-styled-components'
import * as React from 'react'
import { mountWithTheme } from '../../../../../test/utils/create_with_theme'
import { assertSnapshot } from '../../../../../test/utils/snapshot'
import { ToggleSwitch } from './ToggleSwitch'

test('ToggleSwitch default', () => {
  assertSnapshot(<ToggleSwitch label="Default toggle" />)
})

test('ToggleSwitch on set to true', () => {
  assertSnapshot(<ToggleSwitch label="On toggle" on={true} />)
})

test('ToggleSwitch on set to false', () => {
  assertSnapshot(<ToggleSwitch label="Off toggle" on={false} />)
})

test('ToggleSwitch that is disabled', () => {
  assertSnapshot(<ToggleSwitch label="Disabled" on={true} disabled />)
})

test('Big ToggleSwitch', () => {
  assertSnapshot(<ToggleSwitch label="Large toggle" size={60} />)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mountWithTheme(
    <ToggleSwitch label="On change" onChange={handleChange} />
  )

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
