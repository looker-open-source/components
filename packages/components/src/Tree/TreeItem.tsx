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
import { TreeContext } from './TreeContext'

export interface TreeItemProps {
  children: ReactNode
  className?: string
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
}

// TODO: Figure out why this throws TS error
export const TreeItemSpace = styled(Space)`
  border: 1px solid transparent;
  outline: none;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.keyFocus};
  }
`

const TreeItemDetail = styled.span`
  align-items: center;
  display: flex;
`

interface TreeItemPrimaryProps {
  hovered: boolean
  selected?: boolean
}

// TODO: Figure out why this throws TS error
export const TreeItemPrimary = styled(Space)<TreeItemPrimaryProps>`
  background-color: ${({ hovered, selected }) => {
    return selected
      ? uiTransparencyBlend(1)
      : hovered
      ? uiTransparencyBlend(2)
      : undefined
  }};
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  height: 100%;
  outline: none;
  padding: ${({ theme }) => theme.space.xxsmall};
`

const TreeItemSecondary = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  padding: ${({ theme }) => theme.space.xxsmall};
`

const TreeItemLayout: FC<TreeItemProps> = (props) => {
  const { detailAccessory, detailHoverDisclosure } = useContext(TreeContext)

  const handleDetailClick = (event: MouseEvent<HTMLElement>) => {
    // Automatically prevents detail click from opening Accordion
    const isDetailAcccessoryEnabled =
      props.detailAccessory !== undefined
        ? props.detailAccessory
        : detailAccessory

    isDetailAcccessoryEnabled && event.stopPropagation()
  }

  const handleDetailKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    // Automatically prevents detail click from opening Accordion
    const isDetailAcccessoryEnabled =
      props.detailAccessory !== undefined
        ? props.detailAccessory
        : detailAccessory

    isDetailAcccessoryEnabled && event.stopPropagation()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.keyCode === 13) {
      event.currentTarget.click()
    }
  }

  const defaultIconSize = 12

  const treeItemRef = useRef<HTMLDivElement>(null)
  const [isTreeItemHovered] = useHovered(treeItemRef)

  const renderedIcon = props.icon && (
    <Icon name={props.icon} size={defaultIconSize} />
  )
  const renderedDetail = props.detail &&
    ((props.detailHoverDisclosure !== undefined
      ? !props.detailHoverDisclosure
      : !detailHoverDisclosure) ||
      isTreeItemHovered) && (
      <TreeItemDetail
        onClick={handleDetailClick}
        onKeyDown={handleDetailKeyDown}
      >
        {props.detail}
      </TreeItemDetail>
    )

  const isDetailAccesoryEnabled =
    props.detailAccessory !== undefined
      ? props.detailAccessory
      : detailAccessory

  return (
    <TreeItemSpace
      className={props.className}
      gap="none"
      onClick={props.onClick}
      onKeyDown={handleKeyDown}
      ref={treeItemRef}
      tabIndex={props.onClick ? 0 : -1}
    >
      <TreeItemPrimary
        gap={props.gapSize || 'xxsmall'}
        hovered={isTreeItemHovered}
        selected={props.selected}
      >
        {renderedIcon}
        <FlexItem flex="1">{props.children}</FlexItem>
        {!isDetailAccesoryEnabled && renderedDetail}
      </TreeItemPrimary>
      {isDetailAccesoryEnabled && (
        <TreeItemSecondary>{renderedDetail}</TreeItemSecondary>
      )}
    </TreeItemSpace>
  )
}

export const TreeItem = styled(TreeItemLayout)`
  align-items: center;
  cursor: ${({ onClick }) => onClick && 'pointer'};
  display: flex;
  height: 25px;
`
