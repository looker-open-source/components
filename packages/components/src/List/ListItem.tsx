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

import {
  CompatibleHTMLProps,
  FontSizes,
  shouldForwardProp,
} from '@looker/design-tokens'
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
import { ListItemLayout } from './ListItemLayout'
import { ListItemLayoutAccessory } from './ListItemLayoutAccessory'
import { ListItemWrapper } from './ListItemWrapper'
import {
  DensityRamp,
  Detail,
  ListItemStatefulProps,
  ListItemStatefulWithHoveredProps,
} from './types'
import {
  createSafeRel,
  getDetailOptions,
  listItemBackgroundColor,
  listItemDimensions,
} from './utils'

const TruncateWrapper: FC<{
  color?: string
  fontSize?: FontSizes
  lineHeight?: FontSizes
}> = ({ children, color, fontSize, lineHeight }) => (
  <Text color={color} fontSize={fontSize} lineHeight={lineHeight}>
    <Truncate>{children}</Truncate>
  </Text>
)

type ListItemRole = 'button' | 'link' | 'none'

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
   * @default 'button'
   */
  itemRole?: ListItemRole
  /**
   * If true, text children and description will be truncated if text overflows
   */
  truncate?: boolean
}

export const ListItemLabelButton = styled.button``
export const ListItemLabelA = styled.a``
export const ListItemLabelDiv = styled.div``

const listItemLabelElement = (itemRole: ListItemRole, disabled?: boolean) => {
  if (!disabled && itemRole === 'link') return ListItemLabelA
  if (itemRole === 'none') return ListItemLabelDiv
  return ListItemLabelButton
}

const ListItemLabelLayout: FC<ListItemLabelProps> = ({
  children,
  disabled,
  itemRole = 'button',
  ...props
}) => {
  const Component = listItemLabelElement(
    itemRole,
    disabled
  ) as FC<ListItemLabelProps>

  return (
    <Component
      disabled={disabled}
      type={itemRole === 'button' || disabled ? 'button' : undefined}
      {...props}
    >
      {children}
    </Component>
  )
}

interface ListItemLabelProps
  extends CompatibleHTMLProps<HTMLElement>,
    ListItemStatefulWithHoveredProps {
  disabled?: boolean
  height?: number
  itemRole?: ListItemRole
}

export const ListItemLabel = styled(ListItemLabelLayout).withConfig({
  shouldForwardProp: (prop) => prop === 'itemRole' || shouldForwardProp(prop),
})`
  ${({ height, itemRole }) => itemRole === 'none' && `height: ${height}px;`}
  ${listItemBackgroundColor}

  align-items: center;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  flex: 1;
  font-size: inherit;
  font-weight: inherit;
  margin: 0; /* safari has default margin */
  min-width: 0;
  outline: none;
  text-align: left;
  text-decoration: none;
  transition: ${({ theme: { easings, transitions } }) =>
    `background ${transitions.quick}ms ${easings.ease},
  color ${transitions.quick}ms ${easings.ease}`};
  width: 100%;

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`

const ListItemInternal = forwardRef(
  (props: ListItemProps, ref: Ref<HTMLLIElement>) => {
    const {
      children,
      className,
      color,
      current,
      density: propsDensity,
      description,
      detail,
      disabled = false,
      href,
      icon,
      itemRole,
      keyColor: propsKeyColor,
      onBlur,
      onClick,
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
    } = props

    const {
      density: contextDensity,
      iconGutter,
      keyColor: contextKeyColor,
    } = useContext(ListItemContext)

    const itemDimensions = listItemDimensions(propsDensity || contextDensity)
    const keyColor = undefinedCoalesce([propsKeyColor, contextKeyColor])

    const [focusVisible, setFocusVisible] = useState(false)
    const [hovered, setHovered] = useState(false)

    const labelColor = disabled ? 'text1' : color
    const descriptionColor = disabled ? 'text1' : 'text2'

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

    const Wrapper = truncate ? TruncateWrapper : Text

    const renderedChildren = (
      <Wrapper
        color={labelColor}
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
      current,
      disabled,
      hovered,
      keyColor,
      selected,
    }

    const LabelCreator: FC<{
      children: ReactNode
      className: string
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
        color={color}
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

    return (
      <HoverDisclosureContext.Provider value={{ visible: hovered }}>
        <ListItemWrapper
          className={className}
          description={description}
          disabled={disabled}
          focusVisible={focusVisible}
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

export const ListItem = styled(ListItemInternal)``
