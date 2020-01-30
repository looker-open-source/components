import { assertSnapshot } from '@looker/components-test-utils'
import React from 'react'
import { DateTime } from './DateTime'

test('DateTime renders', () => {
  assertSnapshot(<DateTime>{new Date(Date.UTC(2011, 1, 3, 5, 6, 2))}</DateTime>)
})

test('DateTime renders only date', () => {
  assertSnapshot(<DateTime hideDate />)
})

test('DateTime renders only time', () => {
  assertSnapshot(
    <DateTime hideTime>{new Date(Date.UTC(2011, 1, 3, 5, 6, 2))}</DateTime>
  )
})

test('DateTime renders when passing specific Date as children', () => {
  assertSnapshot(<DateTime>{new Date(Date.UTC(2011, 1, 3, 5, 6, 2))}</DateTime>)
})

test('DateTime renders when passing specific locale', () => {
  assertSnapshot(
    <DateTime locale="ar-EG">
      {new Date(Date.UTC(2011, 1, 3, 5, 6, 2))}
    </DateTime>
  )
})

test('DateTime displays timeZone if one is passed', () => {
  assertSnapshot(
    <DateTime timeZone="Asia/Kolkata">
      {new Date(Date.UTC(2011, 1, 3, 5, 6, 2))}
    </DateTime>
  )
})

test('DateTime renders if style is passed', () => {
  assertSnapshot(
    <DateTime style="short">{new Date(Date.UTC(2011, 1, 3, 5, 6, 2))}</DateTime>
  )
})

test('DateTime renders if style is passed', () => {
  assertSnapshot(
    <DateTime style="long">{new Date(Date.UTC(2011, 1, 3, 5, 6, 2))}</DateTime>
  )
})

test('DateTime renders if style is passed', () => {
  assertSnapshot(
    <DateTime style="full">{new Date(Date.UTC(2011, 1, 3, 5, 6, 2))}</DateTime>
  )
})
