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
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useContext,
  useRef,
} from 'react'
import styled from 'styled-components'
import { SpacingSizes, uiTransparencyBlend } from '@looker/design-tokens'
import { Space, FlexItem } from '../Layout'
import { Icon, IconNames } from '../Icon'
import { useHovered } from '../utils/useHovered'
import {
  HoverDisclosureContext,
  HoverDisclosure,
} from '../utils/HoverDisclosure'
import { TreeContext } from './TreeContext'

export interface TreeItemProps {
  /**
   * Supplementary element that appears right of the TreeItem's label
   */
  detail?: ReactNode
  /**
   * If true, clicking on the detail element will not trigger the TreeItem's onClick
   * and no hover background appearing behind the detail elements
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
   * Callback that is triggered on TreeItem click
   */
  onClick?: () => void
  /**
   * Determines if this TreeItem is in a selected state or not
   */
  selected?: boolean

  className?: string
}

const TreeItemLayout: FC<TreeItemProps> = ({
  onClick,
  gapSize = 'xxsmall',
  selected,
  ...props
}) => {
  const treeContext = useContext(TreeContext)
  const treeItemRef = useRef<HTMLDivElement>(null)
  const detailRef = useRef<HTMLDivElement>(null)
  const [isHovered] = useHovered(treeItemRef)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (detailRef.current && detailRef.current.contains(event.target as Node)) {
      return
    }

    onClick && onClick()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (detailRef.current && detailRef.current.contains(event.target as Node)) {
      return
    }

    if (event.keyCode === 13) {
      event.currentTarget.click()
    }
  }
  const defaultIconSize = 12

  const detailAccessory =
    props.detailAccessory !== undefined
      ? props.detailAccessory
      : treeContext.detailAccessory

  const detailHoverDisclosure =
    props.detailHoverDisclosure !== undefined
      ? props.detailHoverDisclosure
      : treeContext.detailHoverDisclosure

  const detail = (
    <HoverDisclosure visible={!detailHoverDisclosure}>
      <TreeItemDetail ref={detailRef}>{props.detail}</TreeItemDetail>
    </HoverDisclosure>
  )

  return (
    <HoverDisclosureContext.Provider value={{ visible: isHovered }}>
      <Space
        className={props.className}
        gap="none"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        ref={treeItemRef}
        tabIndex={onClick ? 0 : -1}
      >
        <TreeItemLabel gap={gapSize} hovered={isHovered} selected={selected}>
          {props.icon && <Icon name={props.icon} size={defaultIconSize} />}
          <FlexItem flex="1">{props.children}</FlexItem>
          {!detailAccessory && detail}
        </TreeItemLabel>
        {detailAccessory && detail}
      </Space>
    </HoverDisclosureContext.Provider>
  )
}

export const TreeItem = styled(TreeItemLayout)`
  align-items: center;
  border: 1px solid transparent;
  cursor: ${({ onClick }) => onClick && 'pointer'};
  display: flex;
  height: 25px;
  outline: none;

  &:focus-within {
    border-color: ${({ theme: { colors } }) => colors.keyFocus};
  }
`

interface TreeItemLabelProps {
  hovered: boolean
  selected?: boolean
}

export const TreeItemLabel = styled(Space)<TreeItemLabelProps>`
  background-color: ${({ hovered, selected }) =>
    selected ? uiTransparencyBlend(1) : hovered && uiTransparencyBlend(2)};
  flex: 1;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xsmall};
  height: 100%;
  outline: none;
  padding: ${({ theme: { space } }) => space.xxsmall};
`

const TreeItemDetail = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`
