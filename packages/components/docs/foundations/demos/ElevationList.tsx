/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { ElevationRamp } from '@looker/design-tokens';
import styled from 'styled-components';
import { Code, Space } from '../../../src';

const elevations: ElevationRamp[] = [
  'plus0',
  'plus1',
  'plus2',
  'plus3',
  'plus4',
  'plus5',
];

const ElevatedBox = styled.div<{ level: ElevationRamp }>`
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.medium};
  box-shadow: ${({ level, theme }) => theme.elevations[level]};
  display: flex;
  height: 125px;
  justify-content: center;
  width: 124px;
`;

export const ElevationList = () => (
  <Space gap="u6">
    {elevations.map(e => {
      return (
        <ElevatedBox key={e} level={e}>
          <Code fontSize="xsmall" color="text3">
            {e}
          </Code>
        </ElevatedBox>
      );
    })}
  </Space>
);
