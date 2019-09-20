import { mount, render } from 'enzyme'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import {
  createWithTheme,
  mountWithTheme,
  assertSnapshot,
} from '@looker/components-test-utils'

import { theme } from '@looker/design-tokens'
import { Label } from '../../Label/Label'
import { FieldSelect } from './FieldSelect'

test('A FieldSelect', () => {
  assertSnapshot(<FieldSelect label="👍" name="thumbsUp" id="thumbs-up" />)
})

test('FieldSelect supports labelWeight', () => {
  assertSnapshot(
    <FieldSelect
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      labelFontWeight="normal"
    />
  )
})

test('Should accept a value', () => {
  const wrapper = render(
    <ThemeProvider theme={theme}>
      <FieldSelect
        label="👍"
        name="thumbsUp"
        id="thumbs-up"
        value="foobar"
        options={[{ label: 'Foodbar', value: 'foobar' }]}
        readOnly
      />
    </ThemeProvider>
  )

  const select = wrapper.find('select')
  expect(select.find('option[selected]').prop('value')).toEqual('foobar')
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <FieldSelect
        label="👍"
        name="thumbsUp"
        id="thumbs-up"
        value="foobar"
        onChange={handleChange}
      />
    </ThemeProvider>
  )

  wrapper.find('select').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})

test('A required FieldSelect', () => {
  const component = createWithTheme(
    <FieldSelect label="👍" name="thumbsUp" id="thumbs-up" required />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A FieldSelect with an error validation aligned to the bottom', () => {
  const component = mountWithTheme(
    <FieldSelect
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ message: 'This is an error', type: 'error' }}
      alignValidationMessage="bottom"
    />
  )
  expect(component.find(Label).props().htmlFor).toEqual(
    component.find('select').props().id
  )
})

test('A FieldSelect with an error validation aligned to the left', () => {
  const component = createWithTheme(
    <FieldSelect
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ message: 'This is an error', type: 'error' }}
      alignValidationMessage="left"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A FieldSelect with an error validation aligned to the right', () => {
  const component = createWithTheme(
    <FieldSelect
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ message: 'This is an error', type: 'error' }}
      alignValidationMessage="right"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
