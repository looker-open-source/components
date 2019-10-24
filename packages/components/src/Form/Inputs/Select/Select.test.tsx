import 'jest-styled-components'
import React from 'react'
import { mountWithTheme, assertSnapshot } from 'looker-components-test-utils'

import { Select } from './Select'

test('Select default', () => {
  assertSnapshot(<Select />)
})

test('Select with name and id', () => {
  assertSnapshot(<Select name="Bob" id="Bobby" />)
})

test('Select should accept disabled', () => {
  assertSnapshot(<Select disabled />)
})

test('Select should accept empty options array', () => {
  assertSnapshot(<Select options={[]} />)
})

test('Select with a placeholder', () => {
  assertSnapshot(<Select placeholder="I am a placeholder" />)
})

test('Select placeholder option does not have a value', () => {
  const select = mountWithTheme(<Select placeholder="Boo!" />)
  expect(select.find('option').prop('value')).toEqual('')
})

test('Select should accept readOnly', () => {
  assertSnapshot(<Select readOnly />)
})

test('Select should accept required', () => {
  assertSnapshot(<Select required />)
})

test('Select with a value', () => {
  const options = [
    { label: 'thing', value: '1' },
    { label: "Some Value's Label", value: 'Some Value' },
    { label: 'other', value: '2' },
  ]
  assertSnapshot(<Select value="Some Value" options={options} />)
})

test('Select with aria-describedby', () => {
  assertSnapshot(<Select aria-describedby="some-id" />)
})

test('Select with an error validation', () => {
  assertSnapshot(<Select validationType="error" />)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mountWithTheme(<Select onChange={handleChange} />)

  wrapper.find('select').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
