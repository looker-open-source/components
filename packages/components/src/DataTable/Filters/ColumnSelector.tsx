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

import React, { FC, useState } from 'react'

import { usePopover, PopoverContent } from '../../Popover'
import { IconButton } from '../../Button/IconButton'
import { CheckboxGroup } from '../../Form/Inputs/OptionsGroup'
import { ButtonTransparent } from '../../Button/ButtonTransparent'
import { Space, SpaceVertical } from '../../Layout'
import { DataTableColumns } from '../Column'

export interface ColumnSelectorProps {
  columns: DataTableColumns
  columnsVisible: string[]
  onColumnVisibilityChange: (value: string[]) => void
}

export const ColumnSelector: FC<ColumnSelectorProps> = ({
  columns,
  columnsVisible: defaultColumnsVisible,
  onColumnVisibilityChange,
}) => {
  const [isOpen, setOpen] = useState(false)

  const selectableColumns = columns.filter((c) => c.hide !== undefined)
  const [columnsVisible, setColumnsVisible] = useState(defaultColumnsVisible)

  const options = selectableColumns.map((column) => ({
    label: column.title,
    value: column.id,
  }))

  const apply = () => {
    onColumnVisibilityChange(columnsVisible)
    setOpen(false)
  }

  const cancel = () => setOpen(false)

  const all = () => {
    const resetColumn = columns.map((column) => column.id)
    setColumnsVisible(resetColumn)
  }

  const none = () => setColumnsVisible([])

  const content = (
    <PopoverContent width="12rem" overflow="hidden">
      <SpaceVertical>
        <Space gap="xxsmall">
          <ButtonTransparent size="xsmall" onClick={all}>
            Select All
          </ButtonTransparent>
          <ButtonTransparent size="xsmall" onClick={none}>
            Select None
          </ButtonTransparent>
        </Space>
        <CheckboxGroup
          value={columnsVisible}
          onChange={setColumnsVisible}
          options={options}
        />
        <Space reverse>
          <ButtonTransparent onClick={apply}>Apply</ButtonTransparent>
          <ButtonTransparent onClick={cancel} color="neutral">
            Cancel
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
        icon="ViewColumn"
        label="Select columns to display"
        {...domProps}
      />
    </>
  )
}
