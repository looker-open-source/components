/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import React from 'react'
import { useElementVisibility } from './MenuHeading.hooks'

const TestHook = () => {
  const [isVisible, ref] = useElementVisibility()
  return <div ref={ref}>{isVisible.toString()}</div>
}

describe('MenuHeading Hooks', () => {
  it('it returns true as the default visibility state', () => {
    renderWithTheme(<TestHook />)
    expect(screen.getByText('true')).toBeVisible()
  })
})
