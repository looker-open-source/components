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
import { Button, ButtonTransparent } from '../../Button'
import { Space } from '../../Layout'
import { Menu, MenuDisclosure, MenuList } from '../../Menu'
import { Span } from '../../Text'
import { DataTableContext } from '../DataTableContext'

interface BulkActionsProps {
  className?: string
  actions: ReactNode
  onTotalClearAll: () => void
  onTotalSelectAll: () => void
  pageCount: number
  totalCount: number
}

const BulkActionsLayout: FC<BulkActionsProps> = ({
  actions,
  className,
  onTotalClearAll,
  onTotalSelectAll,
  pageCount,
  totalCount,
}) => {
  const { select } = useContext(DataTableContext)
  const selectedItemCount = select ? select.selectedItems.length : 0

  let message
  if (selectedItemCount < pageCount) {
    message = `${selectedItemCount} of ${pageCount} displayed items selected`
  } else if (selectedItemCount === pageCount) {
    message = `All ${pageCount} displayed items selected`
  } else if (totalCount && selectedItemCount === totalCount) {
    message = `All ${totalCount} items selected`
  }

  const selectedItemsText = (
    <Span variant="secondary" fontSize="xsmall">
      {message}
    </Span>
  )

  const selectTotalResultsButton = (
    <ButtonTransparent
      onClick={
        selectedItemCount === totalCount ? onTotalClearAll : onTotalSelectAll
      }
    >
      <Span fontWeight="semiBold" fontSize="xsmall">
        {selectedItemCount === totalCount
          ? 'Clear Selection'
          : `Select all ${totalCount} results`}
      </Span>
    </ButtonTransparent>
  )

  return (
    <div className={className}>
      <Menu>
        <MenuDisclosure>
          <Button iconAfter="ArrowDown" size="xsmall">
            Bulk Actions
          </Button>
        </MenuDisclosure>
        <MenuList>{actions}</MenuList>
      </Menu>
      <Space gap="small" justifyContent="center">
        {selectedItemsText}
        {selectTotalResultsButton}
      </Space>
    </div>
  )
}

export const BulkActions = styled(BulkActionsLayout)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ui1};
  border-bottom: solid 1px ${(props) => props.theme.colors.ui2};
  display: flex;
  height: 3.25rem;
  justify-content: center;
  position: relative;

  ${Button} {
    left: ${({ theme }) => theme.space.small};
    position: absolute;
  }
`
