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
import React, { FC, useState } from 'react'
import { IconButton } from '../Button/IconButton'
import { DividerVertical } from '../Divider/DividerVertical'
import { InputChips } from '../Form/Inputs/InputChips'
import { Menu, MenuDisclosure, MenuList, MenuItem } from '../Menu'

interface FilterByProps {
  name: string
  suggestions?: string[]
}

interface ActionListFilterProps {
  filterableColumns: FilterByProps[]
}

const ActionListFilterLayout: FC<ActionListFilterProps> = () => {
  const [values, setValues] = useState([])
  const handleChange = (newValues: any) => {
    setValues(newValues)
  }

  // const itemList = (
  //   filterableColumns.map((item: string, index: number) => (
  //     <MenuItem key={index}>{item}</MenuItem>
  //   ))
  // )

  // {filterableColumns[0]} doesn't work

  const MenuFilterOptions = (
    <Menu>
      <MenuDisclosure>
        <IconFilter icon="Filter" label="Filter" />
      </MenuDisclosure>
      <MenuList>
        <MenuItem>Filter by</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Status</MenuItem>
        <MenuItem>Source</MenuItem>
        <MenuItem>Trigger</MenuItem>
      </MenuList>
    </Menu>
  )

  return (
    <OuterScope>
      {MenuFilterOptions}
      <InternalInput
        onChange={handleChange}
        placeholder="Filter List"
        values={values}
      />
      <DividerVertical />
      <IconViewColumn icon="ViewColumn" label="ViewColumn" />
    </OuterScope>
  )
}

const IconFilter = styled(IconButton)`
  color: ${({ theme }) => theme.colors.ui4};
  padding-right: ${({ theme }) => theme.space.xsmall};
  size: ${({ theme }) => theme.space.large};
`

const IconViewColumn = styled(IconButton)`
  color: ${({ theme }) => theme.colors.ui4};
  size: ${({ theme }) => theme.space.xsmall};
`

const InternalInput = styled(InputChips)`
  border: none;
  color: ${({ theme }) => theme.colors.text1};
  justify-self: stretch;
  padding: 0;
  &:focus-within {
    box-shadow: none;
  }
`

const OuterScope = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
  border-left: none;
  border-right: none;
  border-top: 1px solid ${({ theme }) => theme.colors.ui2};
  display: flex;
  justify-content: 'space-between';
  padding: ${({ theme }) => theme.space.xsmall};
`

export const ActionListFilter = styled(ActionListFilterLayout)``
