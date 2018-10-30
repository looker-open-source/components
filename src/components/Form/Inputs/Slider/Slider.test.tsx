import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../../../test/utils/create_with_theme'
import { Slider } from './Slider'

test('Slider default', () => {
  const component = createWithTheme(<Slider />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Slider with min and max', () => {
  const component = createWithTheme(
    <Slider min={1} max={11} step={0.01} value={11} />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Slider with name and id', () => {
  const component = createWithTheme(<Slider name="Slip" id="Slide" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Slider should accept disabled', () => {
  const component = createWithTheme(<Slider disabled />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Slider with aria-describedby', () => {
  const component = createWithTheme(<Slider aria-describedby="some-id" />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mount(<Slider onChange={handleChange} />)

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
