import * as React from 'react'
import { Heading } from './Heading'

import { create } from 'react-test-renderer'

test('A default Heading', () => {
  const component = create(<Heading>🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A <h1> Heading', () => {
  const component = create(<Heading level="1">🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A <h1> Heading sized to <h2>', () => {
  const component = create(
    <Heading level="1" size="2">
      🥑
    </Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading to semi-bold', () => {
  const component = create(<Heading weight="semi-bold">🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading transformed', () => {
  const component = create(<Heading transform="upper">🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
