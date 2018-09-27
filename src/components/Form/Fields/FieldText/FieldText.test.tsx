import { mount } from 'enzyme'
import * as React from 'react'
import { createWithTheme } from '../../../../../test/utils/create_with_theme'
import { theme, ThemeProvider } from '../../../../style'
import { FieldText } from './FieldText'

test('A FieldText', () => {
  const component = createWithTheme(
    <FieldText label="👍" name="thumbsUp" id="thumbs-up" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should accept a value', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <FieldText
        label="👍"
        name="thumbsUp"
        id="thumbs-up"
        value="foobar"
        readOnly
      />
    </ThemeProvider>
  )

  const input = wrapper.find('input')
  expect(input.prop('value')).toEqual('foobar')
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <FieldText
        label="👍"
        name="thumbsUp"
        id="thumbs-up"
        value="foobar"
        onChange={handleChange}
      />
    </ThemeProvider>
  )

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})

test('A FieldText with an error validation aligned to the bottom', () => {
  const component = createWithTheme(
    <FieldText
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ type: 'error', message: 'This is an error' }}
      alignValidationMessage="bottom"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A FieldText with a warning validation aligned to the left', () => {
  const component = createWithTheme(
    <FieldText
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ type: 'warning', message: 'This is a warning' }}
      alignValidationMessage="left"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A FieldText with an info validation aligned to the top', () => {
  const component = createWithTheme(
    <FieldText
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ type: 'info', message: 'This is info' }}
      alignValidationMessage="top"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A FieldText with a success validation aligned to the right', () => {
  const component = createWithTheme(
    <FieldText
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ type: 'success', message: 'This is a success' }}
      alignValidationMessage="right"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
