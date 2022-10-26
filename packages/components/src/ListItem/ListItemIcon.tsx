/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

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
