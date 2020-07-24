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

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'

import { MenuItem } from './MenuItem'

test('MenuItem renders', () => {
  const { getByText } = renderWithTheme(<MenuItem>who!</MenuItem>)
  expect(getByText('who!')).toBeVisible()
})

test('MenuItem - detail', () => {
  const { getByText } = renderWithTheme(
    <MenuItem detail="Is an excellent question">who!</MenuItem>
  )
  expect(getByText('Is an excellent question')).toBeVisible()
})

test('MenuItem - icon', () => {
  const { getByText } = renderWithTheme(<MenuItem icon="Beaker">Icon</MenuItem>)
  expect(getByText('Icon')).toBeVisible()
})

test('MenuItem - artwork', () => {
  const { getByText } = renderWithTheme(
    <MenuItem iconArtwork={<svg xmlns="http://www.w3.org/2000/svg"></svg>}>
      Artwork
    </MenuItem>
  )
  expect(getByText('Artwork')).toBeVisible()
})
