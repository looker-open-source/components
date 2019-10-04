import React from 'react'
import { createWithTheme } from '@looker/components-test-utils'
import { TextProps } from '.'

export const snapshotTestTextComponent = (
  Component: React.FC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(<Component>Hello</Component>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentAlign = (
  Component: React.FC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(<Component align="right">Hello</Component>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentFontRamp = (
  Component: React.FC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(
    <Component fontSize="xxxxlarge">Hello</Component>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentFontWeight = (
  Component: React.FC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(
    <Component fontWeight="bold">Hello</Component>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentTransform = (
  Component: React.FC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(
    <Component textTransform="uppercase">Hello</Component>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentWrap = (
  Component: React.FC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(<Component wrap>Hello</Component>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentVariant = (
  Component: React.FC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(
    <Component variant="critical">Hello</Component>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentColor = (
  Component: React.FC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(
    <Component color="palette.blue400">Hello</Component>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

export const snapshotTestTextComponentDecoration = (
  Component: React.FC<TextProps> | React.ComponentClass
) => {
  const component = createWithTheme(
    <Component decoration="line-through">Hello</Component>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}
