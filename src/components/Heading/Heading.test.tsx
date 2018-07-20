import * as React from 'react'
import {
  Heading,
  HeadingLevels,
  HeadingTextTransforms,
  HeadingWeights
} from './Heading'
import 'jest-styled-components'

import { create } from 'react-test-renderer'
import { FontRamp } from '../../styles/font_sizes'

test('A default Heading', () => {
  const component = create(<Heading>🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A <h1> Heading', () => {
  const component = create(<Heading level={HeadingLevels.L1}>🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A <h1> Heading sized to <h2>', () => {
  const component = create(
    <Heading level={HeadingLevels.L1} size={FontRamp.Two}>
      🥑
    </Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading to semi-bold', () => {
  const component = create(<Heading weight={HeadingWeights.Bold}>🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading transformed', () => {
  const component = create(
    <Heading transform={HeadingTextTransforms.Caps}>🥑</Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
