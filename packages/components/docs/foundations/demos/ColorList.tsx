/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import styled from 'styled-components';
import React from 'react';
import { colorBreakdown, theme } from '@looker/design-tokens';
import { Code, Grid } from '../../../src';

type ColorSwatchProps = {
  name: string;
  color: string;
};

const ColorSwatch = styled(({ name, color, ...props }: ColorSwatchProps) => (
  <Code fontSize="xsmall" {...props}>
    {name}
  </Code>
))`
  &::before {
    background: ${({ color }) => color};
    border: 1px solid ${({ theme }) => theme.colors.ui3};
    border-radius: ${({ theme }) => theme.radii.medium};
    content: '';
    display: block;
    height: 4rem;
    margin-bottom: ${({ theme }) => theme.space.u2};
    width: 100%;
  }
`;

const ColorListGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

type ColorListProps = {
  colorKey:
    | 'core'
    | 'derivative'
    | 'intent'
    | 'specializedText'
    | 'stateful'
    | 'text'
    | 'ui';
};

export const ColorList = ({ colorKey }: ColorListProps) => {
  const breakdown = colorBreakdown(theme.colors);
  const colors = breakdown.divided[colorKey] || {};
  return (
    <ColorListGrid gap="u5" maxWidth={600} pt="medium" pb="xxlarge">
      {Object.entries(colors).map(([title, color], key) => (
        <ColorSwatch name={title} color={color} key={key} />
      ))}
    </ColorListGrid>
  );
};
