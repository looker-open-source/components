/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { ProgressCircular } from './ProgressCircular';

describe('ProgressCircular', () => {
  test('renders default behavior', () => {
    renderWithTheme(<ProgressCircular />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('renders progress of 25', () => {
    renderWithTheme(<ProgressCircular progress={0.25} />);
    expect(screen.queryByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '25'
    );
  });

  test('renders progress of 0', () => {
    renderWithTheme(<ProgressCircular progress={0} />);
    expect(screen.queryByRole('progressbar')).toHaveAttribute(
      'aria-valuemin',
      '0'
    );
    expect(screen.queryByRole('progressbar')).not.toHaveAttribute(
      'aria-valuenow'
    );
  });

  test('renders progress of 50', () => {
    renderWithTheme(<ProgressCircular progress={0.5} />);
    expect(screen.queryByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '50'
    );
  });

  test('renders progress of 75', () => {
    renderWithTheme(<ProgressCircular progress={0.75} />);
    expect(screen.queryByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '75'
    );
  });

  test('renders progress of 100', () => {
    renderWithTheme(<ProgressCircular progress={1} />);
    expect(screen.queryByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '100'
    );
  });

  test('renders different sizes', () => {
    renderWithTheme(<ProgressCircular size="xsmall" />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('renders alternate color and trough styling', () => {
    renderWithTheme(<ProgressCircular intent="critical" renderTrough />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
