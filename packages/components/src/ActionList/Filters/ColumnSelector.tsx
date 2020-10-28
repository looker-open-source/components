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

import styled from 'styled-components'
import React, { FC, ReactNode, useState } from 'react'
import { Popover, PopoverContent } from '../../Popover'
import { IconButton } from '../../Button/IconButton'
import { CheckboxGroup } from '../../Form/Inputs/OptionsGroup'
import { Divider } from '../../Divider'
import { ButtonTransparent } from '../../Button/ButtonTransparent'
import { Flex } from '../../Layout/Flex'
export interface ColumnSelectorProps {
  columns: ReactNode[]
  onChange: (value: string[]) => void
  columnsList: string[]
}

const ColumnSelectorLayout: FC<ColumnSelectorProps> = ({
  columns,
  onChange,
  columnsList,
}) => {
  const [columnDisplay, setColumnDisplay] = useState(columnsList)

  const columnsLabel =
    columns &&
    columns.map((column: any) => ({
      label: column.title,
      value: column.id,
    }))

  const setVisibleColumns = (value: string[]) => {
    setColumnDisplay(value)
  }

  const handleApply = () => {
    onChange(columnDisplay)
  }
  const handleCancel = () => {
    const resetColumn = columns.map((column) => column && column.id)

    setColumnDisplay(resetColumn)
    onChange(resetColumn)
  }

  return (
    <>
      <Popover
        content={
          <PopoverContent>
            <CheckboxGroup
              value={columnDisplay}
              onChange={setVisibleColumns}
              options={columnsLabel}
            />
            <Divider />
            <Flex justifyContent="flex-end">
              <ButtonTransparent onClick={handleApply}>Apply</ButtonTransparent>
              <ButtonTransparent onClick={handleCancel}>
                Cancel
              </ButtonTransparent>
            </Flex>
          </PopoverContent>
        }
      >
        <IconButton
          icon="ViewColumn"
          label="Select columns to display"
          mt="xxsmall"
          mr="xxsmall"
        />
      </Popover>
    </>
  )
}

export const ColumnSelector = styled(ColumnSelectorLayout)`
  align-items: center;
`
