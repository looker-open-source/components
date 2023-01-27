/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import type { FilterModel } from '@looker/filter-expressions'
import React from 'react'
import { ParamFilter } from './ParamFilter'

describe('ParamFilter tests', () => {
  const enumerations = [
    {
      label: 'First',
      value: 'first',
    },
    {
      label: 'Second',
      value: 'second',
    },
    {
      label: 'Third',
      value: 'third',
    },
  ]

  it('should select new option when clicked', async () => {
    renderWithTheme(
      <ParamFilter
        item={
          {
            id: 1,
            value: ['first'],
          } as unknown as FilterModel
        }
        enumerations={enumerations}
      />
    )

    const select = await screen.findByText('First')

    expect(select).toBeVisible()
  })
})
