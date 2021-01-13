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
import isFunction from 'lodash/isFunction'
import styled from 'styled-components'
import React, { FC, ReactNode, useContext, useState, useEffect } from 'react'
import { Placement } from '@popperjs/core'
import { ListItemDetail } from '../List/ListItemDetail'
import { Paragraph } from '../Text'
import { useID } from '../utils/useID'
import { Icon, IconPlaceholder } from '../Icon'
import { Tooltip } from '../Tooltip'
import { ListItemContext } from './ListItemContext'
import { ListItemLayout } from './ListItemLayout'

export interface ListItemProps extends CompatibleHTMLProps<HTMLElement> {
  iconArtwork?: ReactNode
  /**
   * Indicates the ListItem is checked
   */
  current?: boolean
  /*
   * optional extra description
   */
  description?: ReactNode
  detail?: ReactNode
  icon?: IconNames
  /**
   * Sets the correct accessible role for the ListItem:
   * - Use **'link'** for items that navigation to another page
   * - Use **'button'** for items that trigger in page interactions, like displaying a dialog
   * @default 'button'
   *
   */
  itemRole?: 'link' | 'button'
  tooltip?: string
  tooltipPlacement?: Placement
}

const ListItemInternal: FC<ListItemProps> = (props) => {
  const {
    children,
    className,
    current,
    description,
    detail,
    disabled,
    href,
    icon,
    iconArtwork,
    itemRole,
    onBlur,
    onClick,
    onKeyUp,
    target,
    tooltip,
    tooltipPlacement = 'left',
  } = props

  const [isFocusVisible, setFocusVisible] = useState(false)

  const handleOnBlur = (event: React.FocusEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    onBlur && onBlur(event)
  }

  const {
    itemDimensions,
    renderIconPlaceholder,
    setRenderIconPlaceholder,
  } = useContext(ListItemContext)

  const handleOnClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setFocusVisible(false)
    onClick && onClick(event)
  }

  const handleOnKeyUp = (event: React.KeyboardEvent<HTMLLIElement>) => {
    onKeyUp && onKeyUp(event)
    setFocusVisible(true)
  }

  useEffect(() => {
    if (isFunction(setRenderIconPlaceholder)) {
      icon && setRenderIconPlaceholder(true)
    }
  }, [icon, setRenderIconPlaceholder])

  const renderedIconID = useID(props.id)

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
      renderIconPlaceholder && (
        <IconPlaceholder
          data-testid={`list-item-${renderedIconID}-icon-placeholder`}
          size={itemDimensions.iconSize}
          iconGap={itemDimensions.iconGap}
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

  /**
   * `target="_blank" can be used to reverse tab-nab
   * https://owasp.org/www-community/attacks/Reverse_Tabnabbing
   */
  const noTabNab = 'noopener noreferrer'
  const rel =
    target === '_blank'
      ? props.rel
        ? `${props.rel} ${noTabNab}`
        : noTabNab
      : props.rel

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
    <Component href={href} rel={rel} target={target} tabIndex={-1}>
      {renderedIcon}
      <span>
        {renderedChildren}
        {description && (
          <Paragraph color="text2" fontSize="xsmall">
            {description}
          </Paragraph>
        )}
      </span>
      {detail && <ListItemDetail>{detail}</ListItemDetail>}
    </Component>
  )

  return (
    <ListItemLayout
      aria-current={current && 'true'}
      disabled={disabled}
      focusVisible={isFocusVisible}
      onBlur={handleOnBlur}
      onClick={disabled ? undefined : handleOnClick}
      onKeyUp={handleOnKeyUp}
      className={className}
      {...itemDimensions}
    >
      {tooltip ? (
        <Tooltip placement={tooltipPlacement} content={tooltip}>
          {listItemContent}
        </Tooltip>
      ) : (
        listItemContent
      )}
    </ListItemLayout>
  )
}

export const ListItem = styled(ListItemInternal)`
  ${Icon} {
    align-self: ${({ description }) => (description ? 'flex-start' : 'center')};
  }
`
