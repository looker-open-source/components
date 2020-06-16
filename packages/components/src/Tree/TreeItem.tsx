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
} from 'react'
import styled from 'styled-components'
import { SpacingSizes } from '@looker/design-tokens'
import { Space, FlexItem } from '../Layout'
import { Icon, IconNames } from '../Icon'
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
   * @default false
   */
  detailStopPropagation?: boolean
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
   * Determines if hover styling is applied or not to a TreeItem
   * Note: Used to keep hover styling off of a Tree's internal TreeItem
   */
  noHover?: boolean
  /**
   * Determines if this TreeItem is in a selected state or not
   */
  selected?: boolean
}

interface TreeItemStyle {
  hoverColor: string
  noHover?: boolean
  selected?: boolean
  selectedColor: string
}

const TreeItemStyle = styled.div<TreeItemStyle>`
  background-color: ${({ selected, selectedColor, theme }) =>
    selected && theme.colors[selectedColor]};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.keyFocus};
  }

  &:hover {
    background-color: ${({ hoverColor, noHover, theme }) =>
      !noHover && theme.colors[hoverColor]};
  }
`

const TreeItemLayout: FC<TreeItemProps> = ({
  children,
  className,
  detail,
  detailStopPropagation,
  gapSize = 'xxsmall',
  icon,
  onClick,
  noHover,
  selected,
}) => {
  const { hoverColor = 'ui2', selectedColor = 'ui1' } = useContext(TreeContext)

  const handleDetailClick = (event: MouseEvent<HTMLElement>) => {
    // Automatically prevents detail click from opening Accordion
    detailStopPropagation && event.stopPropagation()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.keyCode === 13) {
      event.currentTarget.click()
    }
  }

  const defaultIconSize = 12

  return (
    <TreeItemStyle
      className={className}
      hoverColor={hoverColor}
      noHover={noHover}
      selected={selected}
      selectedColor={selectedColor}
      tabIndex={onClick ? 0 : -1}
    >
      <Space gap={gapSize} onClick={onClick} onKeyDown={handleKeyDown}>
        {icon && <Icon name={icon} size={defaultIconSize} />}
        <FlexItem flex="1">{children}</FlexItem>
        {detail && <span onClick={handleDetailClick}>{detail}</span>}
      </Space>
    </TreeItemStyle>
  )
}

export const TreeItem = styled(TreeItemLayout)`
  align-items: center;
  border: 1px solid transparent;
  cursor: ${({ onClick }) => onClick && 'pointer'};
  display: flex;
  height: 25px;
  padding: ${({ theme }) => theme.space.xxsmall};
`
