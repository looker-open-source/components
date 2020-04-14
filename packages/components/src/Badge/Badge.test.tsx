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
import { Badge } from './Badge'

test('Badge renders all sizes', () => {
  assertSnapshot(<Badge>default (medium)</Badge>)
  assertSnapshot(<Badge size="small">small</Badge>)
  assertSnapshot(<Badge size="medium">medium</Badge>)
  assertSnapshot(<Badge size="large">large</Badge>)
})

test('Badge renders all intents', () => {
  assertSnapshot(<Badge intent="plain">plain</Badge>)
  assertSnapshot(<Badge intent="positive">positive</Badge>)
  assertSnapshot(<Badge intent="info">info</Badge>)
  assertSnapshot(<Badge intent="neutral">neutral</Badge>)
  assertSnapshot(<Badge intent="warning">warning</Badge>)
  assertSnapshot(<Badge intent="critical">critical</Badge>)
})
