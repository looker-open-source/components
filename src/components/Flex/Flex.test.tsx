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
