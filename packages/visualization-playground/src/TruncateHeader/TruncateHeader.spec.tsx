/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockTableConfig } from '@looker/visualizations-adapters';
import { TruncateHeader } from './TruncateHeader';

afterEach(() => {
  jest.resetAllMocks();
});

describe('TruncateHeader', () => {
  const handleConfigChange = jest.fn();

  it('hidden when truncate_header is unsupported', () => {
    const { container } = renderWithTheme(
      <TruncateHeader
        config={{ type: 'unsupported' as 'table' }}
        onConfigChange={handleConfigChange}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('toggles truncate_header', () => {
    renderWithTheme(
      <TruncateHeader
        config={{ ...mockTableConfig, truncate_header: true }}
        onConfigChange={handleConfigChange}
      />
    );

    fireEvent.click(screen.getByLabelText('Truncate header'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        truncate_header: false,
      })
    );
  });
});
