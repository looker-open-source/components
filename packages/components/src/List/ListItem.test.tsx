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
import { screen, fireEvent } from '@testing-library/react'

import { ListItem } from './ListItem'

describe('ListItem', () => {
  test('renders children', () => {
    renderWithTheme(<ListItem>who!</ListItem>)
    expect(screen.getByText('who!')).toBeVisible()
  })

  test('renders detail', () => {
    renderWithTheme(<ListItem detail="Is an excellent question">who!</ListItem>)
    expect(screen.getByText('Is an excellent question')).toBeVisible()
  })

  test('renders icon', () => {
    renderWithTheme(<ListItem icon="Beaker">Icon</ListItem>)
    expect(screen.getByText('Icon')).toBeVisible()
  })

  test('renders artwork', () => {
    renderWithTheme(
      <ListItem
        iconArtwork={
          <svg xmlns="http://www.w3.org/2000/svg">
            <title>SVG Title Here</title>
          </svg>
        }
      >
        Artwork
      </ListItem>
    )
    expect(screen.getByTitle('SVG Title Here')).toBeInTheDocument()
  })

  test('is a button when disabled', () => {
    const callbackFn = jest.fn()

    renderWithTheme(
      <ListItem
        disabled={true}
        href="https://google.com"
        onClick={callbackFn}
        target="_blank"
      >
        Item
      </ListItem>
    )
    const item = screen.getByText('Item')
    expect(item.closest('button')).toBeInTheDocument()
  })

  test('is not clickable when disabled', () => {
    const callbackFn = jest.fn()

    renderWithTheme(
      <ListItem itemRole="button" disabled onClick={callbackFn}>
        Item
      </ListItem>
    )

    const item = screen.getByText('Item')
    fireEvent.click(item)

    expect(callbackFn).toHaveBeenCalledTimes(0)
  })

  test('has rel="noopener noreferrer" when it has target="_blank" and no passed-in rel prop value', () => {
    const { getByRole } = renderWithTheme(
      <ListItem itemRole="link" href="https://google.com" target="_blank">
        Link
      </ListItem>
    )

    const item = getByRole('link')

    expect(item.nodeName).toBe('A')
    expect(item).toHaveAttribute('target', '_blank')
    expect(item).toHaveAttribute('href', 'https://google.com')
    expect(item).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('auto appends "noopener noreferrer" to rel prop value when itemRole="link", target="_blank" and rel is not undefined', () => {
    const { getByRole } = renderWithTheme(
      <ListItem
        itemRole="link"
        href="https://google.com"
        rel="nogouda"
        target="_blank"
      >
        Link
      </ListItem>
    )

    const item = getByRole('link')

    expect(item.nodeName).toBe('A')
    expect(item).toHaveAttribute('target', '_blank')
    expect(item).toHaveAttribute('href', 'https://google.com')
    expect(item).toHaveAttribute('rel', 'nogouda noopener noreferrer')
  })

  test('does not auto append "noopener noreferrer" to link without target="_blank"', () => {
    const { getByRole } = renderWithTheme(
      <ListItem itemRole="link" rel="nogouda" href="https://google.com">
        Link
      </ListItem>
    )

    const item = getByRole('link')

    expect(item.nodeName).toBe('A')
    expect(item).toHaveAttribute('href', 'https://google.com')
    expect(item).toHaveAttribute('rel', 'nogouda')
  })
})
