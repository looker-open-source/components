import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  test('A default spinner', () => {
    assertSnapshot(<Spinner />)
  })

  test('Spinner can have n number of markers', () => {
    assertSnapshot(<Spinner markers={20} />)
  })

  test('Spinner makers radius can be adjusted', () => {
    assertSnapshot(<Spinner markerRadius={30} />)
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
