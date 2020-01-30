import { assertSnapshot } from '@looker/components-test-utils'
import React from 'react'
import { DateFormat } from './DateFormat'
import { DateTimeFormat } from './DateTimeFormat'
import { TimeFormat } from './TimeFormat'

test('DateTime renders', () => {
  assertSnapshot(
    <DateTimeFormat>{new Date('January 25, 1988 11:58:03')}</DateTimeFormat>
  )
})

test('DateFormat renders only date', () => {
  assertSnapshot(
    <DateFormat>{new Date('January 25, 1988 11:58:03')}</DateFormat>
  )
})

test('TimeFormat renders only time', () => {
  assertSnapshot(
    <TimeFormat>{new Date('January 25, 1988 11:58:03')}</TimeFormat>
  )
})

test('DateTimeFormat renders when passing specific locale', () => {
  assertSnapshot(
    <DateTimeFormat locale="ar-EG">
      {new Date('January 25, 1988 11:58:03')}
    </DateTimeFormat>
  )
})

test('DateTimeFormat displays timeZone prop if one is passed', () => {
  assertSnapshot(
    <DateTimeFormat timeZone="Asia/Kolkata">
      {new Date('January 25, 1988 11:58:03')}
    </DateTimeFormat>
  )
})

test('DateTimeFormat renders format prop short if one is passed', () => {
  assertSnapshot(
    <DateTimeFormat format="short">
      {new Date('January 25, 1988 11:58:03')}
    </DateTimeFormat>
  )
})

test('DateTimeFormat renders format prop long if one is passed', () => {
  assertSnapshot(
    <DateTimeFormat format="long">
      {new Date('January 25, 1988 11:58:03')}
    </DateTimeFormat>
  )
})

test('DateTimeFormat renders format prop full if one is passed', () => {
  assertSnapshot(
    <DateTimeFormat format="full">
      {new Date('January 25, 1988 11:58:03')}
    </DateTimeFormat>
  )
})
