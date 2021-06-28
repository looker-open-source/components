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

import React, { ReactElement } from 'react'
import { ListItemProps } from '../types'
import { IconPlaceholderProps, IconType } from '../../Icon'
import { listItemDimensions } from './listItemDimensions'
import { createListItemDetail } from './createListItemDetail'
import { createListItemIcon } from './createListItemIcon'
import { createListItemLabel } from './createListItemLabel'
import { getDetailOptions } from '.'

export type CreateListItemPartitionsProps = {
  icon?: IconType | ReactElement<IconPlaceholderProps>
} & ListItemProps

export const createListItemPartitions = ({
  children: label,
  color,
  density = 0,
  description,
  detail,
  disabled,
  icon,
  truncate,
}: CreateListItemPartitionsProps) => {
  const itemDimensions = listItemDimensions(density)

  const iconProps = {
    color,
    disabled,
    icon,
    iconGap: itemDimensions.iconGap,
    iconSize: itemDimensions.iconSize,
  }

  const labelProps = {
    color,
    description,
    descriptionFontSize: itemDimensions.descriptionFontSize,
    descriptionLineHeight: itemDimensions.descriptionLineHeight,
    disabled,
    label,
    labelFontSize: itemDimensions.labelFontSize,
    labelLineHeight: itemDimensions.labelLineHeight,
    truncate,
  }

  const { content, ...options } = getDetailOptions(detail)
  const detailProps = {
    detail: content,
    px: itemDimensions.px,
    ...options,
  }

  const renderedIcon = icon && createListItemIcon(iconProps)
  const renderedLabel = createListItemLabel(labelProps)
  const renderedDetail = detail && createListItemDetail(detailProps)

  const inside = (
    <>
      {renderedIcon}
      {renderedLabel}
      {!options.accessory && renderedDetail}
    </>
  )

  const outside = options.accessory && renderedDetail

  return [inside, outside]
}
