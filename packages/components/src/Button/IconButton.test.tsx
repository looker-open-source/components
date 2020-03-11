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
import noop from 'lodash/noop'
import { assertSnapshot, renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'
import { Tooltip } from '../Tooltip'
import { IconButton } from './IconButton'

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

test('IconButton is a square by default', () => {
  const { getByTitle } = renderWithTheme(
    <IconButton label="Gear" icon="Gear" size="large" />
  )

  expect(getByTitle('Gear')).toHaveStyle('width: 44')
  expect(getByTitle('Gear')).toHaveStyle('height: 44')
})

test('IconButton renders focus ring on tab input but not on click', () => {
  const { getByTitle } = renderWithTheme(
    <>
      <IconButton label="Favorite" color="danger" icon="Favorite" />
      <IconButton label="Trash" color="danger" icon="Trash" />
    </>
  )

  fireEvent.click(getByTitle('Favorite'))
  const button = getByTitle('Favorite').closest('button')

  button &&
    fireEvent.keyUp(button, {
      charCode: 9,
      code: 9,
      key: 'Tab',
    })

  assertSnapshot(<IconButton label="Favorite" color="danger" icon="Favorite" />)
  assertSnapshot(<IconButton label="Trash" color="danger" icon="Trash" />)
})

test('IconButton has built-in tooltip', () => {
  const label = 'Mark as my Favorite'
  const { getByTitle, container } = renderWithTheme(
    <IconButton label={label} icon="Favorite" />
  )

  const notTooltip = container.querySelector('p') // Get Tooltip content
  expect(notTooltip).toBeNull()

  fireEvent.mouseOver(getByTitle('Favorite'))
  const tooltip = container.querySelector('p') // Get Tooltip content
  expect(tooltip).toHaveTextContent(label)
})

test('IconButton tooltipDisabled actually disables tooltip', () => {
  const label = 'Mark as my Favorite'
  const { getByTitle, container } = renderWithTheme(
    <IconButton tooltipDisabled label={label} icon="Favorite" />
  )

  fireEvent.mouseOver(getByTitle('Favorite'))
  const notTooltip = container.querySelector('p') // Get Tooltip content
  expect(notTooltip).toBeNull()
})

test('IconButton built-in tooltip defers to outer tooltip', () => {
  const tooltip = 'Add to favorites'
  const label = 'Mark as my Favorite'
  const { getByText, getByTitle } = renderWithTheme(
    <Tooltip content={tooltip}>
      {(eventHandlers, ref) => (
        <IconButton
          tooltipDisabled
          label={label}
          icon="Favorite"
          {...eventHandlers}
          ref={ref}
        />
      )}
    </Tooltip>
  )

  fireEvent.mouseOver(getByTitle('Favorite'))
  expect(getByText(tooltip)).toBeInTheDocument()
  expect(getByText(label)).toHaveStyle('height: 1px')
})
