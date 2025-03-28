/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import styled from 'styled-components';
import type { SpaceProps } from '@looker/design-tokens';
import { space, pickStyledProps } from '@looker/design-tokens';
import { ProgressDuetLoadingBar } from './ProgressDuetLoadingBar';
import { ANIMATION_DURATION } from './utils/constants';
import { getRandomWithinRange } from './utils/getRandomWithinRange';

type ProgressDuetRowProps = {
  columns: string[];
} & SpaceProps;

export const ProgressDuetRow = ({
  columns,
  ...restProps
}: ProgressDuetRowProps) => {
  /**
   * Subtly randomize row width to create the impression of a
   * ragged paragraph edge.
   */
  const totalWidth = getRandomWithinRange(75, 90);

  return (
    <LoadingRow
      columns={columns}
      width={totalWidth}
      {...pickStyledProps(restProps)}
      data-testid="progress-duet-row"
    >
      {columns.map((_, i) => (
        <ProgressDuetLoadingBar
          animationDelay={ANIMATION_DURATION * i + 0.2}
          key={i}
        />
      ))}
    </LoadingRow>
  );
};

type LoadingRowProps = { columns: string[]; width: number } & SpaceProps;

const LoadingRow = styled.div.attrs<LoadingRowProps>(({ columns, width }) => ({
  style: {
    gridTemplateColumns: columns.join(' '),
    width: `${width}%`,
  },
}))<LoadingRowProps>`
  ${space}
  display: grid;
  grid-gap: ${({ theme }) => theme.space.medium};
`;
