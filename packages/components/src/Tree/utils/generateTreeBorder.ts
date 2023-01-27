/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'
import type { DensityRamp, Theme } from '@looker/design-tokens'
import { listItemDimensions } from '../../ListItem'

export type TreeBorderProps = {
  border?: boolean
  density: DensityRamp
  depth: number
  theme: Theme
}

/**
 * Creates a vertical "border" for Tree's content container if border is true
 * Testing note: style rules validated by storyshots
 */
export const generateTreeBorder = ({
  border,
  density,
  depth,
  theme,
}: TreeBorderProps) => {
  if (!border) return false

  const { iconSize } = listItemDimensions(density)

  const itemBorderSize = '1px'
  const itemGutter = '0.25rem'
  const indicatorIconSize = theme.sizes[iconSize]
  const depthSize = `(${indicatorIconSize} + ${itemGutter}) * ${depth}`
  const borderSpacer = `(${indicatorIconSize} + ${itemBorderSize}) / 2 + ${depthSize}`

  const preBorderStop = `calc(${borderSpacer} - ${itemBorderSize})`
  const postBorderStop = `calc(${borderSpacer})`

  return css`
    background: linear-gradient(
      90deg,
      transparent ${preBorderStop},
      ${theme.colors.ui2} ${preBorderStop} ${postBorderStop},
      transparent ${postBorderStop}
    );
  `
}
