/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithTheme } from '@looker/test-utils';
import { FieldSearch } from './FieldSearch';

describe('FieldSearch', () => {
  test('Disabled', () => {
    renderWithTheme(
      <FieldSearch disabled disabledText={<div>This is disabled</div>} />
    );
    expect(screen.getByRole('textbox')).toBeDisabled();
    expect(screen.getByText('This is disabled')).toBeVisible();
  });

  test('Placeholder', () => {
    renderWithTheme(<FieldSearch placeholder="Search for a field" />);
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      'Search for a field'
    );
  });
});
