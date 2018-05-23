import * as React from 'react'
import { Text } from './Text'

import { create } from 'react-test-renderer'

test('A default Text component', () => {
  const component = create(<Text>🥑</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A span Text component', () => {
  const component = create(<Text element="span">🥑</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


test('A code Text component', () => {
  const component = create(<Text element="code">🥑</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


test('A Text component resized', () => {
  const component = create(<Text size="d1">🥑</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component weight', () => {
  const component = create(<Text weight="light">🥑</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component tuncated', () => {
  const component = create(<Text weight="light" truncate>🥑</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


test('A Text component with mode', () => {
  const component = create(<Text mode="subdued">🥑</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component transformed', () => {
  const component = create(<Text transform="caps">🥑</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})



