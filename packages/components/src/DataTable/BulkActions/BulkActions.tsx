/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { ReactNode } from 'react'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown'
import { Button, ButtonTransparent } from '../../Button'
import { Space } from '../../Layout'
import { Menu } from '../../Menu'
import { Span } from '../../Text'
import { useTranslation } from '../../utils'
import { DataTableContext } from '../DataTableContext'

interface BulkActionsProps {
  className?: string
  actions: ReactNode
  onTotalClearAll: () => void
  onTotalSelectAll: () => void
  pageCount: number
  totalCount: number
}

const BulkActionsLayout = ({
  actions,
  className,
  onTotalClearAll,
  onTotalSelectAll,
  pageCount,
  totalCount,
}: BulkActionsProps) => {
  const { t } = useTranslation('BulkActions')
  const { select } = useContext(DataTableContext)
  const selectedItemCount = select ? select.selectedItems.length : 0

  let message
  if (selectedItemCount < pageCount) {
    message = t('SelectedCountOfTotalDisplayed', {
      pageCount: Number(pageCount),
      selectedItemCount: Number(selectedItemCount),
    })
  } else if (selectedItemCount === pageCount) {
    message = t('AllPageCountDisplayedSelected', {
      pageCount: Number(pageCount),
    })
  } else if (totalCount && selectedItemCount === totalCount) {
    message = t('AllTotalCountSelected', {
      totalCount: Number(totalCount),
    })
  }

  const selectedItemsText = (
    <Span color="text2" fontSize="xsmall">
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
          ? t('Clear Selection')
          : t('SelectAllCountResults', { totalCount: Number(totalCount) })}
      </Span>
    </ButtonTransparent>
  )

  return (
    <div className={className}>
      <Menu content={actions}>
        <Button iconAfter={<ArrowDropDown />} size="xsmall">
          {t('Bulk Actions')}
        </Button>
      </Menu>
      <Space gap="u3" justify="center">
        {selectedItemsText}
        {selectTotalResultsButton}
      </Space>
    </div>
  )
}

export const BulkActions = styled(BulkActionsLayout)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ui1};
  border-bottom: solid 1px ${({ theme }) => theme.colors.ui2};
  display: flex;
  height: 3.25rem;
  justify-content: center;
  position: relative;

  ${Button} {
    left: ${({ theme }) => theme.space.u3};
    position: absolute;
  }
`
