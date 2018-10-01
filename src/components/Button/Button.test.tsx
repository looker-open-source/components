import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../test/utils/create_with_theme'
import { SemanticColor, theme } from '../../style'
import { Button } from './Button'

test('Button default', () => {
  const component = createWithTheme(<Button theme={theme}>🥑</Button>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button variant outline', () => {
  const component = createWithTheme(
    <Button theme={theme} variant="outline">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button variant transparent', () => {
  const component = createWithTheme(
    <Button theme={theme} variant="transparent">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button type submit', () => {
  const component = createWithTheme(
    <Button theme={theme} type="submit">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button type reset', () => {
  const component = createWithTheme(
    <Button theme={theme} type="reset">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button type button', () => {
  const component = createWithTheme(
    <Button theme={theme} type="button">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button type menu', () => {
  const component = createWithTheme(
    <Button theme={theme} type="menu">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button primary color', () => {
  const component = createWithTheme(
    <Button theme={theme} color="primary">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button danger color', () => {
  const component = createWithTheme(
    <Button theme={theme} color="danger">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button should accept disabled', () => {
  const component = createWithTheme(
    <Button theme={theme} disabled>
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button accepts a SemanticColor object for the color property', () => {
  const punkRockColor: SemanticColor = {
    borderColor: 'MediumVioletRed',
    dark: 'PaleVioletRed',
    darker: 'MediumVioletRed',
    light: 'HotPink',
    lighter: 'LightPink',
    linkColor: 'DeepPink',
    main: 'DeepPink',
    text: 'White',
  }

  const component = createWithTheme(
    <Button theme={theme} color={punkRockColor}>
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button accepts a className prop', () => {
  const component = createWithTheme(<Button className="foobar">Hi</Button>)
  const tree = component.toJSON()
  expect(tree!.props.className).toContain('foobar')
})
