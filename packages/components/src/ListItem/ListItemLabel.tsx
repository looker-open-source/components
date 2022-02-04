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

import type { CompatibleHTMLProps, DensityProp } from '@looker/design-tokens'
import type { ReactNode } from 'react'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import type { TruncateConfigProp } from '../Truncate'
import { TruncateOptionally } from '../Truncate'
import type { ListItemColorProp } from './types'
import { listItemDimensions, listItemLabelColor } from './utils'
import { listItemPaddingY } from './utils/listItemPaddingY'

type ListItemLabelProps = CompatibleHTMLProps<HTMLElement> &
  ListItemColorProp &
  DensityProp & {
    disabled?: boolean
    description?: ReactNode
    truncate?: TruncateConfigProp
  }

export const ListItemLabel = styled(
  ({
    color,
    children,
    disabled,
    density,
    description,
    truncate,
    ...props
  }: ListItemLabelProps) => {
    const theme = useContext(ThemeContext)
    const {
      descriptionFontSize,
      descriptionLineHeight,
      labelFontSize,
      labelLineHeight,
    } = listItemDimensions(density || theme.defaults.density)

    return (
      <div {...props}>
        <TruncateOptionally
          truncate={truncate}
          color={listItemLabelColor(color, disabled)}
          fontSize={labelFontSize}
          lineHeight={labelLineHeight}
        >
          {children}
        </TruncateOptionally>
        {description && (
          <TruncateOptionally
            truncate={truncate}
            color={disabled ? 'text1' : 'text2'}
            fontSize={descriptionFontSize}
            lineHeight={descriptionLineHeight}
          >
            {description}
          </TruncateOptionally>
        )}
      </div>
    )
  }
)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  min-height: ${({ density = 0 }) => listItemDimensions(density).height}px;
  /**
   * min-width needed so truncates are aware of container width
   */
  min-width: 0;

  ${({ density = 0 }) => listItemPaddingY(density)}
`
