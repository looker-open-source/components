/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Colors, Theme } from '@looker/design-tokens'
import { itemSelectedColor } from '@looker/design-tokens'
import { css } from 'styled-components'
import type { ListItemColorProp, ListItemStatefulProps } from '../types'

export type ListItemBackgroundColorProps = ListItemStatefulProps &
  ListItemColorProp & {
    /**
     * Indicates ripple is enabled and hover should not be used
     */
    ripple?: boolean
  }

/**
 * @TODO Remove hovered prop and hovered logic when ripple effect
 * is implemented in LkField components. All other ListItem related
 * components (i.e. ListItem, NavTreeItem, TreeItem) all use ripple
 * to handle hover state.
 */
export const listItemBackgroundColor = ({
  color,
  disabled,
  hovered: propsHovered,
  ripple,
  selected,
  theme: { colors },
}: ListItemBackgroundColorProps & { theme: Theme }) => {
  const stateColors = color
    ? {
        all: colors[`${color}Subtle` as keyof Colors],
        hovered: colors.ui1,
        selected: colors[`${color}Subtle` as keyof Colors],
      }
    : {
        all: itemSelectedColor(colors.ui2),
        hovered: colors.ui1,
        selected: itemSelectedColor(colors.ui2),
      }

  let renderedColor
  const hovered = !ripple && propsHovered

  if (disabled) renderedColor = 'transparent'
  else if (selected && hovered) renderedColor = stateColors.all
  else if (selected) renderedColor = stateColors.selected
  else if (hovered) renderedColor = stateColors.hovered
  else renderedColor = 'transparent'

  return css`
    background: ${renderedColor};
  `
}
