import 'jest-styled-components'
import * as React from 'react'
import { mountWithTheme } from '../../../../../test/utils/create_with_theme'
import { assertSnapshot } from '../../../../../test/utils/snapshot'
import { InputText } from './InputText'

beforeEach(() => {
  global.console.warn = jest.fn()
})

afterEach(() => {
  jest.clearAllMocks()
})

test('InputText default', () => {
  assertSnapshot(<InputText />)
})

test('InputText with name and id', () => {
  assertSnapshot(<InputText name="Bob" id="Bobby" />)
})

test('InputText should accept disabled', () => {
  assertSnapshot(<InputText disabled />)
})

test('InputText with a placeholder', () => {
  assertSnapshot(<InputText placeholder="I am a placeholder" />)
})

test('InputText should accept readOnly', () => {
  assertSnapshot(<InputText readOnly />)
})

test('InputText should accept required', () => {
  assertSnapshot(<InputText required />)
})

test('InputText with a value', () => {
  assertSnapshot(<InputText value="Some value" />)
})

test('InputText with aria-describedby', () => {
  assertSnapshot(<InputText aria-describedby="some-id" />)
})

test('InputText with an error validation', () => {
  assertSnapshot(<InputText validationType="error" />)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mountWithTheme(<InputText onChange={handleChange} />)

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})

test('Should call console.warn if `hidden` attribute is used', () => {
  expect(window.console.warn).not.toHaveBeenCalled()

  mountWithTheme(<InputText hidden />)

  expect(window.console.warn).toHaveBeenCalledTimes(1)
})
