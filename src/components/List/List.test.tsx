import * as React from 'react'
import { List } from './List'
import { ListItem } from './ListItem'

import { create } from 'react-test-renderer'
import 'jest-styled-components'

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
    <List type="number" nomarker={true}>
      <ListItem>🥑</ListItem>
      <ListItem>🍕</ListItem>
      <ListItem>🥨</ListItem>
    </List>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
