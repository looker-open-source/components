import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { Spinner } from './Spinner'

const noop = () => {
  return
}

describe('Spinner', () => {
  test('A default spinner', () => {
    assertSnapshot(<Spinner />)
  })

  test('Spinner can have n number of markers', () => {
    assertSnapshot(<Spinner markers={20} />)
  })

  test('Spinner speed can be set', () => {
    assertSnapshot(<Spinner speed={2000} />)
  })

  test('Spinner can change markger color', () => {
    assertSnapshot(<Spinner color="red" />)
  })

  test('Spinner can be resized', () => {
    assertSnapshot(<Spinner size={200} />)
  })
})
