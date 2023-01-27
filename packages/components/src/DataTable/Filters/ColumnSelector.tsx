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

import React, { useState } from 'react'
import { ViewColumn } from '@styled-icons/material/ViewColumn'
import { useTranslation } from '../../utils'
import { usePopover, PopoverContent } from '../../Popover'
import { IconButton } from '../../Button/IconButton'
import { CheckboxGroup } from '../../Form/Inputs'
import { ButtonTransparent } from '../../Button/ButtonTransparent'
import { Space, SpaceVertical } from '../../Layout'
import type { DataTableColumns } from '../Column'

export interface ColumnSelectorProps {
  columns: DataTableColumns
  columnsVisible: string[]
  onColumnVisibilityChange: (value: string[]) => void
}

export const ColumnSelector = ({
  columns,
  columnsVisible: defaultColumnsVisible,
  onColumnVisibilityChange,
}: ColumnSelectorProps) => {
  const { t } = useTranslation('ColumnSelector')
  const [isOpen, setOpen] = useState(false)

  const selectableColumns = columns.filter(c => c.hide !== undefined)
  const [columnsVisible, setColumnsVisible] = useState(defaultColumnsVisible)

  const options = selectableColumns.map(column => ({
    label: column.title,
    value: column.id,
  }))

  const apply = () => {
    onColumnVisibilityChange(columnsVisible)
    setOpen(false)
  }

  const cancel = () => setOpen(false)

  const all = () => {
    const resetColumn = columns.map(column => column.id)
    setColumnsVisible(resetColumn)
  }

  const none = () => setColumnsVisible([])

  const content = (
    <PopoverContent width="12rem" overflow="hidden">
      <SpaceVertical>
        <Space gap="u1">
          <ButtonTransparent size="xsmall" onClick={all}>
            {t('Select All')}
          </ButtonTransparent>
          <ButtonTransparent size="xsmall" onClick={none}>
            {t('Select None')}
          </ButtonTransparent>
        </Space>
        <CheckboxGroup
          value={columnsVisible}
          onChange={setColumnsVisible}
          options={options}
        />
        <Space reverse>
          <ButtonTransparent onClick={apply}>{t('Apply')}</ButtonTransparent>
          <ButtonTransparent onClick={cancel} color="neutral">
            {t('Cancel')}
          </ButtonTransparent>
        </Space>
      </SpaceVertical>
    </PopoverContent>
  )

  const { popover, domProps } = usePopover({ content, isOpen, setOpen })

  return (
    <>
      {popover}
      <IconButton
        icon={<ViewColumn />}
        label={t('Select columns to display')}
        {...domProps}
      />
    </>
  )
}
