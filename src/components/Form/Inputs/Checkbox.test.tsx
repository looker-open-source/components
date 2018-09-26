import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../../test/utils/create_with_theme'
import { theme } from '../../../style'
import { Checkbox } from './Checkbox'

test('Checkbox default', () => {
  const component = createWithTheme(<Checkbox />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Checkbox checked set to true', () => {
  const component = createWithTheme(<Checkbox checked={true} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Checkbox checked set to false', () => {
  const component = createWithTheme(<Checkbox checked={false} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Checkbox with name and id', () => {
  const component = createWithTheme(<Checkbox name="Chuck" id="Chucky" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Checkbox should accept disabled', () => {
  const component = createWithTheme(<Checkbox disabled />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Checkbox with aria-describedby', () => {
  const component = createWithTheme(<Checkbox aria-describedby="some-id" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mount(<Checkbox theme={theme} onChange={handleChange} />)

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
