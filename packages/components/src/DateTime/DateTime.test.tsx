import { assertSnapshot } from '@looker/components-test-utils'
import React from 'react'
import { DateTime } from './DateTime'

test('DateTime renders', () => {
  assertSnapshot(<DateTime />)
})

test('DateTime renders only date', () => {
  assertSnapshot(<DateTime hideDate />)
})

test('DateTime renders only time', () => {
  assertSnapshot(<DateTime hideTime />)
})

test('DateTime renders when passing specific Date as children', () => {
  assertSnapshot(<DateTime>{new Date(Date.UTC(2011, 1, 3, 5, 6, 2))}</DateTime>)
})

test('DateTime renders when passing specific locale', () => {
  assertSnapshot(<DateTime locale="ar-EG" />)
})

test('DateTime displays timeZone if one is passed', () => {
  assertSnapshot(<DateTime timeZone="Asia/Kolkata" />)
})

test('DateTime renders if style is passed', () => {
  assertSnapshot(<DateTime style="short" />)
})

test('DateTime renders if style is passed', () => {
  assertSnapshot(<DateTime style="long" />)
})

test('DateTime renders if style is passed', () => {
  assertSnapshot(<DateTime style="full" />)
})
