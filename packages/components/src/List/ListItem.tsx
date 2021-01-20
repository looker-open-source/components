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
import React, { FC, ReactNode, useContext, useState } from 'react'
import { ListItemDetail } from '../List/ListItemDetail'
import { Paragraph } from '../Text'
import { Icon, IconPlaceholder } from '../Icon'
import { undefinedCoalesce } from '../utils'
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
}

const ListItemInternal: FC<ListItemProps> = (props) => {
  const {
    children,
    className,
    current,
    description,
    detail,
    detailAccessory: propsDetailAccessory,
    disabled,
    href,
    icon,
    iconArtwork,
    itemRole,
    onBlur,
    onClick,
    onKeyUp,
    target,
  } = props

  const {
    detailAccessory: contextDetailAccessory,
    iconGutter,
    itemDimensions,
  } = useContext(ListItemContext)

  const detailAccessory = undefinedCoalesce([
    propsDetailAccessory,
    contextDetailAccessory,
  ])

  const [isFocusVisible, setFocusVisible] = useState(false)

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
      <Paragraph
        fontSize={itemDimensions.labelFontSize}
        lineHeight={itemDimensions.labelLineHeight}
      >
        {children}
      </Paragraph>
    ) : (
      children
    )

  const listItemContent = (
    <>
      <Component
        href={href}
        rel={createSafeRel(props.rel, props.target)}
        role="listitem"
        target={target}
        tabIndex={-1}
      >
        {renderedIcon}
        <span>
          {renderedChildren}
          {description && (
            <Paragraph color="text2" fontSize="xsmall">
              {description}
            </Paragraph>
          )}
        </span>
        {detail && !detailAccessory && (
          <ListItemDetail>{detail}</ListItemDetail>
        )}
      </Component>
      {detail && detailAccessory && (
        <ListItemDetail pr={itemDimensions.px}>{detail}</ListItemDetail>
      )}
    </>
  )

  return (
    <ListItemLayout
      aria-current={current && 'true'}
      description={description}
      detailAccessory={detailAccessory}
      disabled={disabled}
      focusVisible={isFocusVisible}
      onBlur={handleOnBlur}
      onClick={disabled ? undefined : handleOnClick}
      onKeyUp={handleOnKeyUp}
      className={className}
      {...itemDimensions}
    >
      {listItemContent}
    </ListItemLayout>
  )
}

export const ListItem = styled(ListItemInternal)``
