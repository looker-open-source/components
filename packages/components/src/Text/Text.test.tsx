import React from 'react'
import { createWithTheme } from 'looker-components-test-utils'
import { Text } from './Text'

test('A default Text component', () => {
  const component = createWithTheme(<Text>Hello</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component resized', () => {
  const component = createWithTheme(<Text fontSize="xxxxlarge">Hello</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component weight', () => {
  const component = createWithTheme(<Text fontWeight="bold">Hello</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component with variant', () => {
  const component = createWithTheme(<Text variant="critical">Hello</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component text transformed', () => {
  const component = createWithTheme(
    <Text textTransform="uppercase">Hello</Text>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component wrapped', () => {
  const component = createWithTheme(<Text wrap>Hello</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

// test('A Text component aligned', () => {
//   const component = createWithTheme(<Text textAlign="right">Hello</Text>)
//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('A Text component decorated', () => {
  const component = createWithTheme(
    <Text textDecoration="line-through">Hello</Text>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
