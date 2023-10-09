/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockTableConfig } from '@looker/visualizations-adapters';
import { TruncateText } from './TruncateText';

afterEach(() => {
  jest.resetAllMocks();
});

describe('TruncateText', () => {
  const handleConfigChange = jest.fn();

  it('hidden when truncate_text is unsupported', () => {
    const { container } = renderWithTheme(
      <TruncateText
        config={{ type: 'unsupported' as 'table' }}
        onConfigChange={handleConfigChange}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('toggles truncate_text', () => {
    renderWithTheme(
      <TruncateText
        config={{ ...mockTableConfig, truncate_text: true }}
        onConfigChange={handleConfigChange}
      />
    );

    fireEvent.click(screen.getByLabelText('Truncate text'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        truncate_text: false,
      })
    );
  });
});
