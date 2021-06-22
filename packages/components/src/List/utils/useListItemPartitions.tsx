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

import React, { ReactNode } from 'react'
import { ListItemDetail } from '../ListItemDetail'
import { ListItemIcon } from '../ListItemIcon'
import { ListItemProps } from '../types'
import { HoverDisclosure } from '../../utils/HoverDisclosure'
import { Text } from '../../Text'
import { TruncateWrapper } from '../TruncateWrapper'
import { Flex } from '../../Layout'
import { listItemDimensions } from './listItemDimensions'
import { listItemIconColor, listItemLabelColor } from './listItemColor'
import { getDetailOptions } from '.'

export type UseListItemPartitions = {
  /**
   * Should be either compatible with IconType or an <IconPlaceholder /> component
   */
  icon?: ReactNode
} & ListItemProps

export const useListItemPartitions = ({
  children: label,
  color,
  density = 0,
  description,
  detail,
  disabled,
  icon,
  truncate,
}: UseListItemPartitions) => {
  const itemDimensions = listItemDimensions(density)

  /// ////////////// Create the icon /////////////////
  const renderedIcon = icon && (
    <ListItemIcon
      color={listItemIconColor(color, disabled)}
      disabled={disabled}
      iconGap={itemDimensions.iconGap}
      iconSize={itemDimensions.iconSize}
    >
      {icon}
    </ListItemIcon>
  )

  /// ////////////// Create the label /////////////////
  const Wrapper = truncate ? TruncateWrapper : Text
  const truncateDescription =
    typeof truncate === 'object' ? truncate.description : undefined

  const labelElement = (
    <Wrapper
      color={listItemLabelColor(color, disabled)}
      fontSize={itemDimensions.labelFontSize}
      lineHeight={itemDimensions.labelLineHeight}
      truncateDescription={truncateDescription}
    >
      {label}
    </Wrapper>
  )

  const descriptionColor = disabled ? 'text1' : 'text2'

  const descriptionElement = (
    <Wrapper
      color={descriptionColor}
      fontSize={itemDimensions.descriptionFontSize}
      lineHeight={itemDimensions.descriptionLineHeight}
    >
      {description}
    </Wrapper>
  )

  const renderedContent = (
    <Flex flexDirection="column" minWidth={0} flexGrow={1}>
      {labelElement}
      {descriptionElement}
    </Flex>
  )

  /// ////////////// Create the detail /////////////////

  const { accessory, content, hoverDisclosure, padding, width } =
    getDetailOptions(detail)

  const detailElement = detail && (
    <HoverDisclosure width={width} visible={!hoverDisclosure}>
      <ListItemDetail
        cursorPointer={!accessory}
        pl={padding ? 'xsmall' : '0'}
        pr={accessory && padding ? itemDimensions.px : '0'}
      >
        {content}
      </ListItemDetail>
    </HoverDisclosure>
  )

  const inside = (
    <>
      {renderedIcon}
      {renderedContent}
      {!accessory && detailElement}
    </>
  )

  const outside = accessory && detailElement

  return [inside, outside]
}
