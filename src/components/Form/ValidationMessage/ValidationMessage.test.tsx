import * as React from 'react'
import { createWithTheme } from '../../../../test/utils/create_with_theme'
import { ValidationMessage } from './ValidationMessage'

test('An error message', () => {
  const component = createWithTheme(
    <ValidationMessage type="error">Error!</ValidationMessage>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A warning message', () => {
  const component = createWithTheme(
    <ValidationMessage type="warning">Warning</ValidationMessage>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('An info message', () => {
  const component = createWithTheme(
    <ValidationMessage type="info">Info</ValidationMessage>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A success message', () => {
  const component = createWithTheme(
    <ValidationMessage type="success">Success!</ValidationMessage>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
