import { mount } from 'enzyme'
import 'jest-styled-components'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createWithTheme, mountWithTheme } from 'looker-components-test-utils'
import { theme } from 'looker-design-tokens'
import { Button } from '../Button/Button'
import { FieldText } from './Fields/FieldText/FieldText'
import { Form } from './Form'
import { ValidationMessage } from './ValidationMessage'

test('Form with one child', () => {
  const component = createWithTheme(
    <Form>
      <FieldText label="label" id="text-field" name="name" />
    </Form>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Form with two invalid children', () => {
  const component = mountWithTheme(
    <Form
      validationMessages={{
        name1: { message: 'e1', type: 'error' },
        name2: { message: 'e2', type: 'error' },
      }}
    >
      <FieldText label="label1" id="text-field" name="name1" />
      <FieldText label="label2" id="text-field" name="name2" />
    </Form>
  )

  const messages = component.find(ValidationMessage)

  expect(messages).toHaveLength(2)
  expect(messages.map(validationMessage => validationMessage.text())).toEqual([
    'e1',
    'e2',
  ])
})

test('Form with one invalid child and a submit button', () => {
  const component = mountWithTheme(
    <Form validationMessages={{ name2: { message: 'e2', type: 'error' } }}>
      <FieldText label="label1" id="text-field" name="name1" />
      <FieldText label="label2" id="text-field" name="name2" />
      <Button>Submit</Button>
    </Form>
  )
  expect(component.find(ValidationMessage).text()).toEqual('e2')
})

test('Should trigger onInput handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Form onInput={handleChange}>
        <FieldText label="label" id="text-field" name="name" />
      </Form>
    </ThemeProvider>
  )

  wrapper.find('input').simulate('input', { target: { value: '' } })
  expect(counter).toEqual(1)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Form onChange={handleChange}>
        <FieldText label="label" id="text-field" name="name" />
      </Form>
    </ThemeProvider>
  )

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})

test('Should trigger onSubmit handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Form onChange={handleChange}>
        <FieldText label="label" id="text-field" name="name" />
        <Button type="submit">Submit</Button>
      </Form>
    </ThemeProvider>
  )

  wrapper.find('button').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
