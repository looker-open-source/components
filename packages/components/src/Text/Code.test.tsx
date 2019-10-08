import React from 'react'
import { createWithTheme } from '@looker/components-test-utils'
import { Code } from './Code'

test('A default Code component', () => {
  const component = createWithTheme(<Code>Hello</Code>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Code component resized', () => {
  const component = createWithTheme(<Code fontSize="xxxxlarge">Hello</Code>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Code component aligned', () => {
  const component = createWithTheme(<Code textAlign="right">Hello</Code>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Code component weight', () => {
  const component = createWithTheme(<Code fontWeight="bold">Hello</Code>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
