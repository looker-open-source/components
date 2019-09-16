import * as React from 'react'
import { createWithTheme } from '../../../test/utils/create_with_theme'
import { List } from './List'
import { ListItem } from './ListItem'

import 'jest-styled-components'

test('A default List, should be a ul', () => {
  const component = createWithTheme(
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
  const component = createWithTheme(
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
  const component = createWithTheme(
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
  const component = createWithTheme(
    <List type="number" nomarker>
      <ListItem>🥑</ListItem>
      <ListItem>🍕</ListItem>
      <ListItem>🥨</ListItem>
    </List>
  )
  const tree = component.toJSON()
  expect(tree).toHaveStyleRule('list-style-type', 'none')
  expect(tree).toHaveStyleRule('padding-left', '0rem')
  expect(tree).toMatchSnapshot()
})
