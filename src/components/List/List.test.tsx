import * as React from 'react'
import { List } from './List'
import { ListItem } from './ListItem'

import 'jest-styled-components'
import { create } from 'react-test-renderer'

test('A default List, should be a ul', () => {
  const component = create(
    <List>
      <ListItem>🥑</ListItem>
      <ListItem>🍕</ListItem>
      <ListItem>🥨</ListItem>
    </List>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A bulleted List', () => {
  const component = create(
    <List type="bullet">
      <ListItem>🥑</ListItem>
      <ListItem>🍕</ListItem>
      <ListItem>🥨</ListItem>
    </List>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A numerically ordered List', () => {
  const component = create(
    <List type="number">
      <ListItem>🥑</ListItem>
      <ListItem>🍕</ListItem>
      <ListItem>🥨</ListItem>
    </List>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A numerically ordered List marked as nomarker', () => {
  const component = create(
    <List type="number" nomarker>
      <ListItem>🥑</ListItem>
      <ListItem>🍕</ListItem>
      <ListItem>🥨</ListItem>
    </List>
  )
  const tree = component.toJSON()
  expect(tree).toHaveStyleRule('list-style-type', 'none')
  expect(tree).toHaveStyleRule('padding', '0 0 0 0')
  expect(tree).toMatchSnapshot()
})
