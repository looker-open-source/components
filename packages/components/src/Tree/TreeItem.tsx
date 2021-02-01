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
  useContext,
  useRef,
  useState,
  Fragment,
} from 'react'
import styled from 'styled-components'
import { color, TextColorProps } from '@looker/design-tokens'
import omit from 'lodash/omit'
import noop from 'lodash/noop'
import { Space, FlexItem } from '../Layout'
import { Icon } from '../Icon'
import { useHovered } from '../utils/useHovered'
import {
  HoverDisclosureContext,
  HoverDisclosure,
} from '../utils/HoverDisclosure'
import { undefinedCoalesce } from '../utils'
import { Truncate } from '../Truncate'
import { ListItemProps } from '../List'
import { getDetailOptions, listItemBackgroundColor } from '../List/utils'
import { ListItemStatefulWithHoveredProps } from '../List/types'
import { TreeContext } from './TreeContext'

export interface TreeItemProps
  extends Omit<ListItemProps, 'color'>,
    TextColorProps {
  /**
   * Callback that is triggered on CMD + Enter on Mac
   * or Windows key + Enter on PC
   */
  onMetaEnter?: () => void
}

const TreeItemLayout: FC<TreeItemProps> = ({
  children,
  className,
  detail,
  disabled,
  keyColor: propsKeyColor,
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
  } = omit(props, ['color', 'detail', 'icon'])

  const keyColor = undefinedCoalesce([propsKeyColor, treeContext.keyColor])

  const { accessory, hoverDisclosure, detailContent } = getDetailOptions(detail)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setFocusVisible(false)
    onClick(event)
  }

  const handleKeyUp = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Tab' && event.currentTarget === event.target)
      setFocusVisible(true)

    onKeyUp(event)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      event.metaKey ? onMetaEnter() : onClick()
    }

    onKeyDown(event)
  }

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    setFocusVisible(false)
    onBlur(event)
  }

  const defaultIconSize = 12

  const detailElement = (
    <HoverDisclosure visible={!hoverDisclosure}>
      <TreeItemDetail detailAccessory={!!accessory} ref={detailRef}>
        {detailContent}
      </TreeItemDetail>
    </HoverDisclosure>
  )

  const TextWrapper = truncate ? Truncate : Fragment

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
        tabIndex={-1}
        {...restProps}
      >
        <TreeItemLabel
          keyColor={keyColor}
          disabled={disabled}
          hovered={isHovered}
          selected={selected}
        >
          {props.icon && (
            <PrimaryIcon name={props.icon} size={defaultIconSize} />
          )}
          <FlexItem flex="1" fontSize="xsmall" lineHeight="xsmall">
            <TextWrapper>{children}</TextWrapper>
          </FlexItem>
          {!accessory && detailElement}
        </TreeItemLabel>
        {accessory && detailElement}
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

export const TreeItemLabel = styled(Space)<ListItemStatefulWithHoveredProps>`
  ${listItemBackgroundColor}
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
