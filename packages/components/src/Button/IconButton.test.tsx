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
import { theme } from '@looker/design-tokens'
import { assertSnapshot } from '@looker/components-test-utils'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent } from '@testing-library/react'
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

test('Button renders focus ring on tab input but not on click', () => {
  const { getByTitle } = render(
    <ThemeProvider theme={theme}>
      <>
        <IconButton label="Favorite" color="danger" icon="Favorite" />
        <IconButton label="Trash" color="danger" icon="Trash" />
      </>
    </ThemeProvider>
  )

  fireEvent.click(getByTitle('Favorite'))
  expect(getByTitle('Favorite')).not.toHaveStyle(`box-shadow: none)`)
  const button = getByTitle('Favorite').closest('button')

  button &&
    fireEvent.keyUp(button, {
      charCode: 9,
      code: 9,
      key: 'Tab',
    })

  expect(button).toHaveStyle(`box-shadow: 0 0 0 0.15rem rgba(204,31,54,0.25)`)
})
