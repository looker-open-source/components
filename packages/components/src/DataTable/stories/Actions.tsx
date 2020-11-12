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
import { columns as mockColumns } from '../../__mocks__/DataTable/columns'
import {
  items,
  itemsActions,
  itemsNoActions,
  itemsPrimaryAction,
} from './items'

const Template: Story<DataTableProps> = ({ ...args }) => {
  return <DataTable {...args} />
}

export const Actions = Template.bind({})
Actions.args = {
  children: itemsActions,
  columns: mockColumns,
}

export const NoActions = Template.bind({})
NoActions.args = {
  children: itemsNoActions,
  columns: mockColumns,
}

export const PrimaryAction = Template.bind({})
PrimaryAction.args = {
  children: itemsPrimaryAction,
  columns: mockColumns,
}

export const ActionsAndPrimaryAction = Template.bind({})
ActionsAndPrimaryAction.args = {
  children: items,
  columns: mockColumns,
}

const noHiddenColumns = mockColumns.map((c) => {
  return { ...c, hide: undefined }
})

export const ActionsAndPrimaryActionColumnStuck = Template.bind({})
ActionsAndPrimaryActionColumnStuck.args = {
  children: items,
  columns: noHiddenColumns,
  headerRowId: 'headerId',
}

export const ActionsColumnStuck = Template.bind({})
ActionsColumnStuck.args = {
  children: itemsActions,
  columns: noHiddenColumns,
  headerRowId: 'headerId',
}

export const PrimaryActionColumnStuck = Template.bind({})
PrimaryActionColumnStuck.args = {
  children: itemsPrimaryAction,
  columns: noHiddenColumns,
  headerRowId: 'headerId',
}
