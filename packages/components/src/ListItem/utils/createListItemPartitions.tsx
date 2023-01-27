/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactElement } from 'react'
import React from 'react'
import type { ListItemProps } from '../types'
import type { IconPlaceholderProps, IconType } from '../../Icon'
import { ListItemDetail } from '../ListItemDetail'
import { ListItemIcon } from '../ListItemIcon'
import { ListItemLabel } from '../ListItemLabel'
import { getDetailOptions } from './getDetailOptions'

export type CreateListItemPartitionsProps = {
  icon?: IconType | ReactElement<IconPlaceholderProps>
} & Pick<
  ListItemProps,
  | 'color'
  | 'density'
  | 'description'
  | 'detail'
  | 'disabled'
  | 'children'
  | 'truncate'
>

export const createListItemPartitions = ({
  color,
  density,
  description,
  detail,
  disabled,
  icon,
  children,
  truncate,
}: CreateListItemPartitionsProps) => {
  const iconProps = {
    alignStart: Boolean(description),
    children: icon,
    color,
    density,
    disabled,
  }

  const labelProps = {
    children,
    color,
    density,
    description,
    disabled,
    truncate,
  }

  const { accessory, content, ...options } = getDetailOptions(detail)

  const renderedDetail = detail && (
    <ListItemDetail accessory={accessory} density={density} {...options}>
      {content}
    </ListItemDetail>
  )

  const inside = (
    <>
      {icon && <ListItemIcon {...iconProps} />}
      {<ListItemLabel {...labelProps} />}
      {!accessory && renderedDetail}
    </>
  )

  return [inside, accessory && renderedDetail]
}
