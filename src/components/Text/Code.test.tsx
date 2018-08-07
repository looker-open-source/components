import * as React from 'react'
import { Code } from './Code'
import {
  TextTransforms,
  TextWeights,
  TextAlignments,
  TextVariants
} from './Text'
import { RampSizes } from '../../styles/ramp_sizes'
import { createWithTheme } from '../../../test/utils/create_with_theme'

test('A default Code component', () => {
  const component = createWithTheme(<Code>🥨</Code>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Code component resized', () => {
  const component = createWithTheme(<Code size={RampSizes.D2}>🥨</Code>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Code component weight', () => {
  const component = createWithTheme(<Code weight={TextWeights.Bold}>🥨</Code>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Code component tuncated', () => {
  const component = createWithTheme(<Code truncate>🥨</Code>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Code component with variant', () => {
  const component = createWithTheme(
    <Code variant={TextVariants.Critical}>🥨</Code>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Code component transformed', () => {
  const component = createWithTheme(
    <Code textTransform={TextTransforms.Upper}>🥨 Yum yum!</Code>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Code component aligned', () => {
  const component = createWithTheme(
    <Code align={TextAlignments.Right}>🥨 Yum yum!</Code>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
