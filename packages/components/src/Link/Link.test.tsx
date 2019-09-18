import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '@looker/components-test-utils'
import { Link } from './Link'

test('A default Link', () => {
  const component = createWithTheme(<Link href="https://looker.com">🥑</Link>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A external Link', () => {
  const component = createWithTheme(<Link href="https://looker.com">🥑</Link>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Link with an id', () => {
  const component = createWithTheme(
    <Link href="https://looker.com" id="link-id">
      🥑
    </Link>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
