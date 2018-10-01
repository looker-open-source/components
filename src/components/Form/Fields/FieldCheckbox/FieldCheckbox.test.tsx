import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../../../test/utils/create_with_theme'
import { FieldCheckbox } from './FieldCheckbox'

test('A FieldCheckbox', () => {
  const component = createWithTheme(
    <FieldCheckbox label="👍" name="thumbsUp" id="thumbs-up" />
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
  const component = createWithTheme(
    <FieldCheckbox
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ type: 'error', message: 'This is an error' }}
      alignValidationMessage="bottom"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree!.children![0].props.htmlFor).toEqual(
    tree!.children![1].children![1].props.id
  )
})
