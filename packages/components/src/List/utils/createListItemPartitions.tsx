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
import { ListItemDetail } from '../ListItemDetail'
import { ListItemIcon } from '../ListItemIcon'
import { ListItemLabel } from '../ListItemLabel'
import { getDetailOptions } from './getDetailOptions'

export type CreateListItemPartitionsProps = {
  icon?: IconType | ReactElement<IconPlaceholderProps>
} & ListItemProps

export const createListItemPartitions = ({
  color,
  density = 0,
  description,
  disabled,
  icon,
  children,
  truncate,
  ...props
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

  const { content, ...options } = getDetailOptions(props.detail)
  const detail = props.detail && (
    <ListItemDetail {...options}>{content}</ListItemDetail>
  )

  const inside = (
    <>
      {icon && <ListItemIcon {...iconProps} />}
      {<ListItemLabel {...labelProps} />}
      {!options.accessory && detail}
    </>
  )

  return [inside, options.accessory && detail]
}
