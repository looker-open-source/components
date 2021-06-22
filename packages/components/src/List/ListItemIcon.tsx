/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import styled from 'styled-components'
import { color as colorHelper, SpacingSizes } from '@looker/design-tokens'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { IconPlaceholder, IconSize } from '../Icon'

export type ListItemIconProps = {
  color?: string
  disabled?: boolean
  iconGap: SpacingSizes
  iconSize: IconSize
}

export const ListItemIcon = styled.div.attrs<ListItemIconProps>(
  ({ color = 'text2', disabled }) => ({ color: disabled ? 'text1' : color })
)<ListItemIconProps>`
  align-self: center;
  display: flex;
  margin-right: ${({ iconGap, theme }) => theme.space[iconGap]};
  ${colorHelper}

  & > svg,
  ${StyledIconBase}, ${IconPlaceholder} {
    flex-grow: 0;
    flex-shrink: 0;
    height: ${({ iconSize, theme }) => theme.sizes[iconSize]};
    /* justify-content: center; */
    width: ${({ iconSize, theme }) => theme.sizes[iconSize]};
  }
`
