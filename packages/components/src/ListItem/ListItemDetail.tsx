/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DensityProp } from '@looker/design-tokens'
import styled from 'styled-components'
import type { ReactNode } from 'react'
import React from 'react'
import { HoverDisclosure } from '../utils/HoverDisclosure'
import type { ListItemDetailOptions } from './types'
import { listItemDimensions } from './utils'

export type ListItemDetailProps = ListItemDetailOptions &
  DensityProp & {
    children?: ReactNode
    className?: string
  }

export const ListItemDetail = styled(
  ({
    accessory,
    density,
    hoverDisclosure,
    width,
    ...props
  }: ListItemDetailProps) => {
    return (
      <HoverDisclosure width={width} visible={!hoverDisclosure}>
        <div {...props} />
      </HoverDisclosure>
    )
  }
)`
  align-items: center;
  color: ${({ theme }) => theme.colors.text2};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  height: 100%;
  margin-left: auto;
  padding-left: ${({ accessory, density = 0, theme }) =>
    accessory ? 0 : theme.space[listItemDimensions(density).gap]};
`
