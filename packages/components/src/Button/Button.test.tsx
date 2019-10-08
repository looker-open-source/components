import { createWithTheme, assertSnapshot } from '@looker/components-test-utils'
import 'jest-styled-components'
import React from 'react'
import { Button } from './Button'
import { ButtonSizes } from './size'

const noop = () => {}

test('Button default', () => {
  assertSnapshot(<Button>🥑</Button>)
})

test('Button variant outline', () => {
  assertSnapshot(<Button variant="outline">🥑</Button>)
})

test('Button variant transparent', () => {
  assertSnapshot(<Button variant="transparent">🥑</Button>)
})

test('Button type submit', () => {
  assertSnapshot(<Button type="submit">🥑</Button>)
})

test('Button type reset', () => {
  assertSnapshot(<Button type="reset">🥑</Button>)
})

test('Button type button', () => {
  assertSnapshot(<Button type="button">🥑</Button>)
})

test('Button type menu', () => {
  assertSnapshot(<Button>🥑</Button>)
})

test('Button padding', () => {
  assertSnapshot(<Button p="none">🥑</Button>)
})

test('Button padding', () => {
  assertSnapshot(
    <Button px="xxsmall" py="xxxlarge">
      🥑
    </Button>
  )
})

test('Button primary color', () => {
  assertSnapshot(<Button color="primary">🥑</Button>)
})

test('Button danger color', () => {
  assertSnapshot(<Button color="danger">🥑</Button>)
})

test('Button should accept disabled', () => {
  assertSnapshot(<Button disabled>🥑</Button>)
})

test('Button accepts a className prop', () => {
  const component = createWithTheme(<Button className="foobar">Hi</Button>)
  const tree = component.toJSON()
  if (!tree) throw new Error('component is NULL')
  expect(tree.props.className).toContain('foobar')
})

test('Button validates all sizes', () => {
  const sizes: ButtonSizes[] = ['xsmall', 'small', 'medium', 'large']
  sizes.forEach(size => {
    assertSnapshot(<Button size={size}>Test</Button>)
  })
})

test('Button allows autoFocus', () => {
  assertSnapshot(<Button autoFocus>Autofocus?</Button>)
})

test('Button allows for HTML events', () => {
  assertSnapshot(<Button onMouseEnter={noop}>Mouseenter?</Button>)
  assertSnapshot(<Button onClick={noop}>Click?</Button>)
})

test('Button allows for ARIA attributes', () => {
  assertSnapshot(<Button aria-disabled>aria-disabled</Button>)
})
