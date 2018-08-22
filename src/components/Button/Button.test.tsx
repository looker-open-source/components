import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import theme from '../../themes'
import { Button, ButtonVariants } from './Button'

test('Button default', () => {
  const component = create(<Button theme={theme}>🥑</Button>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button variant outline', () => {
  const component = create(
    <Button theme={theme} variant={ButtonVariants.Outline}>
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button variant transparent', () => {
  const component = create(
    <Button theme={theme} variant={ButtonVariants.Transparent}>
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button primary color', () => {
  const component = create(
    <Button theme={theme} color="primary">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button destructive color', () => {
  const component = create(
    <Button theme={theme} color="destructive">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
