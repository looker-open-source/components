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
