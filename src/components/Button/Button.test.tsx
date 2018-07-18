import * as React from 'react'
import { Button, ButtonVariants } from './Button'
import { create } from 'react-test-renderer'
import 'jest-styled-components'
import theme from '../../themes'

test('Button states', () => {
  const component = create(<Button theme={theme}>🥑</Button>)
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
