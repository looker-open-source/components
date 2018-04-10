import * as React from 'react'
import { Button } from './buttons'
import { create } from 'react-test-renderer'

test('Button states', () => {
  const component = create(<Button>🥑</Button>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button ghost', () => {
  const component = create(<Button mode="ghost">🥑</Button>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

