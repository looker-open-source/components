/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
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
