/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DefaultTheme, StyledComponent } from 'styled-components'
import styled, { useTheme } from 'styled-components'
import type { DensityProp } from '@looker/design-tokens'
import { color as colorHelper } from '@looker/design-tokens'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { IconPlaceholder } from '../Icon'
import {
  listItemDimensions,
  listItemIconColor,
  listItemPaddingY,
} from './utils'
import type { ListItemDimensions } from './types'

export type ListItemIconProps = DensityProp & {
  color?: string
  disabled?: boolean
  alignStart?: boolean
}

type ListItemIconInternalProps = ListItemIconProps &
  Pick<ListItemDimensions, 'height' | 'gap' | 'iconSize' | 'py'>

export const ListItemIcon: StyledComponent<
  'div',
  DefaultTheme,
  ListItemIconProps
> = styled.div.attrs<ListItemIconProps>(
  ({ color, disabled, density, ...props }) => {
    const theme = useTheme()
    const { height, gap, iconSize, py } = listItemDimensions(
      density || theme.defaults.density
    )

    return {
      ...props,
      color: listItemIconColor(color, disabled),
      density,
      gap,
      height,
      iconSize,
      py,
    }
  }
)<ListItemIconInternalProps>`
  align-self: ${({ alignStart }) => (alignStart ? 'flex-start' : 'center')};
  display: flex;
  margin-right: ${({ gap, theme }) => theme.space[gap]};
  ${({ density }) => listItemPaddingY(density)}

  ${colorHelper}

  & > svg, ${StyledIconBase}, ${IconPlaceholder} {
    flex-grow: 0;
    flex-shrink: 0;
    height: ${({ iconSize, theme }) => theme.sizes[iconSize]};
    width: ${({ iconSize, theme }) => theme.sizes[iconSize]};
  }
`
