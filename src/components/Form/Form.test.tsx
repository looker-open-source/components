import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../test/utils/create_with_theme'
import { ThemeProvider } from '../../styled_components'
import theme from '../../themes'
import { Button } from '../Button/Button'
import { FieldText } from './Fields/FieldText/FieldText'
import { Form } from './Form'

test('Form with one child', () => {
  const component = createWithTheme(
    <Form>
      <FieldText label="label" name="name" />
    </Form>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Form with two invalid children', () => {
  const component = createWithTheme(
    <Form
      validationStates={{
        name1: { type: 'error', message: 'e1' },
        name2: { type: 'warning', message: 'e1' },
      }}
    >
      <FieldText label="label1" name="name1" />
      <FieldText label="label2" name="name2" />
    </Form>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Form with one invalid child and a submit button', () => {
  const component = createWithTheme(
    <Form validationStates={{ name2: { type: 'error', message: 'e2' } }}>
      <FieldText label="label1" name="name1" />
      <FieldText label="label2" name="name2" />
      <Button>Submit</Button>
    </Form>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should trigger onInput handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Form onInput={handleChange}>
        <FieldText label="label" name="name" />
      </Form>
    </ThemeProvider>
  )

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Form onChange={handleChange}>
        <FieldText label="label" name="name" />
      </Form>
    </ThemeProvider>
  )

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
