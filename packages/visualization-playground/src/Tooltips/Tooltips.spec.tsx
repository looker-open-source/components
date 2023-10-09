/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockLineConfig } from '@looker/visualizations-adapters';
import { Tooltips } from './Tooltips';

afterEach(() => {
  jest.resetAllMocks();
});

describe('Tooltips', () => {
  const handleConfigChange = jest.fn();

  it('hidden when tooltips is unsupported', () => {
    const { container } = renderWithTheme(
      <Tooltips
        config={{ type: 'unsupported' as 'line' }}
        onConfigChange={handleConfigChange}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('toggles tooltips', () => {
    renderWithTheme(
      <Tooltips
        config={{ ...mockLineConfig, tooltips: true }}
        onConfigChange={handleConfigChange}
      />
    );

    fireEvent.click(screen.getByLabelText('Tooltips'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        tooltips: false,
      })
    );
  });
});
