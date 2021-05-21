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
  useEffect,
  useRef,
  useState,
} from 'react'
import { ListItemDetail } from '../List/ListItemDetail'
import { Text } from '../Text'
import { IconPlaceholder, IconType } from '../Icon'
import { Truncate, TruncateConfigProp } from '../Truncate'
import {
  HoverDisclosureContext,
  HoverDisclosure,
  undefinedCoalesce,
  useFocusVisible,
  useWrapEvent,
  getNextFocusTarget,
  useForkedRef,
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
  truncateDescription?: string
}> = ({ children, color, truncateDescription, fontSize, lineHeight }) => (
  <Text color={color} fontSize={fontSize} lineHeight={lineHeight}>
    <Truncate description={truncateDescription}>{children}</Truncate>
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
     *     - Height when using an item with a description and role='none' does not auto abide the @looker/components
     *     density scale. Use 'button' or 'link' whenever possible to avoid space inconsistencies.
     *     - If supporting keyboard navigation, make sure to add key handlers to items
     * @default 'button'
     */
    itemRole?: ListItemRole
    /**
     * If true, text children and description will be truncated if text overflows
     * Specifying `description` will cause the truncation tooltip for label to _always_ be presented
     *
     * Text specified in `description` property will be displayed below `label` in the tooltip
     */
    truncate?: TruncateConfigProp

    /**
     * Callback to specify onClick handler on item's whitespace.
     * @private May only be passed via TreeItem. This feature may be removed without a breaking change. We STRONGLY discourage the direct use of this property.
     */
    onClickWhitespace?: (event: React.MouseEvent<HTMLElement>) => void
    /**
     * Determines the type of the rendered ListItemWrapper
     * @default false
     * @private Should only be passed when ListItem is wrapped by another component like Tree. This feature may be removed without a breaking change. We STRONGLY discourage the direct use of this property.
     */
    renderAsDiv?: boolean
  }

const ListItemInternal = forwardRef(
  (
    {
      children,
      className,
      color: propsColor,
      density: propsDensity,
      description,
      detail,
      disabled = false,
      hovered: propsHovered = false,
      href,
      icon,
      itemRole,
      onBlur,
      onClick,
      onClickWhitespace,
      onKeyDown,
      onKeyUp,
      onMouseEnter,
      onMouseLeave,
      rel,
      renderAsDiv = false,
      role,
      selected,
      tabIndex = -1,
      target,
      truncate,
      ...restProps
    }: ListItemProps,
    ref: Ref<HTMLLIElement | HTMLDivElement>
  ) => {
    const {
      density: contextDensity,
      iconGutter,
      color: contextColor,
    } = useContext(ListItemContext)
    const truncateDescription =
      typeof truncate === 'object' ? truncate.description : undefined

    const itemDimensions = listItemDimensions(propsDensity || contextDensity)

    const color = undefinedCoalesce([propsColor, contextColor])

    const { focusVisible, ...focusVisibleHandlers } = useFocusVisible({
      onBlur,
      onKeyUp,
    })
    const [hovered, setHovered] = useState(propsHovered)

    const descriptionColor = disabled ? 'text1' : 'text2'

    const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
      if (itemRole !== 'none' && onClick) {
        onClick(event)
      }
    }

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
        truncateDescription={truncateDescription}
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

    const { accessory, content, hoverDisclosure, padding } = getDetailOptions(
      detail
    )

    const wrapperRef = useRef<HTMLLIElement | HTMLDivElement>(null)
    const actualRef = useForkedRef(wrapperRef, ref)
    useEffect(() => {
      const focusableElements = wrapperRef?.current?.querySelectorAll(
        'a, button, input'
      )

      if (focusableElements) {
        focusableElements.forEach((activeElement) => {
          activeElement.setAttribute('tabIndex', '-1')
        })
      }
    })

    const renderedDetail = detail && (
      <HoverDisclosure visible={!hoverDisclosure}>
        <ListItemDetail
          pl={padding ? 'xsmall' : '0'}
          pr={accessory && padding ? itemDimensions.px : '0'}
        >
          {content}
        </ListItemDetail>
      </HoverDisclosure>
    )

    const statefulProps = {
      color,
      disabled,
      hovered,
      selected,
    }

    const ariaProps = {}
    const wrapperProps = {}
    Object.entries(restProps).forEach(([propKey, propValue]) =>
      propKey.startsWith('aria-')
        ? (ariaProps[propKey] = propValue)
        : (wrapperProps[propKey] = propValue)
    )

    const LabelCreator: FC<{
      children: ReactNode
      className?: string
    }> = ({ children, className }) => (
      <ListItemLabel
        itemRole={itemRole}
        aria-selected={selected}
        className={className}
        focusVisible={focusVisible}
        height={itemDimensions.height}
        href={href}
        onClick={disabled ? undefined : handleOnClick}
        onKeyDown={onKeyDown}
        rel={createSafeRel(rel, target)}
        role={role || 'listitem'}
        target={target}
        tabIndex={tabIndex}
        {...ariaProps}
        {...focusVisibleHandlers}
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
        onClickWhitespace && onClickWhitespace(event)
      }
    }

    const handleWrapperFocus = () => {
      setHovered(true)
    }

    const handleWrapperBlur = (event: React.FocusEvent<HTMLElement>) => {
      const nextFocusTarget = getNextFocusTarget(event)

      if (
        nextFocusTarget &&
        !event.currentTarget.contains(nextFocusTarget as Node)
      ) {
        setHovered(false)
      }
    }

    const handleWrapperMouseEnter = useWrapEvent(
      () => setHovered(true),
      onMouseEnter
    )

    const handleWrapperMouseLeave = useWrapEvent(
      () => setHovered(false),
      onMouseLeave
    )

    return (
      <HoverDisclosureContext.Provider value={{ visible: hovered }}>
        <ListItemWrapper
          className={className}
          color={listItemLabelColor(color, disabled)}
          description={description}
          disabled={disabled}
          onBlur={handleWrapperBlur}
          onClick={handleOnClickWhitespace}
          onFocus={handleWrapperFocus}
          onMouseEnter={handleWrapperMouseEnter}
          onMouseLeave={handleWrapperMouseLeave}
          ref={actualRef}
          renderAsDiv={renderAsDiv}
          {...itemDimensions}
          {...wrapperProps}
        >
          {listItemContent}
        </ListItemWrapper>
      </HoverDisclosureContext.Provider>
    )
  }
)

ListItemInternal.displayName = 'ListItemInternal'

export const ListItem = styled(ListItemInternal)<ListItemProps>``
