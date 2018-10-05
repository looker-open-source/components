import 'jest-styled-components'
import * as React from 'react'
import { createWithTheme } from '../../../test/utils/create_with_theme'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { Flex } from './Flex'

test('Flex default', () => {
  const component = createWithTheme(
    <Flex>
      <div>🥑</div>
      <div>🐛</div>
    </Flex>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Flex supports justifyContent ', () => {
  assertSnapshot(<Flex justifyContent="center" />)
  assertSnapshot(<Flex justifyContent="start" />)
  assertSnapshot(<Flex justifyContent="end" />)
  assertSnapshot(<Flex justifyContent="space-between" />)
  assertSnapshot(<Flex justifyContent="space-around" />)
  assertSnapshot(<Flex justifyContent="space-evenly" />)
  assertSnapshot(<Flex justifyContent="stretch" />)
})

test('Flex supports alignItems ', () => {
  assertSnapshot(<Flex alignItems="center" />)
  assertSnapshot(<Flex alignItems="start" />)
  assertSnapshot(<Flex alignItems="end" />)
  assertSnapshot(<Flex alignItems="baseline" />)
  assertSnapshot(<Flex alignItems="stretch" />)
})

test('Flex supports alignContent ', () => {
  assertSnapshot(<Flex alignContent="center" />)
  assertSnapshot(<Flex alignContent="start" />)
  assertSnapshot(<Flex alignContent="end" />)
  assertSnapshot(<Flex alignContent="baseline" />)
  assertSnapshot(<Flex alignContent="space-between" />)
  assertSnapshot(<Flex alignContent="space-around" />)
  assertSnapshot(<Flex alignContent="space-evenly" />)
  assertSnapshot(<Flex alignContent="stretch" />)
})

test('Flex supports alignSelf ', () => {
  assertSnapshot(<Flex alignSelf="center" />)
  assertSnapshot(<Flex alignSelf="start" />)
  assertSnapshot(<Flex alignSelf="end" />)
  assertSnapshot(<Flex alignSelf="baseline" />)
  assertSnapshot(<Flex alignSelf="stretch" />)
})

test('Flex supports flexDirection ', () => {
  assertSnapshot(<Flex flexDirection="row" />)
  assertSnapshot(<Flex flexDirection="row-reverse" />)
  assertSnapshot(<Flex flexDirection="column" />)
  assertSnapshot(<Flex flexDirection="column-reverse" />)
})

test('Flex supports flexWrap ', () => {
  assertSnapshot(<Flex flexWrap="wrap" />)
  assertSnapshot(<Flex flexWrap="nowrap" />)
  assertSnapshot(<Flex flexWrap="wrap-reverse" />)
})
