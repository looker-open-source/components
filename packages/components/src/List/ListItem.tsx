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
import { Icon, IconPlaceholder } from '../Icon'
import { HoverDisclosureContext, HoverDisclosure, useHovered } from '../utils'
import { ListItemContext } from './ListItemContext'
import { ListItemLayout } from './ListItemLayout'
import { ListItemLayoutAccessory } from './ListItemLayoutAccessory'
import { ListItemWrapper } from './ListItemWrapper'
import { DensityRamp, Detail, ListItemStatefulProps } from './types'
import { createSafeRel, getDetailOptions, listItemDimensions } from './utils'

export interface ListItemProps
  extends CompatibleHTMLProps<HTMLElement>,
    ListItemStatefulProps {
  /**
   * Determines color of child if child is a string
   */
  color?: string
  /**
   * Determines the sizing and spacing of the item
   * Notes:
   * - This prop is intended for internal components usage (density should be set on a parent List component for external use cases).
   * - If you choose to use this prop on a ListItem directly, it must be consistent across all items for windowing purposes.
   * @private
   */
  density?: DensityRamp
  /*
   * optional extra description
   */
  description?: ReactNode
  /**
   * Detail element placed right of the item children. Prop value can take one of two forms:
   * 1. ReactNode
   * 2. Object with content and options properties
   */
  detail?: Detail
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
    color,
    current,
    density: propsDensity,
    description,
    detail,
    disabled,
    href,
    icon,
    iconArtwork,
    itemRole,
    keyColor,
    onBlur,
    onClick,
    onKeyDown,
    onKeyUp,
    rel,
    selected,
    target,
    truncate,
    ...restProps
  } = props

  const { iconGutter, density: contextDensity } = useContext(ListItemContext)

  const itemDimensions = listItemDimensions(propsDensity || contextDensity)

  const [focusVisible, setFocusVisible] = useState(false)

  const itemRef = useRef<HTMLLIElement>(null)
  const [hovered] = useHovered(itemRef)

  const handleOnBlur = (event: React.FocusEvent<HTMLElement>) => {
    setFocusVisible(false)
    onBlur && onBlur(event)
  }

  const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
    setFocusVisible(false)
    onClick && onClick(event)
  }

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    onKeyDown && onKeyDown(event)
    setFocusVisible(true)
  }

  const handleOnKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    onKeyUp && onKeyUp(event)
    setFocusVisible(true)
  }

  const renderedIcon =
    icon || iconArtwork ? (
      <Icon
        artwork={iconArtwork}
        color={color || 'text1'}
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

  const renderedChildren =
    typeof children === 'string' ? (
      <Paragraph
        color={color}
        fontSize={itemDimensions.labelFontSize}
        lineHeight={itemDimensions.labelLineHeight}
        truncate={truncate}
      >
        {children}
      </Paragraph>
    ) : (
      children
    )

  const renderedDescription =
    typeof description === 'string' ? (
      <Paragraph
        color="text2"
        fontSize={itemDimensions.descriptionFontSize}
        lineHeight={itemDimensions.descriptionLineHeight}
        truncate={truncate}
      >
        {description}
      </Paragraph>
    ) : (
      description
    )

  const { accessory, content, hoverDisclosure } = getDetailOptions(detail)

  const renderedDetail = detail && (
    <HoverDisclosure visible={!hoverDisclosure}>
      <ListItemDetail pr={accessory ? itemDimensions.px : '0'}>
        {content}
      </ListItemDetail>
    </HoverDisclosure>
  )

  const LabelContainer = !disabled && itemRole === 'link' ? 'a' : 'button'
  const LabelContainerCreator: FC<{
    children: ReactNode
    className: string
  }> = ({ children, className }) => (
    <LabelContainer
      aria-current={current}
      aria-selected={selected}
      className={className}
      href={href}
      onBlur={handleOnBlur}
      onClick={disabled ? undefined : handleOnClick}
      onKeyDown={handleOnKeyDown}
      onKeyUp={handleOnKeyUp}
      rel={createSafeRel(rel, target)}
      role="listitem"
      target={target}
      tabIndex={-1}
    >
      {children}
    </LabelContainer>
  )

  const Layout = accessory ? ListItemLayoutAccessory : ListItemLayout
  const listItemContent = (
    <Layout
      containerCreator={LabelContainerCreator}
      description={renderedDescription}
      detail={renderedDetail}
      icon={renderedIcon}
      px={itemDimensions.px}
      py={itemDimensions.py}
    >
      {renderedChildren}
    </Layout>
  )

  return (
    <HoverDisclosureContext.Provider value={{ visible: hovered }}>
      <ListItemWrapper
        className={className}
        current={current}
        description={description}
        disabled={disabled}
        focusVisible={focusVisible}
        hovered={hovered}
        keyColor={keyColor}
        ref={itemRef}
        selected={selected}
        {...itemDimensions}
        {...restProps}
      >
        {listItemContent}
      </ListItemWrapper>
    </HoverDisclosureContext.Provider>
  )
}

export const ListItem = styled(ListItemInternal)``
