import * as React from 'react'
import { Span } from './Span'
import {
  TextTransforms,
  TextWeights,
  TextAlignments,
  TextVariants
} from './Text'
import { RampSizes } from '../../styles/ramp_sizes'
import { createWithTheme } from '../../../test/utils/create_with_theme'

test('A default Span component', () => {
  const component = createWithTheme(<Span>🥨</Span>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Span component resized', () => {
  const component = createWithTheme(<Span size={RampSizes.D2}>🥨</Span>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Span component weight', () => {
  const component = createWithTheme(<Span weight={TextWeights.Bold}>🥨</Span>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Span component tuncated', () => {
  const component = createWithTheme(<Span truncate>🥨</Span>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Span component with variant', () => {
  const component = createWithTheme(
    <Span variant={TextVariants.Critical}>🥨</Span>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Span component transformed', () => {
  const component = createWithTheme(
    <Span textTransform={TextTransforms.Upper}>🥨 Yum yum!</Span>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Span component aligned', () => {
  const component = createWithTheme(
    <Span align={TextAlignments.Right}>🥨 Yum yum!</Span>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
