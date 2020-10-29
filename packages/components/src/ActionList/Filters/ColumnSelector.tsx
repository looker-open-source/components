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

import React, { FC, useState, useContext } from 'react'
import { Popover, PopoverContent } from '../../Popover'
import { IconButton } from '../../Button/IconButton'
import { CheckboxGroup } from '../../Form/Inputs/OptionsGroup'
import { ButtonTransparent } from '../../Button/ButtonTransparent'
import { DialogContext, DialogFooter, DialogHeader } from '../../Dialog'
import { ColumnsProps } from '../Column'

export interface ColumnSelectorProps {
  columns: ColumnsProps
  visibleColumns: string[]
  onColumnVisibilityChange: (value: string[]) => void
}

export const ColumnSelector: FC<ColumnSelectorProps> = ({
  columns: allColumns,
  visibleColumns: defaultColumns,
  onColumnVisibilityChange,
}) => {
  const { closeModal } = useContext(DialogContext)
  const [visibleColumns, setVisibleColumns] = useState(defaultColumns)
  const columns = allColumns.filter((c) => c.canHide !== false)

  const options = columns.map((column) => ({
    label: column.title,
    value: column.id,
  }))

  const apply = () => {
    onColumnVisibilityChange(visibleColumns)
    closeModal()
  }

  const cancel = () => closeModal()

  const all = () => {
    const resetColumn = columns.map((column) => column.id)
    setVisibleColumns(resetColumn)
  }

  const none = () => setVisibleColumns([])

  return (
    <Popover
      content={
        <>
          <DialogHeader>
            <ButtonTransparent onClick={all}>Select All</ButtonTransparent>
            <ButtonTransparent onClick={none}>Select None</ButtonTransparent>
          </DialogHeader>
          <PopoverContent max-width="12rem">
            <CheckboxGroup
              value={visibleColumns}
              onChange={setVisibleColumns}
              options={options}
            />
          </PopoverContent>
          <DialogFooter>
            <ButtonTransparent onClick={apply}>Apply</ButtonTransparent>
            <ButtonTransparent onClick={cancel}>Cancel</ButtonTransparent>
          </DialogFooter>
        </>
      }
    >
      <IconButton
        icon="ViewColumn"
        label="Select columns to display"
        mt="xxsmall"
      />
    </Popover>
  )
}
