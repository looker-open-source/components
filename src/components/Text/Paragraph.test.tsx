import * as React from 'react'
import { Paragraph } from './Paragraph'
import {
  TextTransforms,
  TextWeights,
  TextAlignments,
  TextVariants
} from './Text'
import { RampSizes } from '../../styles/ramp_sizes'
import { createWithTheme } from '../../../test/utils/create_with_theme'

test('A default Paragraph component', () => {
  const component = createWithTheme(<Paragraph>🥨</Paragraph>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragraph component resized', () => {
  const component = createWithTheme(
    <Paragraph size={RampSizes.D2}>🥨</Paragraph>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragrapht component weight', () => {
  const component = createWithTheme(
    <Paragraph weight={TextWeights.Bold}>🥨</Paragraph>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component tuncated', () => {
  const component = createWithTheme(<Paragraph truncate>🥨</Paragraph>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragraph component with variant', () => {
  const component = createWithTheme(
    <Paragraph variant={TextVariants.Critical}>🥨</Paragraph>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragraph component transformed', () => {
  const component = createWithTheme(
    <Paragraph textTransform={TextTransforms.Upper}>🥨 Yum yum!</Paragraph>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Paragraph component Aligned', () => {
  const component = createWithTheme(
    <Paragraph align={TextAlignments.Right}>🥨 Yum yum!</Paragraph>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
