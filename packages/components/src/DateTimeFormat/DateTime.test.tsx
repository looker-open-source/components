import { assertSnapshot } from '@looker/components-test-utils'
import React from 'react'
import { DateFormat } from './DateFormat'
import { DateTimeFormat } from './DateTimeFormat'
import { TimeFormat } from './TimeFormat'
const date = new Date('January 25, 1988 11:58:03')

test('DateTime renders', () => {
  assertSnapshot(<DateTimeFormat>{date}</DateTimeFormat>)
})

test('DateFormat renders only date', () => {
  assertSnapshot(<DateFormat>{date}</DateFormat>)
})

test('TimeFormat renders only time', () => {
  assertSnapshot(<TimeFormat>{date}</TimeFormat>)
})

test('DateTimeFormat renders when passing specific locale', () => {
  assertSnapshot(<DateTimeFormat locale="ar-EG">{date}</DateTimeFormat>)
})

test('DateTimeFormat displays timeZone prop if one is passed', () => {
  assertSnapshot(
    <DateTimeFormat timeZone="Asia/Kolkata">{date}</DateTimeFormat>
  )
})

test('DateTimeFormat renders format prop short if one is passed', () => {
  assertSnapshot(<DateTimeFormat format="short">{date}</DateTimeFormat>)
})

test('DateTimeFormat renders format prop long if one is passed', () => {
  assertSnapshot(<DateTimeFormat format="long">{date}</DateTimeFormat>)
})

test('DateTimeFormat renders format prop full if one is passed', () => {
  assertSnapshot(<DateTimeFormat format="full">{date}</DateTimeFormat>)
})
