import * as React from 'react'
import { Link } from './Link'

import { create } from 'react-test-renderer'

test('A default Link', () => {
  const component = create(<Link href="https://looker.com">🥑</Link>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A external Link', () => {
  const component = create(<Link href="https://looker.com" external>🥑</Link>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


test('A Link with an id', () => {
  const component = create(<Link href="https://looker.com" id="link-id">🥑</Link>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

