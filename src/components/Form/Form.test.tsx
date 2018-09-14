import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import { createWithTheme } from '../../../test/utils/create_with_theme'
import theme from '../../themes'
import { FieldText } from './Fields/FieldText'
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
    <Form validationErrors={{ name1: 'error1', name2: 'error2' }}>
      <FieldText label="label1" name="name1" />
      <FieldText label="label2" name="name2" />
    </Form>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
