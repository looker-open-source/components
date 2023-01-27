/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps, DensityProp } from '@looker/design-tokens'
import type { ReactNode } from 'react'
import React from 'react'
import styled, { useTheme } from 'styled-components'
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
    const theme = useTheme()
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
