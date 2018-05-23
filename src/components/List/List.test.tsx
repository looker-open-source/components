import * as React from 'react'
import { List } from './List'
import { ListItem } from './ListItem'

import { create } from 'react-test-renderer'

test('A default List, should be a ul', () => {
  const component = create(
    <List>
      <ListItem>🥑</ListItem>
      <ListItem>🍕</ListItem>
      <ListItem>🥨</ListItem>
    </List>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A bullet List', () => {
  const component = create(
    <List type="bullet">
      <ListItem>🥑</ListItem>
      <ListItem>🍕</ListItem>
      <ListItem>🥨</ListItem>
    </List>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A ordered List', () => {
  const component = create(
    <List type="number">
      <ListItem>🥑</ListItem>
      <ListItem>🍕</ListItem>
      <ListItem>🥨</ListItem>
    </List>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

