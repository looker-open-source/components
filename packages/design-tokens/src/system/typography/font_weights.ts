/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ResponsiveValue } from 'styled-system'

export type Normal = 'normal'
export type Medium = 'medium'
export type SemiBold = 'semiBold'
export type Bold = 'bold'

export type FontWeights = Normal | Medium | SemiBold | Bold
export type FontWeightRamp = Record<FontWeights, number>

export interface FontWeightProps {
  /**
   * Use a @looker/components FontWeights to set weight
   *   normal, medium, semiBold, bold
   */
  fontWeight?: ResponsiveValue<FontWeights>
}
