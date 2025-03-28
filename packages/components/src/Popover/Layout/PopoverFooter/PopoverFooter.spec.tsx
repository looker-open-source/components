/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { ButtonTransparent } from '../../../Button/ButtonTransparent';
import { PopoverFooter } from '.';

function Basic() {
  return <PopoverFooter />;
}

function FooterClose() {
  return <PopoverFooter closeButton="Close" />;
}

function FooterWithChildren() {
  return (
    <PopoverFooter>
      <ButtonTransparent color="neutral" size="small">
        Cancel
      </ButtonTransparent>
    </PopoverFooter>
  );
}

describe('PopoverFooter', () => {
  test('basic ', () => {
    renderWithTheme(<Basic />);
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  test('with using prop close ', () => {
    renderWithTheme(<FooterClose />);
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  test('with children', () => {
    renderWithTheme(<FooterWithChildren />);
    expect(screen.getByText('Done')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });
});
