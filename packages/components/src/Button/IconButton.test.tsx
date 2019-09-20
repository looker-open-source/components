import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'
import { IconButton } from './IconButton'

const noop = () => {}

test('IconButton default', () => {
  assertSnapshot(<IconButton label="Test" icon="Favorite" />)
})

test('IconButton outline', () => {
  assertSnapshot(<IconButton label="Test" icon="Favorite" outline />)
})

test('IconButton resized', () => {
  assertSnapshot(<IconButton label="Test" icon="Favorite" size="large" />)
})

test('IconButton accepts color', () => {
  assertSnapshot(<IconButton label="Test" icon="Favorite" color="danger" />)
})

test('IconButton allows for ARIA attributes', () => {
  assertSnapshot(<IconButton label="Test" icon="Favorite" aria-haspopup />)
})

test('IconButton accepts events', () => {
  assertSnapshot(
    <IconButton label="Test" icon="Favorite" onMouseEnter={noop} />
  )
  assertSnapshot(<IconButton label="Test" icon="Favorite" onClick={noop} />)
})
