/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import { IndeterminateProgress } from './IndeterminateProgress'
import { DeterminateProgress } from './DeterminateProgress'
import type { ProgressCircularSizes } from './size'
import { progressCircularSize } from './size'

export interface ProgressCircularProps {
  /**
   * Size of spinner
   * @default large
   */
  size?: ProgressCircularSizes
  /**
   * The current progress of a determinable progress, between 0 and 1
   */
  progress?: number
  /**
   * Accessible label
   */
  label?: string
}

export const ProgressCircular = ({
  size = 'large',
  progress,
  label,
  ...props
}: ProgressCircularProps) => {
  return (
    <ProgressContainer
      size={size}
      role="progressbar"
      aria-label={label || undefined}
      aria-valuemin={0}
      aria-valuemax={1}
      aria-valuenow={progress || undefined}
      {...props}
    >
      {progress !== undefined ? (
        <DeterminateProgress size={size} progress={progress} />
      ) : (
        <IndeterminateProgress size={size} />
      )}
    </ProgressContainer>
  )
}

const ProgressContainer = styled.div<{ size: ProgressCircularSizes }>`
  ${progressCircularSize}
  display: inline-flex;
  position: relative;
`
