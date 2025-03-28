/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import type { FilterParamProps } from '../../../../../../types/filter_param_props';
import { Year } from './Year';

describe('Year', () => {
  const onChangeMock = jest.fn();
  const mockProps = {
    item: {
      id: '1',
      year: '2018',
    },
    onChange: onChangeMock,
  } as unknown as FilterParamProps;

  it('should render the given year', () => {
    renderWithTheme(<Year {...mockProps} />);
    expect(screen.getByDisplayValue('2018')).toBeVisible();
  });

  it('should invoke the onChange handler when the input changes', () => {
    renderWithTheme(<Year {...mockProps} />);
    const input = screen.getByDisplayValue('2018');
    fireEvent.change(input, { target: { value: '2019' } });
    expect(onChangeMock).toHaveBeenCalledWith('1', { year: '2019' });
  });

  // b/318966515 avoid updating query before user is done typing the year
  it('should not invoke the onChange handler when year is incomplete', () => {
    renderWithTheme(<Year {...mockProps} />);
    const input = screen.getByDisplayValue('2018');
    fireEvent.change(input, { target: { value: '202' } });
    expect(onChangeMock).not.toHaveBeenCalledWith();
  });

  it('should invalidate the input on blur when year is incomplete', () => {
    renderWithTheme(<Year {...mockProps} />);
    const input = screen.getByDisplayValue('2018');
    fireEvent.change(input, { target: { value: '202' } });
    fireEvent.blur(input);
    expect(input).not.toBeValid();
  });
});
