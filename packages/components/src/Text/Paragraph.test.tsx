import React from 'react'
import { createWithTheme } from 'looker-components-test-utils'
import { Paragraph } from './Paragraph'

test('A default Paragraph component', () => {
  const component = createWithTheme(<Paragraph>Hello</Paragraph>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragraph component resized', () => {
  const component = createWithTheme(
    <Paragraph fontSize="xxxxlarge">Hello</Paragraph>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragraph component aligned', () => {
  const component = createWithTheme(
    <Paragraph textAlign="right">Hello</Paragraph>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragraph component weight', () => {
  const component = createWithTheme(
    <Paragraph fontWeight="bold">Hello</Paragraph>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragraph component with variant', () => {
  const component = createWithTheme(
    <Paragraph variant="critical">Hello</Paragraph>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragraph component text transformed', () => {
  const component = createWithTheme(
    <Paragraph textTransform="uppercase">Hello</Paragraph>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragraph component wrapped', () => {
  const component = createWithTheme(<Paragraph wrap>Hello</Paragraph>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragraph component decorated', () => {
  const component = createWithTheme(
    <Paragraph textDecoration="line-through">Hello</Paragraph>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragraph component truncated', () => {
  const component = createWithTheme(<Paragraph truncate>Hello</Paragraph>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragraph component with multiline truncate', () => {
  const component = createWithTheme(
    <Paragraph truncateLines={2}>Hello</Paragraph>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
