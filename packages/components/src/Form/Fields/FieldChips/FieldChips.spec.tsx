/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FieldChips } from './FieldChips';

const handleChange = jest.fn();
const handleBlur = jest.fn();

describe('FieldChip', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('renders a description', () => {
    renderWithTheme(
      <FieldChips
        description="no vegetables allowed"
        id="FieldChipsID"
        label="Chip label"
        onChange={handleChange}
        values={[]}
      />
    );
    expect(screen.getByLabelText('Chip label')).toBeInTheDocument();
    expect(screen.getByText('no vegetables allowed')).toBeInTheDocument();
  });

  it('renders values', () => {
    renderWithTheme(
      <FieldChips
        description="no vegetables allowed"
        id="FieldChipsID"
        label="Chip label"
        onChange={handleChange}
        values={['dingos', 'quokkas']}
      />
    );
    // because the strings are spans and not input values, you cannot query the
    // some by Display Value to test the presence of values
    expect(screen.queryByDisplayValue(/dingos/i)).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue(/quokkas/i)).not.toBeInTheDocument();

    expect(screen.getByText(/dingos/i)).toBeInTheDocument();
    expect(screen.getByText(/quokkas/i)).toBeInTheDocument();
  });

  it('calls onBlur when blurred', () => {
    renderWithTheme(
      <FieldChips
        description="no vegetables allowed"
        id="FieldChipsID"
        label="Chip label"
        onChange={handleChange}
        onBlur={handleBlur}
        values={[]}
      />
    );
    const input = screen.getByLabelText('Chip label');
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });

  it('calls onChange when blurred with typed contents', () => {
    renderWithTheme(
      <FieldChips
        description="no vegetables allowed"
        id="FieldChipsID"
        label="Chip label"
        onChange={handleChange}
        onBlur={handleBlur}
        values={[]}
      />
    );
    const input = screen.getByLabelText('Chip label');
    userEvent.type(input, 'testing');
    fireEvent.blur(input);
    expect(handleChange).toHaveBeenCalledWith(['testing']);
  });
});
