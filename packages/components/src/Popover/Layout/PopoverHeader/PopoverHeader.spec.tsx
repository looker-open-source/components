/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { PopoverHeader } from '.';

function Basic() {
  return <PopoverHeader>Header Text</PopoverHeader>;
}

function Hidden() {
  return <PopoverHeader hidden>Header Text</PopoverHeader>;
}

function HideClose() {
  return <PopoverHeader hideClose>Header Text</PopoverHeader>;
}

describe('PopoverHeader', () => {
  test('Close visible by default', () => {
    renderWithTheme(<Basic />);
    expect(screen.getByText('Header Text')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });
  test('hideClose', () => {
    renderWithTheme(<HideClose />);
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument();
  });

  test('hidden header', () => {
    renderWithTheme(<Hidden />);
    const hiddenHeader = screen.getByText('Header Text');
    expect(hiddenHeader).toBeInTheDocument();
    expect(hiddenHeader).toHaveStyle('clip: rect(1px, 1px, 1px, 1px)');
  });
});
