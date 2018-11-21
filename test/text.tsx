import * as React from 'react'
import { TextProps } from '../src/components/Text/Text'
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
  const component = createWithTheme(<Component align="right">Hello</Component>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentFontRamp = (
  Component: React.SFC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(<Component size="xxlarge">Hello</Component>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentFontWeight = (
  Component: React.SFC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(<Component weight="bold">Hello</Component>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentTransform = (
  Component: React.SFC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(
    <Component textTransform="upper">Hello</Component>
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
    <Component variant="critical">Hello</Component>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}
