/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockBarConfig, mockLineConfig } from '@looker/visualizations-adapters';
import { Positioning } from './Positioning';

afterEach(() => {
  jest.resetAllMocks();
});

describe('Positioning', () => {
  const handleConfigChange = jest.fn();

  it('hidden when positioning is unsupported', () => {
    const { container } = renderWithTheme(
      <Positioning
        config={{ type: 'unsupported' as 'line' }}
        onConfigChange={handleConfigChange}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('area positioning: overlay', () => {
    renderWithTheme(
      <Positioning
        config={{ ...mockLineConfig, type: 'area', positioning: 'percent' }}
        onConfigChange={handleConfigChange}
      />
    );

    // open select menu
    fireEvent.click(screen.getByLabelText('Positioning'));

    // choose new option
    fireEvent.click(screen.getByText('overlay'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        type: 'area',
        positioning: 'overlay',
      })
    );
  });

  it('bar positioning: grouped', () => {
    renderWithTheme(
      <Positioning
        config={{ ...mockBarConfig, positioning: 'percent' }}
        onConfigChange={handleConfigChange}
      />
    );

    // open select menu
    fireEvent.click(screen.getByLabelText('Positioning'));

    // choose new option
    fireEvent.click(screen.getByText('grouped'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        type: 'bar',
        positioning: 'grouped',
      })
    );
  });
});
