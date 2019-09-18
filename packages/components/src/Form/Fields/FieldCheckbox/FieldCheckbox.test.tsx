import 'jest-styled-components'
import React from 'react'
import { createWithTheme, mountWithTheme } from '@looker/components-test-utils'
import { Label } from '../../Label/Label'
import { FieldCheckbox } from './FieldCheckbox'

test('A FieldCheckbox', () => {
  const component = createWithTheme(
    <FieldCheckbox label="👍" name="thumbsUp" id="thumbs-up" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A FieldCheckbox with checked value', () => {
  const component = createWithTheme(
    <FieldCheckbox label="👍" name="thumbsUp" id="thumbs-up" checked />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A required FieldCheckbox', () => {
  const component = createWithTheme(
    <FieldCheckbox label="👍" name="thumbsUp" id="thumbs-up" required />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A FieldCheckbox with an error validation aligned to the bottom', () => {
  const component = mountWithTheme(
    <FieldCheckbox
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ type: 'error', message: 'This is an error' }}
      alignValidationMessage="bottom"
    />
  )
  expect(component.find(Label).props().htmlFor).toEqual(
    component.find('input').props().id
  )
})
