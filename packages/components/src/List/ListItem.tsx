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

import { CompatibleHTMLProps, FontSizes } from '@looker/design-tokens'
import styled from 'styled-components'
import React, {
  FC,
  forwardRef,
  ReactNode,
  Ref,
  useContext,
  useState,
} from 'react'
import { ListItemDetail } from '../List/ListItemDetail'
import { Text } from '../Text'
import { IconPlaceholder, IconType } from '../Icon'
import { Truncate } from '../Truncate'
import {
  HoverDisclosureContext,
  HoverDisclosure,
  undefinedCoalesce,
  useWrapEvent,
} from '../utils'
import { ListItemContext } from './ListItemContext'
import { ListItemLabel } from './ListItemLabel'
import { ListItemLayout } from './ListItemLayout'
import { ListItemLayoutAccessory } from './ListItemLayoutAccessory'
import { ListItemWrapper } from './ListItemWrapper'
import { listItemIconColor, listItemLabelColor } from './utils/listItemColor'
import {
  DensityRamp,
  Detail,
  ListItemRole,
  ListItemStatefulProps,
  ListItemColorProps,
} from './types'
import { createSafeRel, getDetailOptions, listItemDimensions } from './utils'

const TruncateWrapper: FC<{
  color?: string
  fontSize?: FontSizes
  lineHeight?: FontSizes
}> = ({ children, color, fontSize, lineHeight }) => (
  <Text color={color} fontSize={fontSize} lineHeight={lineHeight}>
    <Truncate>{children}</Truncate>
  </Text>
)

export type ListItemProps = CompatibleHTMLProps<HTMLElement> &
  ListItemStatefulProps &
  ListItemColorProps & {
    /**
     * Determines the sizing and spacing of the item
     * Notes:
     * - This prop is intended for internal components usage (density should be set on a parent List component for external use cases).
     * - If you choose to use this prop on a ListItem directly, it must be consistent across all items for windowing purposes.
     * @private
     */
    density?: DensityRamp
    /**
     * optional extra description
     * I18n recommended: content that is user visible should be treated for i18n
     */
    description?: ReactNode
    /**
     * Detail element placed right of the item children. Prop value can take one of two forms:
     * 1. ReactNode
     * 2. Object with content and options properties
     *
     * I18n recommended: content that is user visible should be treated for i18n
     */
    detail?: Detail
    /**
     * Optional icon placed left of the item children
     */
    icon?: IconType
    /**
     * Sets the correct accessible role for the ListItem:
     * - Use **'link'** for items that navigation to another page
     * - Use **'button'** for items that trigger in page interactions, like displaying a dialog
     * - Use **'none'** when including buttons as children in the label container (i.e. the label container will be a <div>).
     *     NOTE: Height when using an item with a description and role='none' does not auto abide the @looker/components
     *     density scale. Use 'button' or 'link' whenever possible to avoid space inconsistencies.
     * @default 'button'
     */
    itemRole?: ListItemRole
    /**
     * If true, text children and description will be truncated if text overflows
     */
    truncate?: boolean
    /**
     * Callback to specify onClick handler on item's whitespace.
     * @private May only be passed via TreeItem. This feature may be removed without a breaking change. We STRONGLY discourage the direct use of this property.
     */
    onClickWhitespace?: (event: React.MouseEvent<HTMLElement>) => void
  }

const ListItemInternal = forwardRef(
  (
    {
      children,
      className,
      color: propsColor,
      current,
      density: propsDensity,
      description,
      detail,
      disabled = false,
      hovered: propsHovered = false,
      href,
      icon,
      itemRole,
      keyColor,
      onBlur,
      onClick,
      onClickWhitespace,
      onKeyDown,
      onKeyUp,
      onMouseEnter,
      onMouseLeave,
      rel,
      role,
      selected,
      target,
      truncate,
      ...restProps
    }: ListItemProps,
    ref: Ref<HTMLLIElement>
  ) => {
    const {
      density: contextDensity,
      iconGutter,
      color: contextColor,
    } = useContext(ListItemContext)

    const itemDimensions = listItemDimensions(propsDensity || contextDensity)

    if (keyColor) propsColor = 'key'
    const color = undefinedCoalesce([propsColor, contextColor])

    const [focusVisible, setFocusVisible] = useState(false)
    const [hovered, setHovered] = useState(propsHovered)

    const descriptionColor = disabled ? 'text1' : 'text2'

    const handleOnBlur = (event: React.FocusEvent<HTMLElement>) => {
      setFocusVisible(false)
      onBlur && onBlur(event)
    }

    const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
      setFocusVisible(false)

      if (itemRole !== 'none' && onClick) {
        onClick(event)
      }
    }

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
      onKeyDown && onKeyDown(event)
      setFocusVisible(true)
    }

    const handleOnKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
      onKeyUp && onKeyUp(event)
      setFocusVisible(true)
    }

    const handleOnMouseEnter = useWrapEvent(
      () => setHovered(true),
      onMouseEnter
    )
    const handleOnMouseLeave = useWrapEvent(
      () => setHovered(false),
      onMouseLeave
    )

    if (disabled && itemRole === 'link') {
      // eslint-disable-next-line no-console
      console.warn(
        'itemRole="link" and disabled cannot be combined - use itemRole="button" if you need to offer a disabled ListItem'
      )
    }

    if (itemRole === 'none' && onClick) {
      // eslint-disable-next-line no-console
      console.warn(
        'itemRole="none" and onClick cannot be combined - if itemRole="none" is a necessity, assign click behavior directly to ListItem\'s children'
      )
    }

    const Wrapper = truncate ? TruncateWrapper : Text

    const renderedChildren = (
      <Wrapper
        color={listItemLabelColor(color, disabled)}
        fontSize={itemDimensions.labelFontSize}
        lineHeight={itemDimensions.labelLineHeight}
      >
        {children}
      </Wrapper>
    )

    const renderedDescription = (
      <Wrapper
        color={descriptionColor}
        fontSize={itemDimensions.descriptionFontSize}
        lineHeight={itemDimensions.descriptionLineHeight}
      >
        {description}
      </Wrapper>
    )

    const { accessory, content, hoverDisclosure } = getDetailOptions(detail)

    const renderedDetail = detail && (
      <HoverDisclosure visible={!hoverDisclosure}>
        <ListItemDetail pr={accessory ? itemDimensions.px : '0'}>
          {content}
        </ListItemDetail>
      </HoverDisclosure>
    )

    const statefulProps = {
      color,
      current,
      disabled,
      hovered,
      selected,
    }

    const LabelCreator: FC<{
      children: ReactNode
      className?: string
    }> = ({ children, className }) => (
      <ListItemLabel
        itemRole={itemRole}
        aria-current={current}
        aria-selected={selected}
        className={className}
        height={itemDimensions.height}
        href={href}
        onBlur={handleOnBlur}
        onClick={disabled ? undefined : handleOnClick}
        onKeyDown={handleOnKeyDown}
        onKeyUp={handleOnKeyUp}
        rel={createSafeRel(rel, target)}
        role={role || 'listitem'}
        target={target}
        tabIndex={-1}
        {...statefulProps}
      >
        {children}
      </ListItemLabel>
    )

    const Layout = accessory ? ListItemLayoutAccessory : ListItemLayout
    const listItemContent = (
      <Layout
        color={listItemIconColor(color, disabled)}
        description={renderedDescription}
        detail={renderedDetail}
        disabled={disabled}
        icon={icon || (iconGutter && <IconPlaceholder />)}
        iconGap={itemDimensions.iconGap}
        iconSize={itemDimensions.iconSize}
        labelCreator={LabelCreator}
        px={itemDimensions.px}
        py={itemRole === 'none' ? 'none' : itemDimensions.py}
      >
        {renderedChildren}
      </Layout>
    )

    const handleOnClickWhitespace = (event: React.MouseEvent<HTMLElement>) => {
      if (event.currentTarget === event.target) {
        setFocusVisible(true)
        onClickWhitespace && onClickWhitespace(event)
      }
    }
    return (
      <HoverDisclosureContext.Provider value={{ visible: hovered }}>
        <ListItemWrapper
          className={className}
          color={listItemLabelColor(color, disabled)}
          description={description}
          disabled={disabled}
          focusVisible={focusVisible}
          onClick={handleOnClickWhitespace}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          ref={ref}
          {...itemDimensions}
          {...restProps}
        >
          {listItemContent}
        </ListItemWrapper>
      </HoverDisclosureContext.Provider>
    )
  }
)

ListItemInternal.displayName = 'ListItemInternal'

export const ListItem = styled(ListItemInternal)<ListItemProps>``
