/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import styled from 'styled-components'
import React, { FC, ReactNode, useContext, useRef, useState } from 'react'
import { ListItemDetail } from '../List/ListItemDetail'
import { Paragraph } from '../Text'
import { Truncate } from '../Truncate'
import { FlexItem } from '../Layout'
import { Icon, IconPlaceholder } from '../Icon'
import {
  HoverDisclosureContext,
  HoverDisclosure,
  undefinedCoalesce,
  useHovered,
} from '../utils'
import { ListItemContext } from './ListItemContext'
import { ListItemLayout } from './ListItemLayout'
import { createSafeRel } from './utils'

export interface ListItemProps extends CompatibleHTMLProps<HTMLElement> {
  /**
   * Indicates the ListItem is checked
   */
  current?: boolean
  /*
   * optional description
   */
  description?: ReactNode
  /**
   * Detail element placed right of the item children
   */
  detail?: ReactNode
  /**
   * If true, the detail elements will appear outside of the item's grey background on hover
   * In addition, if true, events will not propagate from the detail container
   * @default false
   */
  detailAccessory?: boolean
  /**
   * If true, the detail element will only appear on hover
   * @default false
   */
  detailHoverDisclosure?: boolean
  /**
   * Optional icon placed left of the item children
   */
  icon?: IconNames
  /**
   * Display an icon/logo that is not available on our components list. Use artwork prop with an svg instead of Icon name.
   */
  iconArtwork?: ReactNode
  /**
   * Sets the correct accessible role for the ListItem:
   * - Use **'link'** for items that navigation to another page
   * - Use **'button'** for items that trigger in page interactions, like displaying a dialog
   */
  itemRole?: 'link' | 'button'
  /**
   * If true, text children and description will be truncated if text overflows
   */
  truncate?: boolean
}

const ListItemInternal: FC<ListItemProps> = (props) => {
  const {
    children,
    className,
    current,
    description,
    detail: propsDetail,
    detailAccessory: propsDetailAccessory,
    detailHoverDisclosure: propsDetailHoverDisclosure,
    disabled,
    href,
    icon,
    iconArtwork,
    itemRole,
    onBlur,
    onClick,
    onKeyUp,
    target,
    truncate,
  } = props

  const {
    detailAccessory: contextDetailAccessory,
    detailHoverDisclosure: contextDetailHoverDisclosure,
    iconGutter,
    itemDimensions,
  } = useContext(ListItemContext)

  const detailAccessory = undefinedCoalesce([
    propsDetailAccessory,
    contextDetailAccessory,
  ])

  const detailHoverDisclosure = undefinedCoalesce([
    propsDetailHoverDisclosure,
    contextDetailHoverDisclosure,
  ])

  const [isFocusVisible, setFocusVisible] = useState(false)

  const itemRef = useRef<HTMLLIElement>(null)
  const [isHovered] = useHovered(itemRef)

  const handleOnBlur = (event: React.FocusEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    onBlur && onBlur(event)
  }

  const handleOnClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    onClick && onClick(event)
  }

  const handleOnKeyUp = (event: React.KeyboardEvent<HTMLLIElement>) => {
    onKeyUp && onKeyUp(event)
    setFocusVisible(true)
  }

  const renderedIcon =
    icon || iconArtwork ? (
      <Icon
        artwork={iconArtwork}
        color="text1"
        name={icon}
        size={itemDimensions.iconSize}
        mr={itemDimensions.iconGap}
      />
    ) : (
      iconGutter && (
        <IconPlaceholder
          size={itemDimensions.iconSize}
          mr={itemDimensions.iconGap}
        />
      )
    )

  if (disabled && itemRole === 'link') {
    // eslint-disable-next-line no-console
    console.warn(
      'itemRole="link" and disabled cannot be combined - use itemRole="button" if you need to offer a disabled ListItem'
    )
  }
  const Component = !disabled && itemRole === 'link' ? 'a' : 'button'

  const renderedChildren =
    typeof children === 'string' ? (
      truncate ? (
        <Truncate
          fontSize={itemDimensions.labelFontSize}
          lineHeight={itemDimensions.labelLineHeight}
        >
          {children}
        </Truncate>
      ) : (
        <Paragraph
          fontSize={itemDimensions.labelFontSize}
          lineHeight={itemDimensions.labelLineHeight}
        >
          {children}
        </Paragraph>
      )
    ) : (
      children
    )

  const detail = propsDetail && (
    <HoverDisclosure visible={!detailHoverDisclosure}>
      <ListItemDetail pr={detailAccessory ? itemDimensions.px : '0'}>
        {propsDetail}
      </ListItemDetail>
    </HoverDisclosure>
  )

  const listItemContent = (
    <>
      <Component
        href={href}
        onBlur={handleOnBlur}
        onClick={disabled ? undefined : handleOnClick}
        onKeyUp={handleOnKeyUp}
        rel={createSafeRel(props.rel, props.target)}
        role="listitem"
        target={target}
        tabIndex={-1}
      >
        {renderedIcon}
        <FlexItem>
          {renderedChildren}
          {description && (
            <Paragraph color="text2" fontSize="xsmall">
              {description}
            </Paragraph>
          )}
        </FlexItem>
        {!detailAccessory && detail}
      </Component>
      {detailAccessory && detail}
    </>
  )

  return (
    <HoverDisclosureContext.Provider value={{ visible: isHovered }}>
      <ListItemLayout
        aria-current={current && 'true'}
        description={description}
        detailAccessory={detailAccessory}
        disabled={disabled}
        focusVisible={isFocusVisible}
        className={className}
        ref={itemRef}
        {...itemDimensions}
      >
        {listItemContent}
      </ListItemLayout>
    </HoverDisclosureContext.Provider>
  )
}

export const ListItem = styled(ListItemInternal)``
