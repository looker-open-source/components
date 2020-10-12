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
import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { Tooltip } from '../Tooltip'
import { IconButton } from './IconButton'

describe('IconButton', () => {
  test('default', () => {
    assertSnapshot(
      <IconButton id="test-iconButton" label="Test" icon="Favorite" />
    )
  })

  test('outline', () => {
    assertSnapshot(
      <IconButton id="test-iconButton" label="Test" icon="Favorite" outline />
    )
  })

  test('resized', () => {
    assertSnapshot(
      <IconButton
        id="test-iconButton"
        label="Test"
        icon="Favorite"
        size="large"
      />
    )
  })

  test('accepts color', () => {
    assertSnapshot(
      <IconButton
        id="test-iconButton"
        label="Test"
        icon="Favorite"
        color="critical"
      />
    )
  })

  test('allows for ARIA attributes', () => {
    assertSnapshot(
      <IconButton
        id="test-iconButton"
        label="Test"
        icon="Favorite"
        aria-haspopup
      />
    )
  })

  test('accepts events', () => {
    assertSnapshot(
      <IconButton
        id="test-iconButton"
        label="Test"
        icon="Favorite"
        onMouseEnter={noop}
      />
    )
    assertSnapshot(
      <IconButton
        id="test-iconButton"
        label="Test"
        icon="Favorite"
        onClick={noop}
      />
    )
  })

  xtest('is a square by default', () => {
    const { getByTestId } = renderWithTheme(
      <IconButton label="Settings" icon="Gear" size="large" />
    )

    const image = getByTestId('icon-layout')
    expect(image).toHaveStyleRule('width: 44')
    expect(image).toHaveStyleRule('height: 44')
  })

  xtest('renders focus ring on tab input but not on click', () => {
    const { getByText } = renderWithTheme(
      <>
        <IconButton
          id="test-iconButton"
          label="My Favorite"
          color="critical"
          icon="Favorite"
        />
        <IconButton
          id="test-iconButton"
          label="Trash"
          color="critical"
          icon="Trash"
        />
      </>
    )

    const button = getByText('My Favorite')
    fireEvent.click(button)

    button &&
      fireEvent.keyUp(button, {
        charCode: 9,
        code: 9,
        key: 'Tab',
      })

    /**
     * This test proves nothing. Doh!
     */

    assertSnapshot(
      <IconButton
        id="test-iconButton"
        label="Favorite"
        color="critical"
        icon="Favorite"
      />
    )
    assertSnapshot(
      <IconButton
        id="test-iconButton"
        label="Trash"
        color="critical"
        icon="Trash"
      />
    )
  })

  test('has built-in tooltip', async () => {
    const label = 'Mark as my Favorite'
    renderWithTheme(<IconButton label={label} icon="Favorite" />)

    const notTooltip = screen.getAllByText(label)
    expect(notTooltip).toHaveLength(1) // accessibility text

    const icon = screen.getByText(label)
    fireEvent.mouseOver(icon)

    const tooltip = screen.getAllByText(label)
    expect(tooltip).toHaveLength(2)
    expect(tooltip[1]).toBeVisible()

    fireEvent.mouseOut(icon)
    await waitForElementToBeRemoved(() => screen.getAllByText(label)[1])
  })

  test('tooltipDisabled actually disables tooltip', () => {
    const label = 'Mark as my Favorite'
    const { container } = renderWithTheme(
      <IconButton
        id="test-iconButton"
        tooltipDisabled
        label={label}
        icon="Favorite"
      />
    )

    fireEvent.mouseOver(screen.getAllByText(label)[0])

    const notTooltip = container.querySelector('p') // Get Tooltip content
    expect(notTooltip).toBeNull()
  })

  test('built-in tooltip defers to outer tooltip', async () => {
    const tooltip = 'Add to favorites'
    const label = 'Mark as my Favorite'
    const { getByText, getByRole } = renderWithTheme(
      <Tooltip content={tooltip}>
        <IconButton label={label} icon="Favorite" />
      </Tooltip>
    )

    const button = getByRole('button')
    fireEvent.mouseOver(button)

    expect(getByText(tooltip)).toBeInTheDocument()

    const iconLabel = getByText(label)
    expect(iconLabel).toBeInTheDocument()

    const tooltipContents = getByText(tooltip) // Get all Tooltip contents
    expect(tooltipContents).toBeVisible()

    fireEvent.mouseOut(button)
    await waitForElementToBeRemoved(() => getByText(tooltip))
  })

  test('built-in tooltip respects text-align, width props', async () => {
    const label = 'Mark as my Favorite'
    renderWithTheme(
      <IconButton
        tooltipWidth="4rem"
        tooltipTextAlign="right"
        label={label}
        icon="Favorite"
      />
    )

    const trigger = screen.getByText(label)
    fireEvent.mouseOver(trigger)

    const tooltip = screen.queryAllByText(label)
    expect(tooltip[0]).toBeVisible()
    expect(tooltip[0]).toHaveStyleRule('max-width', '4rem')
    expect(tooltip[0]).toHaveStyleRule('text-align', 'right')

    fireEvent.mouseOut(trigger)
    await waitForElementToBeRemoved(() => screen.getAllByText(label)[1])
  })
})
