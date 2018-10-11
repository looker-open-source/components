import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../test/utils/create_with_theme'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { FlexItem } from './FlexItem'

test('FlexItem default', () => {
  const component = createWithTheme(<FlexItem>💪</FlexItem>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('FlexItem supports alignSelf ', () => {
  assertSnapshot(<FlexItem alignSelf="center" />)
})

test('FlexItem supports order ', () => {
  assertSnapshot(<FlexItem order={1} />)
  assertSnapshot(<FlexItem order={-1} />)
})

test('FlexItem supports flex ', () => {
  assertSnapshot(<FlexItem flex="1" />)
  assertSnapshot(<FlexItem flex="1 1" />)
  assertSnapshot(<FlexItem flex="1 2 100px" />)
  assertSnapshot(<FlexItem flex="1 50px" />)
})

test('FlexItem supports basis ', () => {
  assertSnapshot(<FlexItem flexBasis="100px" />)
})
