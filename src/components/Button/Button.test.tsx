import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import { SemanticColor, theme, ThemeProvider } from '../../style'
import { Button } from './Button'

test('Button default', () => {
  const component = create(<Button theme={theme}>🥑</Button>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button variant outline', () => {
  const component = create(
    <Button theme={theme} variant="outline">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button variant transparent', () => {
  const component = create(
    <Button theme={theme} variant="transparent">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button type submit', () => {
  const component = create(
    <Button theme={theme} type="submit">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button type reset', () => {
  const component = create(
    <Button theme={theme} type="reset">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button type button', () => {
  const component = create(
    <Button theme={theme} type="button">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button type menu', () => {
  const component = create(
    <Button theme={theme} type="menu">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button primary color', () => {
  const component = create(
    <Button theme={theme} color="primary">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button danger color', () => {
  const component = create(
    <Button theme={theme} color="danger">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button should accept disabled', () => {
  const component = create(
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

  const component = create(
    <Button theme={theme} color={punkRockColor}>
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should not require a theme when in a ThemeProvider', () => {
  create(
    <ThemeProvider theme={theme}>
      <Button>Mild Button</Button>
    </ThemeProvider>
  )
})
