/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DensityProp, DensityRamp, Theme } from '@looker/design-tokens'
import { css } from 'styled-components'
import { accordionDimensions } from '../../Accordion2/accordionDimensions'

export type GenerateIndentProps = DensityProp & {
  depth?: number
}

export const generateIndentCalculation = (
  depth: number,
  density: DensityRamp,
  theme: Theme
) => {
  const { space, sizes } = theme
  const { indicatorGap, indicatorSize } = accordionDimensions(density)

  return `calc((${sizes[indicatorSize]} + ${space[indicatorGap]}) * ${depth})`
}

export const generateIndent = ({
  depth = 0,
  density,
}: GenerateIndentProps) => css`
  padding-left: ${({ theme }) =>
    generateIndentCalculation(depth, density || theme.defaults.density, theme)};
`
