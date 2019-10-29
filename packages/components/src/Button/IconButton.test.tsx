/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.
 
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

import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from 'looker-components-test-utils'
import { IconButton } from './IconButton'

const noop = () => {}

test('IconButton default', () => {
  assertSnapshot(<IconButton label="Test" icon="Favorite" />)
})

test('IconButton outline', () => {
  assertSnapshot(<IconButton label="Test" icon="Favorite" outline />)
})

test('IconButton resized', () => {
  assertSnapshot(<IconButton label="Test" icon="Favorite" size="large" />)
})

test('IconButton accepts color', () => {
  assertSnapshot(<IconButton label="Test" icon="Favorite" color="danger" />)
})

test('IconButton allows for ARIA attributes', () => {
  assertSnapshot(<IconButton label="Test" icon="Favorite" aria-haspopup />)
})

test('IconButton accepts events', () => {
  assertSnapshot(
    <IconButton label="Test" icon="Favorite" onMouseEnter={noop} />
  )
  assertSnapshot(<IconButton label="Test" icon="Favorite" onClick={noop} />)
})
