import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '@looker/components-test-utils'
import { assertSnapshot } from '@looker/components-test-utils'
import { SemanticColor, theme } from '@looker/design-tokens'
import { Button, ButtonSizes } from './Button'

const noop = () => {
  return
}

test('Button default', () => {
  assertSnapshot(<Button theme={theme}>🥑</Button>)
})

test('Button variant outline', () => {
  assertSnapshot(
    <Button theme={theme} variant="outline">
      🥑
    </Button>
  )
})

test('Button variant transparent', () => {
  assertSnapshot(
    <Button theme={theme} variant="transparent">
      🥑
    </Button>
  )
})

test('Button type submit', () => {
  assertSnapshot(
    <Button theme={theme} type="submit">
      🥑
    </Button>
  )
})

test('Button type reset', () => {
  assertSnapshot(
    <Button theme={theme} type="reset">
      🥑
    </Button>
  )
})

test('Button type button', () => {
  assertSnapshot(
    <Button theme={theme} type="button">
      🥑
    </Button>
  )
})

test('Button type menu', () => {
  assertSnapshot(
    <Button theme={theme} type="menu">
      🥑
    </Button>
  )
})

test('Button padding', () => {
  assertSnapshot(
    <Button theme={theme} p="none">
      🥑
    </Button>
  )
})

test('Button padding', () => {
  assertSnapshot(
    <Button theme={theme} px="xxsmall" py="xxxlarge">
      🥑
    </Button>
  )
})

test('Button primary color', () => {
  assertSnapshot(
    <Button theme={theme} color="primary">
      🥑
    </Button>
  )
})

test('Button danger color', () => {
  assertSnapshot(
    <Button theme={theme} color="danger">
      🥑
    </Button>
  )
})

test('Button should accept disabled', () => {
  assertSnapshot(
    <Button theme={theme} disabled>
      🥑
    </Button>
  )
})

test('Button accepts a SemanticColor object for the color property', () => {
  const punkRockColor: SemanticColor = {
    altText: 'LightPink',
    borderColor: 'MediumVioletRed',
    dark: 'PaleVioletRed',
    darker: 'MediumVioletRed',
    light: 'HotPink',
    lighter: 'LightPink',
    linkColor: 'DeepPink',
    main: 'DeepPink',
    text: 'White',
  }

  assertSnapshot(
    <Button theme={theme} color={punkRockColor}>
      🥑
    </Button>
  )
})

test('Button accepts a className prop', () => {
  const component = createWithTheme(<Button className="foobar">Hi</Button>)
  const tree = component.toJSON()
  expect(tree!.props.className).toContain('foobar')
})

test('Button validates all sizes', () => {
  const sizes: ButtonSizes[] = ['xsmall', 'small', 'medium', 'large']
  sizes.forEach(size => {
    assertSnapshot(<Button size={size}>Test</Button>)
  })
})

test('Button allows autoFocus', () => {
  assertSnapshot(<Button autoFocus>Autofocus?</Button>)
})

test('Button allows for HTML events', () => {
  assertSnapshot(<Button onMouseEnter={noop}>Mouseenter?</Button>)
  assertSnapshot(<Button onClick={noop}>Click?</Button>)
})

test('Button allows for ARIA attributes', () => {
  assertSnapshot(<Button aria-disabled>aria-disabled</Button>)
})
