import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import theme from '../../themes'
import { NamedColor } from '../../themes/theme_colors'
import { Button, ButtonVariants } from './Button'

test('Button default', () => {
  const component = create(<Button theme={theme}>🥑</Button>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button variant outline', () => {
  const component = create(
    <Button theme={theme} variant={ButtonVariants.Outline}>
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button variant transparent', () => {
  const component = create(
    <Button theme={theme} variant={ButtonVariants.Transparent}>
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

test('Button destructive color', () => {
  const component = create(
    <Button theme={theme} color="destructive">
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button accepts a NamedColor object for the color property', () => {
  const punkRockColor: NamedColor = {
    borderColor: 'MediumVioletRed',
    dark: 'PaleVioletRed',
    darker: 'MediumVioletRed',
    light: 'HotPink',
    lighter: 'LightPink',
    main: 'DeepPink',
    text: 'White'
  }

  const component = create(
    <Button theme={theme} kind={punkRockColor}>
      🥑
    </Button>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
