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

import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { DataTable, DataTableProps } from '../DataTable'
import { useSelectManager } from '../utils/useSelectManager'
import { columns as mockColumns } from '../../__mocks__/DataTable/columns'
import { data } from '../../__mocks__/DataTable/data'
import { items, itemsNoActions } from './items'

interface DemoProps extends Omit<DataTableProps, 'bulk' | 'select'> {
  select: boolean
}

const Template: Story<DemoProps> = ({ select: selectActive, ...args }) => {
  const allPageItems = data.map(({ id }) => id)

  const { onSelect, onSelectAll, selections } = useSelectManager(allPageItems)

  const select = selectActive
    ? {
        onClickRowSelect: true,
        onSelect,
        onSelectAll,
        pageItems: allPageItems,
        selectedItems: selections,
      }
    : undefined

  return (
    <DataTable caption="this is a table's caption" select={select} {...args} />
  )
}

const hideAllColumns = mockColumns.map((c) => {
  return { ...c, hide: true }
})
hideAllColumns[0].hide = false
export const ResponsiveMinimal = Template.bind({})
ResponsiveMinimal.args = {
  children: items,
  columns: hideAllColumns,
}

export const ResponsiveOverflow = Template.bind({})
ResponsiveOverflow.args = {
  children: items,
  columns: mockColumns,
}

export const ResponsiveOverflowFirstColumnStuck = Template.bind({})
ResponsiveOverflowFirstColumnStuck.args = {
  ...ResponsiveOverflow.args,
  firstColumnStuck: true,
}

export const ResponsiveOverflowSelectFirstColumnNotStuck = Template.bind({})
ResponsiveOverflowSelectFirstColumnNotStuck.args = {
  ...ResponsiveOverflow.args,
  firstColumnStuck: false,
  select: true,
}

export const ResponsiveOverflowSelectNoActions = Template.bind({})
ResponsiveOverflowSelectNoActions.args = {
  ...ResponsiveOverflow.args,
  children: itemsNoActions,
  select: true,
}
