/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { GroupInput } from './GroupInput';

describe('GroupInput', () => {
  it('should handle decimal input', () => {
    const mockOnChange = jest.fn();
    renderWithTheme(<GroupInput onChange={mockOnChange} />);
    const input = screen.getByRole('spinbutton');
    fireEvent.input(input, { target: { value: '1.1' } });
    expect(input).toHaveValue(1.1);
  });
});
