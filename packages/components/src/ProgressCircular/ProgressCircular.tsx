/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import styled from 'styled-components';
import type { Colors, IntentColors } from '@looker/design-tokens';
import { IndeterminateProgress } from './IndeterminateProgress';
import { DeterminateProgress } from './DeterminateProgress';
import type { ProgressCircularSizes } from './size';
import { progressCircularSize } from './size';

type SupportedIntentColors = Extract<
  keyof IntentColors,
  'inform' | 'positive' | 'warn' | 'critical'
>;

export interface ProgressCircularProps {
  /**
   * Size of spinner
   * @default large
   */
  size?: ProgressCircularSizes;
  /**
   * The current progress of a determinable progress, between 0 and 1
   */
  progress?: number;
  /**
   * Accessible label
   */
  label?: string;
  /**
   * Render a faded placeholder for the circle not yet filled
   */
  renderTrough?: boolean;
  intent?: SupportedIntentColors;
}

type PossibleColorValues = keyof Colors;

const intentColorMap: Record<
  SupportedIntentColors,
  { primary: PossibleColorValues; secondary: PossibleColorValues }
> = {
  critical: { primary: 'critical', secondary: 'criticalSubtle' },
  inform: { primary: 'key', secondary: 'keySubtle' },
  positive: { primary: 'positive', secondary: 'positiveSubtle' },
  warn: { primary: 'measure', secondary: 'measureSubtle' },
};

export const ProgressCircular = ({
  size = 'large',
  progress,
  label,
  renderTrough,
  intent = 'inform',
  ...props
}: ProgressCircularProps) => {
  const colorValues = intentColorMap[intent];
  return (
    <ProgressContainer
      size={size}
      role="progressbar"
      aria-label={label || undefined}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress ? Math.round(progress * 100) : undefined}
      {...props}
    >
      {renderTrough === true ? (
        <DeterminateProgress
          size={size}
          progress={1}
          color={colorValues.secondary}
        />
      ) : null}
      {progress !== undefined ? (
        <DeterminateProgress
          size={size}
          progress={Math.min(progress, 1)}
          color={colorValues.primary}
        />
      ) : (
        <IndeterminateProgress size={size} color={colorValues.primary} />
      )}
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div<{ size: ProgressCircularSizes }>`
  ${progressCircularSize}
  display: inline-flex;
  position: relative;
`;
