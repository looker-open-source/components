/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import type {
  FilterModel,
  LocationFilterType,
} from '@looker/filter-expressions'
import React from 'react'

import { LocationFilter } from './LocationFilter'

describe('Location filter test', () => {
  it('should render a LocationFilter', () => {
    const item = {
      id: '1',
      type: 'anyvalue',
    } as any as FilterModel<LocationFilterType>
    renderWithTheme(
      <LocationFilter
        item={item}
        filterType="location"
        onChange={jest.fn()}
        showAdd={false}
        showName={true}
        showRemove={false}
        showOperator={false}
        showMatchesAdvanced={false}
        onAdd={jest.fn()}
        onRemove={jest.fn()}
      />
    )
    expect(screen.getByRole('textbox')).toHaveValue('is anywhere')
  })
})
