/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import styled from 'styled-components';
import type { Colors } from '@looker/design-tokens';
import { CircleContainer } from './ProgressSvg';
import type { ProgressCircularSizes } from './size';
import { progressCircularSVG } from './size';

interface DeterminateProgressProps {
  size: ProgressCircularSizes;
  progress?: number;
  color: keyof Colors;
}

export const DeterminateProgress = ({
  size,
  progress = 0,
  color,
}: DeterminateProgressProps) => {
  const { stroke, half, radius, dashArray } = progressCircularSVG({ size });

  const progressOffset = (1 - progress) * (2 * Math.PI * radius);

  return (
    <DeterminateContainer>
      <CircleContainer
        viewBox={`0 0 ${half * 2} ${half * 2}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <DeterminateCircle
          cx={half}
          cy={half}
          r={radius}
          strokeDasharray={dashArray}
          strokeDashoffset={progressOffset}
          strokeWidth={stroke}
          color={color}
        />
      </CircleContainer>
    </DeterminateContainer>
  );
};

const DeterminateContainer = styled.div`
  height: 100%;
  position: absolute;
  transform: rotate(-90deg);
  width: 100%;
`;

const DeterminateCircle = styled.circle<{ color: keyof Colors }>`
  stroke: ${({ theme, color }) => {
    return theme.colors[color];
  }};
  transition: stroke-dashoffset 500ms;
`;
