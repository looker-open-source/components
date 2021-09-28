/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import type { Story } from '@storybook/react/types-6-0'
import { PersonOutline } from 'styled-icons/material'
import React from 'react'
import { AvatarIcon } from '../../Avatar'
import type { DataTableProps } from '..'
import { DataTable, DataTableCell, DataTableItem } from '..'

const data = [
  {
    description: 'User',
    id: '1',
    indicator: <AvatarIcon color="key" icon={<PersonOutline />} />,
    name: 'Gorgonzola',
  },
  {
    description: 'User',
    id: '2',
    indicator: <AvatarIcon color="key" icon={<PersonOutline />} />,
    name: 'Cheddar',
  },
  {
    description: 'User',
    id: '3',
    indicator: <AvatarIcon color="key" icon={<PersonOutline />} />,
    name: `Blue`,
  },
]

const columns = [
  {
    id: 'id',
    title: 'ID',
  },
  {
    id: 'name',
    title: 'Name',
  },
]

const items = data.map(({ description, id, indicator, name }) => (
  <DataTableItem key={id} id={id}>
    <DataTableCell>{id}</DataTableCell>
    <DataTableCell indicator={indicator} description={description}>
      {name}
    </DataTableCell>
  </DataTableItem>
))

const Template: Story<DataTableProps> = ({ ...args }) => {
  return <DataTable {...args} />
}

export const Indicator = Template.bind({})
Indicator.args = {
  children: items,
  columns: columns,
}
