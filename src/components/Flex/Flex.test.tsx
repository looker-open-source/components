import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { Flex } from './Flex'

test('Flex default ', () => {
  assertSnapshot(
    <Flex>
      <div>🥑</div>
      <div>🐛</div>
    </Flex>
  )
})

test('Flex supports justifyContent ', () => {
  assertSnapshot(<Flex justifyContent="center" />)
})

test('Flex supports alignItems ', () => {
  assertSnapshot(<Flex alignItems="center" />)
})

test('Flex supports alignContent ', () => {
  assertSnapshot(<Flex alignContent="start" />)
})

test('Flex supports flexDirection ', () => {
  assertSnapshot(<Flex flexDirection="row-reverse" />)
})

test('Flex supports flexWrap ', () => {
  assertSnapshot(<Flex flexWrap="nowrap" />)
})

test('Flex can be hidden ', () => {
  assertSnapshot(<Flex hidden />)
})
