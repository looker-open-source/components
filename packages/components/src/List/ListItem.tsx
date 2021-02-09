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

import { CompatibleHTMLProps, FontSizes } from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import styled from 'styled-components'
import React, { FC, ReactNode, useContext, useRef, useState } from 'react'
import { ListItemDetail } from '../List/ListItemDetail'
import { Text } from '../Text'
import { Icon, IconPlaceholder } from '../Icon'
import { Truncate } from '../Truncate'
import {
  HoverDisclosureContext,
  HoverDisclosure,
  useHovered,
  undefinedCoalesce,
} from '../utils'
import { ListItemContext } from './ListItemContext'
import { ListItemLayout } from './ListItemLayout'
import { ListItemLayoutAccessory } from './ListItemLayoutAccessory'
import { ListItemWrapper } from './ListItemWrapper'
import { DensityRamp, Detail, ListItemStatefulProps } from './types'
import { createSafeRel, getDetailOptions, listItemDimensions } from './utils'

const TruncateWrapper: FC<{
  color?: string
  fontSize?: FontSizes
  lineHeight?: FontSizes
}> = ({ children, color, fontSize, lineHeight }) => (
  <Truncate>
    <Text color={color} fontSize={fontSize} lineHeight={lineHeight}>
      {children}
    </Text>
  </Truncate>
)

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

interface ListItemLabelProps extends CompatibleHTMLProps<HTMLElement> {
  disabled?: boolean
  itemRole?: 'link' | 'button'
}

export const ListItemLabel = styled.div
  .withConfig<ListItemLabelProps>({
    shouldForwardProp: (prop) => prop !== 'itemRole',
  })
  .attrs<ListItemLabelProps>(({ disabled, itemRole }) => ({
    as: !disabled && itemRole === 'link' ? 'a' : 'button',
  }))<ListItemLabelProps>``

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
    keyColor: propsKeyColor,
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

  const {
    density: contextDensity,
    iconGutter,
    keyColor: contextKeyColor,
  } = useContext(ListItemContext)

  const itemDimensions = listItemDimensions(propsDensity || contextDensity)
  const keyColor = undefinedCoalesce([propsKeyColor, contextKeyColor])

  const [focusVisible, setFocusVisible] = useState(false)

  const itemRef = useRef<HTMLLIElement>(null)
  const [hovered] = useHovered(itemRef)

  const labelColor = disabled ? 'text1' : color
  const descriptionColor = disabled ? 'text1' : 'text2'
  const iconColor = disabled ? 'text1' : color || 'text1'

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
        color={iconColor}
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

  const TextWrapper = truncate ? TruncateWrapper : Text

  const renderedChildren =
    typeof children === 'string' ? (
      <TextWrapper
        color={labelColor}
        fontSize={itemDimensions.labelFontSize}
        lineHeight={itemDimensions.labelLineHeight}
      >
        {children}
      </TextWrapper>
    ) : (
      children
    )

  const renderedDescription =
    typeof description === 'string' ? (
      <TextWrapper
        color={descriptionColor}
        fontSize={itemDimensions.descriptionFontSize}
        lineHeight={itemDimensions.descriptionLineHeight}
      >
        {description}
      </TextWrapper>
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

  const LabelCreator: FC<{
    children: ReactNode
    className: string
  }> = ({ children, className }) => (
    <ListItemLabel
      itemRole={itemRole}
      aria-current={current}
      aria-selected={selected}
      className={className}
      disabled={disabled}
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
    </ListItemLabel>
  )

  const Layout = accessory ? ListItemLayoutAccessory : ListItemLayout
  const listItemContent = (
    <Layout
      labelCreator={LabelCreator}
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
