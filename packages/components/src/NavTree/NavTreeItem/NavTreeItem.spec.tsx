/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { NavTreeItem } from './NavTreeItem'

describe('NavTreeItem', () => {
  test('renders as a link when an href is passed in and disperses link-related props onto nested <a>', () => {
    renderWithTheme(
      <NavTreeItem href="https://google.com" target="_blank" rel="hello">
        Link
      </NavTreeItem>
    )

    const nestedLink = screen.getByRole('treeitem')
    expect(nestedLink.nodeName).toBe('A')
    expect(nestedLink).toHaveAttribute('href', 'https://google.com')
    expect(nestedLink).toHaveAttribute('target', '_blank')

    // Note: We expect links with target="_blank" to have "noopener noreferrer" autoappended to their rel prop
    expect(nestedLink).toHaveAttribute('rel', 'hello noopener noreferrer')
  })

  test('has rel="noopener noreferrer" when it has target="_blank" and no passed-in rel prop value', () => {
    renderWithTheme(
      <NavTreeItem itemRole="link" href="https://google.com" target="_blank">
        Link
      </NavTreeItem>
    )

    const nestedLink = screen.getByRole('treeitem')

    expect(nestedLink).toHaveAttribute('target', '_blank')
    expect(nestedLink).toHaveAttribute('href', 'https://google.com')
    expect(nestedLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('does not auto append "noopener noreferrer" to link without target="_blank"', () => {
    renderWithTheme(
      <NavTreeItem itemRole="link" rel="nogouda" href="https://google.com">
        Link
      </NavTreeItem>
    )

    const nestedLink = screen.getByRole('treeitem')

    expect(nestedLink).toHaveAttribute('href', 'https://google.com')
    expect(nestedLink).toHaveAttribute('rel', 'nogouda')
  })
})
