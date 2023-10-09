/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockTableConfig } from '@looker/visualizations-adapters';
import { ShowRowTotals } from './ShowRowTotals';

afterEach(() => {
  jest.resetAllMocks();
});

describe('ShowRowTotals', () => {
  const handleConfigChange = jest.fn();

  it('hidden when show_row_totals is unsupported', () => {
    const { container } = renderWithTheme(
      <ShowRowTotals
        config={{ type: 'unsupported' as 'table' }}
        onConfigChange={handleConfigChange}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('toggles show_row_totals', () => {
    renderWithTheme(
      <ShowRowTotals
        config={{ ...mockTableConfig, show_row_totals: true }}
        onConfigChange={handleConfigChange}
      />
    );

    fireEvent.click(screen.getByLabelText('Show row totals'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        show_row_totals: false,
      })
    );
  });
});
