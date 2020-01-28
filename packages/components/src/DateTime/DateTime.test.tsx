import { assertSnapshot } from '@looker/components-test-utils'
import React from 'react'
import { Dates } from './Dates'
import { DateTime } from './DateTime'
import { Times } from './Times'

test('DateTime renders', () => {
  assertSnapshot(<DateTime />)
})

test('Dates renders', () => {
  assertSnapshot(<Dates />)
})

test('Times renders', () => {
  assertSnapshot(<Times />)
})
