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

import React, { ReactNode, FC, useContext } from 'react'
import styled from 'styled-components'
import { Button, ButtonTransparent } from '../Button'
import { Space } from '../Layout'
import { Menu, MenuDisclosure, MenuList } from '../Menu'
import { Text } from '../Text'
import { ActionListContext } from './ActionListContext'

interface ActionListControlBarProps {
  className?: string
  actions: ReactNode
  onTotalSelectAll?: () => void
  pageCount?: number
  totalCount?: number
}

const bulkActionsButtonWidth = '7.5rem'

const ActionListControlBarLayout: FC<ActionListControlBarProps> = ({
  actions,
  className,
  onTotalSelectAll,
  pageCount,
  totalCount,
}) => {
  const { itemsSelected } = useContext(ActionListContext)
  const bulkActionsButton = (
    <Button iconAfter="ArrowDown" minWidth={bulkActionsButtonWidth}>
      <Text fontSize="xsmall">Bulk Actions</Text>
    </Button>
  )

  // TODO: Figure out if there's better logic for the displayed items message
  let message
  if (pageCount) {
    if (itemsSelected.length < pageCount) {
      message = `${itemsSelected.length} of ${pageCount} displayed items selected`
    } else if (itemsSelected.length === pageCount) {
      message = `All ${pageCount} displayed items selected`
    }
  }

  if (pageCount && totalCount) {
    if (itemsSelected.length === totalCount) {
      message = `All ${totalCount} items selected`
    } else {
      message = `${itemsSelected.length} of ${totalCount} items selected`
    }
  }

  const selectedItemsText = pageCount !== undefined && (
    <Text color="text2" fontSize="xsmall">
      {message}
    </Text>
  )

  !selectedItemsText &&
    // eslint-disable-next-line no-console
    console.warn(
      'An ActionList received a bulk prop object without a pageCount property. As a result, the "displayed items selected" text within the ActionList control bar is disabled.'
    )

  const selectTotalResultsButton = totalCount !== undefined &&
    onTotalSelectAll !== undefined && (
      <ButtonTransparent onClick={onTotalSelectAll}>
        <Text fontWeight="semiBold" fontSize="xsmall">
          {`Select all ${totalCount} results`}
        </Text>
      </ButtonTransparent>
    )

  !selectTotalResultsButton &&
    // eslint-disable-next-line no-console
    console.warn(
      'An ActionList received a bulk prop object without a totalCount property or a onTotalSelectAll property. As a result, the "select total results" button within the ActionList control bar is disabled.'
    )

  return (
    <div className={className}>
      <Menu>
        <MenuDisclosure>{bulkActionsButton}</MenuDisclosure>
        <MenuList>{actions}</MenuList>
      </Menu>
      <Space gap="small" justifyContent="center">
        {selectedItemsText}
        {selectTotalResultsButton}
      </Space>
    </div>
  )
}

export const ActionListControlBar = styled(ActionListControlBarLayout)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.neutralSubtle};
  border-bottom: solid 1px ${(props) => props.theme.colors.ui2};
  display: flex;
  padding: ${({ theme }) => theme.space.small};
  padding-left: ${() => {
    // TODO: Export this width from Checkbox.tsx
    const checkboxInputWidth = '1rem'
    const actionListCheckboxWidth = '2.75rem'
    return `calc((${actionListCheckboxWidth} - ${checkboxInputWidth}) / 2)`
  }};
  padding-right: ${() => {
    const checkboxInputWidth = '1rem'
    const actionListCheckboxWidth = '2.75rem'
    return `calc((${actionListCheckboxWidth} - ${checkboxInputWidth}) / 2 + ${bulkActionsButtonWidth})`
  }};
`
