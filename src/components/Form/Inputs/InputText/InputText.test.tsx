import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import theme from '../../../../themes'
import { InputText } from './InputText'

test('InputText default', () => {
  const component = create(<InputText theme={theme} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('InputText with name and id', () => {
  const component = create(<InputText theme={theme} name="Bob" id="Bobby" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('InputText should accept disabled', () => {
  const component = create(<InputText theme={theme} disabled />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('InputText with a placeholder', () => {
  const component = create(
    <InputText theme={theme} placeholder="I am a placeholder" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('InputText should accept readOnly', () => {
  const component = create(<InputText theme={theme} readOnly />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('InputText should accept required', () => {
  const component = create(<InputText theme={theme} required />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('InputText with a value', () => {
  const component = create(<InputText theme={theme} value="Some value" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('InputText with aria-describedby', () => {
  const component = create(
    <InputText theme={theme} aria-describedby="some-id" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('InputText with an error validation', () => {
  const component = create(<InputText theme={theme} validationType="error" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('InputText with a warning validation', () => {
  const component = create(<InputText theme={theme} validationType="warning" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('InputText with an info validation', () => {
  const component = create(<InputText theme={theme} validationType="info" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('InputText with a success validation', () => {
  const component = create(<InputText theme={theme} validationType="success" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mount(<InputText theme={theme} onChange={handleChange} />)

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
