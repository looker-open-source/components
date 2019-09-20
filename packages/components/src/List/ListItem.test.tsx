import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'
import { ListItem } from './ListItem'

const noop = () => {}

describe('ListItem', () => {
  test('A default ListItem, should be an li', () => {
    assertSnapshot(<ListItem>🥑</ListItem>)
  })

  test('handles mouseenter', () => {
    assertSnapshot(<ListItem onMouseEnter={noop}>🐭</ListItem>)
  })
})
