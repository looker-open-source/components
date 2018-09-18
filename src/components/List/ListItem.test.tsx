import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../test/utils/create_with_theme'
import { ListItem } from './ListItem'

test('A default ListItem, should be an li', () => {
  const component = createWithTheme(<ListItem>🥑</ListItem>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
