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
import React, { FC, ReactNode } from 'react'
import { Popover, PopoverContent } from '../../Popover'
import { DividerVertical } from '../../Divider/DividerVertical'
import { IconButton } from '../../Button/IconButton'
import { CheckboxGroup } from '../../Form/Inputs/OptionsGroup'

export interface ColumnSelectorProps {
  data?: ReactNode
}

const ColumnSelectorLayout: FC<ColumnSelectorProps> = () => {
  const mockChildren = [
    {
      label: 'Name',
      value: 'name',
    },
    {
      label: 'Inventory',
      value: 'inventory',
    },
    {
      label: 'Status',
      value: 'status',
    },
    {
      label: 'Color',
      value: 'color',
    },
    {
      label: 'Description',
      value: 'description',
    },
    {
      label: 'Origin',
      value: 'origin',
    },
    {
      label: 'Fat Content',
      value: 'fat-content',
    },
    {
      label: 'Calcium',
      value: 'calcium',
    },
  ]
  return (
    <>
      <DividerVertical height="1.2rem" />
      <Popover
        content={
          <PopoverContent>
            <CheckboxGroup
              // defaultValue={['cheddar']}
              options={mockChildren}
            />
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
