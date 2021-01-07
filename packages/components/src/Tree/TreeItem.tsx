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

import React, {
  FC,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useContext,
  useRef,
  useState,
  Fragment,
} from 'react'
import styled from 'styled-components'
import {
  color,
  CompatibleHTMLProps,
  SpacingSizes,
  TextColorProps,
} from '@looker/design-tokens'
import Omit from 'lodash/omit'
import noop from 'lodash/noop'
import { Space, FlexItem } from '../Layout'
import { Icon, IconNames } from '../Icon'
import { useHovered } from '../utils/useHovered'
import {
  HoverDisclosureContext,
  HoverDisclosure,
} from '../utils/HoverDisclosure'
import { undefinedCoalesce } from '../utils'
import { Truncate } from '../Truncate'
import { TreeContext } from './TreeContext'
import { treeBackgroundColor } from './utils'
import { TreeBackgroundStyleProps } from './types'

export interface TreeItemProps
  extends TreeBackgroundStyleProps,
    Omit<CompatibleHTMLProps<HTMLDivElement>, 'color'>,
    TextColorProps {
  children: ReactNode
  className?: string
  /**
   * Supplementary element that appears right of the TreeItem's label
   * Note: The detail container will stop propagation of events. Place your element(s) in the label
   *  prop if you'd like events on them to bubble.
   */
  detail?: ReactNode
  /**
   * If true, the detail elements will appear outside of the TreeItem's grey background on hover
   * In addition, if true, events will not propagate from the detail container
   * @default false
   */
  detailAccessory?: boolean
  /**
   * If true, then the detail element this TreeItem will only appear on hover
   * @default false
   */
  detailHoverDisclosure?: boolean
  /**
   * Gap size of the internal Space component
   * @default 'xsmall'
   */
  gapSize?: SpacingSizes
  /**
   * Icon element that appears left of the TreeItem children
   */
  icon?: IconNames
  /**
   * onClick callback
   */
  onClick?: () => void
  /**
   * Callback that is triggered on CMD + Enter on Mac
   * or Windows key + Enter on PC
   */
  onMetaEnter?: () => void
  /**
   * Prevent text wrapping on long labels and instead render truncated text
   **/
  truncate?: boolean
}

const TreeItemLayout: FC<TreeItemProps> = ({
  children,
  className,
  brand: propsBrand,
  detailAccessory: propsDetailAccessory,
  detailHoverDisclosure: propsDetailHoverDisclosure,
  disabled,
  gapSize = 'xsmall',
  onMetaEnter = noop,
  selected,
  truncate,
  ...props
}) => {
  const treeContext = useContext(TreeContext)
  const itemRef = useRef<HTMLDivElement>(null)
  const detailRef = useRef<HTMLDivElement>(null)
  const [isHovered] = useHovered(itemRef)
  const [isFocusVisible, setFocusVisible] = useState(false)

  const {
    onBlur = noop,
    onClick = noop,
    onKeyDown = noop,
    onKeyUp = noop,
    ...restProps
  } = Omit(props, ['color', 'detail', 'icon'])

  const brand = undefinedCoalesce([propsBrand, treeContext.brand])

  const detailAccessory = undefinedCoalesce([
    propsDetailAccessory,
    treeContext.detailAccessory,
  ])

  const detailHoverDisclosure = undefinedCoalesce([
    propsDetailHoverDisclosure,
    treeContext.detailHoverDisclosure,
  ])

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (
      detailRef.current &&
      detailRef.current.contains(event.target as Node) &&
      detailAccessory
    ) {
      event.stopPropagation()
      return
    }

    setFocusVisible(false)
    onClick()
  }

  const handleKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Tab' && event.currentTarget === event.target)
      setFocusVisible(true)

    onKeyUp(event)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (
      detailRef.current &&
      detailRef.current.contains(event.target as Node) &&
      detailAccessory
    ) {
      event.stopPropagation()
      return
    }

    if (event.key === 'Enter') {
      event.metaKey ? onMetaEnter() : onClick()
    }

    onKeyDown(event)
  }

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    setFocusVisible(false)
    onBlur(event)
  }

  const defaultIconSize = 12

  const detail = (
    <HoverDisclosure visible={!detailHoverDisclosure}>
      <TreeItemDetail detailAccessory={!!detailAccessory} ref={detailRef}>
        {props.detail}
      </TreeItemDetail>
    </HoverDisclosure>
  )

  const TextWrapper = truncate ? Truncate : Fragment
  const isTreeItemTabbable = onClick || onMetaEnter ? 0 : -1

  return (
    <HoverDisclosureContext.Provider value={{ visible: isHovered }}>
      <TreeItemSpace
        className={className}
        focusVisible={isFocusVisible}
        gap="none"
        onBlur={handleBlur}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        ref={itemRef}
        tabIndex={isTreeItemTabbable}
        {...restProps}
      >
        <TreeItemLabel
          brand={brand}
          disabled={disabled}
          hovered={isHovered}
          gap={gapSize}
          selected={selected}
        >
          {props.icon && (
            <PrimaryIcon name={props.icon} size={defaultIconSize} />
          )}
          <FlexItem flex="1" fontSize="xsmall" lineHeight="xsmall">
            <TextWrapper>{children}</TextWrapper>
          </FlexItem>
          {!detailAccessory && detail}
        </TreeItemLabel>
        {detailAccessory && detail}
      </TreeItemSpace>
    </HoverDisclosureContext.Provider>
  )
}

const PrimaryIcon = styled(Icon)`
  height: ${({ theme }) => theme.lineHeights.xsmall};
  opacity: 0.5;
`

interface TreeItemSpaceProps {
  focusVisible: boolean
}

export const TreeItemSpace = styled(Space)<TreeItemSpaceProps>`
  align-items: center;
  cursor: pointer;
  flex-shrink: 2;
  min-height: ${({ theme }) => theme.sizes.medium};
  min-width: 0;
  outline: 1px solid transparent;
  outline-color: ${({ focusVisible, theme }) =>
    focusVisible && theme.colors.keyFocus};
`

export const TreeItemLabel = styled(Space)<TreeBackgroundStyleProps>`
  ${treeBackgroundColor}
  align-items: center;
  color: ${({ disabled, theme: { colors } }) =>
    disabled ? colors.text1 : colors.text5};
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  flex: 1;
  flex-shrink: 2;
  height: 100%;
  max-width: 100%;
  min-height: ${({ theme }) => theme.sizes.medium};
  min-width: 0;
  outline: none;
`

const TreeItemDetail = styled.div<{ detailAccessory: boolean }>`
  align-items: center;
  display: flex;
  height: 100%;
`

export const TreeItem = styled(TreeItemLayout)`
  /*
    Note: first-child pseudo-selector is here to give this selector
    more specificity over TreeGroup.
  */
  ${TreeItemLabel}:first-child {
    ${color}
  }
`
