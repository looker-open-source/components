import 'jest-styled-components'
import * as React from 'react'
import { create } from 'react-test-renderer'
import theme from '../../theme'
import { Link } from './Link'

test('A default Link', () => {
  const component = create(
    <Link href="https://looker.com" theme={theme}>
      🥑
    </Link>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A external Link', () => {
  const component = create(
    <Link href="https://looker.com" theme={theme}>
      🥑
    </Link>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Link with an id', () => {
  const component = create(
    <Link href="https://looker.com" id="link-id" theme={theme}>
      🥑
    </Link>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
