/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components';
import type { DensityRamp, Theme } from '@looker/design-tokens';
import { isListColor, listItemDimensions } from '../../ListItem';

export type TreeBorderProps = {
  border?: boolean;
  color?: string;
  density?: DensityRamp;
  depth?: number;
  theme: Theme;
};

const getColor = (theme: Theme, color?: string): string => {
  if (isListColor(color)) {
    return theme.colors[`${color}Focus`];
  }
  return color || theme.colors.ui2;
};

/**
 * Creates a vertical "border" for Tree's content container if border is true.
 */
export const generateTreeBorder = ({
  border,
  color,
  density,
  theme,
  depth = 0,
}: TreeBorderProps) => {
  if (!border) return false;

  const { iconSize } = listItemDimensions(density || theme.defaults.density);

  const itemBorderSize = '1px';
  const itemGutter = '0.25rem';
  const indicatorIconSize = theme.sizes[iconSize];
  const depthSize = `(${indicatorIconSize} + ${itemGutter}) * ${depth}`;
  const borderSpacer = `(${indicatorIconSize} + ${itemBorderSize}) / 2 + ${depthSize}`;

  const preBorderStop = `calc(${borderSpacer} - ${itemBorderSize})`;
  const postBorderStop = `calc(${borderSpacer})`;

  return css`
    background-image: linear-gradient(
      90deg,
      transparent ${preBorderStop},
      ${getColor(theme, color)} ${preBorderStop} ${postBorderStop},
      transparent ${postBorderStop}
    );
  `;
};
