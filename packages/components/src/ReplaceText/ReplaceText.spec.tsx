/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { ReplaceText } from '../ReplaceText';

function Basic({
  match = 'che',
  ...props
}: React.ComponentProps<typeof ReplaceText>) {
  return (
    <ReplaceText match={match} {...props}>
      Cheddar cheese
    </ReplaceText>
  );
}

function CustomReplace() {
  return (
    <ReplaceText match="che" replace={props => <em {...props} />}>
      Cheddar cheese
    </ReplaceText>
  );
}

describe('ReplaceText', () => {
  test('globally replaces a case-insensitive string with higlighted text', () => {
    renderWithTheme(<Basic />);
    screen.getAllByText(/che/i).forEach(element => {
      expect(element).toHaveStyle(
        'font-weight: 600; text-decoration: underline'
      );
    });
  });

  test('accepts custom replace component', () => {
    const { container } = renderWithTheme(<CustomReplace />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <em>
          Che
        </em>
        ddar 
        <em>
          che
        </em>
        ese
      </div>
    `);
  });
});
