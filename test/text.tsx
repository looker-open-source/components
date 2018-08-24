import * as React from 'react'
import {
  TextAlignments,
  TextProps,
  TextTransforms,
  TextVariants,
  TextWeights
} from '../src/components/Text/Text'
import { RampSizes } from '../src/styles/ramp_sizes'
import { createWithTheme } from './utils/create_with_theme'

export const snapshotTestTextComponent = (
  Component: React.SFC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(<Component>Hello</Component>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentAlign = (
  Component: React.SFC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(
    <Component align={TextAlignments.Right}>Hello</Component>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentFontRamp = (
  Component: React.SFC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(
    <Component size={RampSizes.D2}>Hello</Component>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentFontWeight = (
  Component: React.SFC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(
    <Component weight={TextWeights.Bold}>Hello</Component>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentTransform = (
  Component: React.SFC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(
    <Component textTransform={TextTransforms.Upper}>Hello</Component>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentTruncate = (
  Component: React.SFC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(<Component truncate>Hello</Component>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentVariant = (
  Component: React.SFC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(
    <Component variant={TextVariants.Critical}>Hello</Component>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}
