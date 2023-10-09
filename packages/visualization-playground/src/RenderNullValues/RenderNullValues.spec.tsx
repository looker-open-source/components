/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockLineConfig } from '@looker/visualizations-adapters';
import { RenderNullValues } from './RenderNullValues';

afterEach(() => {
  jest.resetAllMocks();
});

describe('RenderNullValues', () => {
  const handleConfigChange = jest.fn();

  it('hidden when render_null_values is unsupported', () => {
    const { container } = renderWithTheme(
      <RenderNullValues
        config={{ type: 'unsupported' as 'line' }}
        onConfigChange={handleConfigChange}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('toggles render_null_values', () => {
    renderWithTheme(
      <RenderNullValues
        config={{ ...mockLineConfig, render_null_values: true }}
        onConfigChange={handleConfigChange}
      />
    );

    fireEvent.click(screen.getByLabelText('Render Null Values'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        render_null_values: false,
      })
    );
  });
});
