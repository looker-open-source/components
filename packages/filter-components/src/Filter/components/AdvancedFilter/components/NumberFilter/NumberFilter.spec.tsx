/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { FilterModel, NumberFilterType } from '@looker/filter-expressions';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';

import { NumberFilter } from './NumberFilter';

describe('Number filter test', () => {
  it('should render a NumberFilter', () => {
    const item = {
      id: '1',
      is: true,
      type: '=',
      value: [],
    } as FilterModel<NumberFilterType>;
    renderWithTheme(
      <NumberFilter
        item={item}
        filterType="number"
        onChange={jest.fn()}
        showAdd={false}
        showName={true}
        showRemove={false}
        showOperator={false}
        showMatchesAdvanced={false}
        onAdd={jest.fn()}
        onRemove={jest.fn()}
        allowMultipleOptions={true}
      />
    );
    const inputs = screen.getAllByRole('textbox');
    expect(inputs[0]).toHaveValue('is');
    expect(inputs[1]).toHaveValue('');
  });
});
