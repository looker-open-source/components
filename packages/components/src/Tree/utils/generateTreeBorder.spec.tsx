/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import 'jest-styled-components';
import styled from 'styled-components';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { generateTreeBorder } from './generateTreeBorder';

describe('generateTreeBorder', () => {
  test('without border', () => {
    const TreeBorder = styled.div`
      color: blue;
      ${generateTreeBorder}
    `;
    renderWithTheme(<TreeBorder>border</TreeBorder>);
    expect(screen.getByText('border')).not.toHaveStyleRule('background-image');
  });

  test('with border', () => {
    const TreeBorder = styled.div`
      ${generateTreeBorder}
    `;
    renderWithTheme(<TreeBorder border>border</TreeBorder>);
    expect(screen.getByText('border')).toHaveStyleRule(
      'background-image',
      'linear-gradient( 90deg,transparent calc((1.25rem + 1px) / 2 + (1.25rem + 0.25rem) * 0 - 1px),#DEE1E5 calc((1.25rem + 1px) / 2 + (1.25rem + 0.25rem) * 0 - 1px) calc((1.25rem + 1px) / 2 + (1.25rem + 0.25rem) * 0),transparent calc((1.25rem + 1px) / 2 + (1.25rem + 0.25rem) * 0) )'
    );
  });

  test('with depth', () => {
    const TreeBorder = styled.div`
      color: blue;
      ${generateTreeBorder}
    `;
    renderWithTheme(
      <TreeBorder border depth={2}>
        border
      </TreeBorder>
    );
    expect(screen.getByText('border')).toHaveStyleRule(
      'background-image',
      'linear-gradient( 90deg,transparent calc((1.25rem + 1px) / 2 + (1.25rem + 0.25rem) * 2 - 1px),#DEE1E5 calc((1.25rem + 1px) / 2 + (1.25rem + 0.25rem) * 2 - 1px) calc((1.25rem + 1px) / 2 + (1.25rem + 0.25rem) * 2),transparent calc((1.25rem + 1px) / 2 + (1.25rem + 0.25rem) * 2) )'
    );
  });

  test('with color', () => {
    const TreeBorder = styled.div`
      ${generateTreeBorder}
    `;
    renderWithTheme(
      <TreeBorder border depth={2} color="measure">
        border
      </TreeBorder>
    );
    expect(screen.getByText('border')).toHaveStyleRule(
      'background-image',
      'linear-gradient( 90deg,transparent calc((1.25rem + 1px) / 2 + (1.25rem + 0.25rem) * 2 - 1px),#daad81 calc((1.25rem + 1px) / 2 + (1.25rem + 0.25rem) * 2 - 1px) calc((1.25rem + 1px) / 2 + (1.25rem + 0.25rem) * 2),transparent calc((1.25rem + 1px) / 2 + (1.25rem + 0.25rem) * 2) )'
    );
  });
});
