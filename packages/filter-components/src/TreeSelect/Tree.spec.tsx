/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import noop from 'lodash/noop'
import React from 'react'
import { renderWithTheme } from '@looker/test-utils'
import { mockTreeData } from './stories/examples'
import { Tree } from './Tree'

describe('Tree tests', () => {
  it('should render a tree', async () => {
    const { container } = renderWithTheme(
      <Tree tree={mockTreeData} onSectionClick={noop} onFieldClick={noop} />
    )

    expect(container).toBeVisible()
  })
})
