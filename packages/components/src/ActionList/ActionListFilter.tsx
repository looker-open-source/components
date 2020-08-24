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
import React, { FC, useState, useRef } from 'react'
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

/*
  how to access filterableColumns props? - seems to be passed as an object
  how to open options when InputChips is active?
  MenuItem Filter by should be a label of a different color
  how to handle filter of MenuItem and chips at the same time?
  focus on showing menu and input at the same time
*/

const ActionListFilterLayout: FC<ActionListFilterProps> = ({
  filterableColumns,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [values, setValues] = useState([])

  const handleChange = (newValues: any) => {
    setValues(newValues)
  }

  const focusInput = () => {
    inputRef.current && inputRef.current.focus()
  }

  //   filterableColumns.filter((filter) =>
  //     filter.toLowerCase().includes(keywordSearch.toLowerCase())
  //   )

  const options = (
    <MenuList>
      <MenuItem>Filter by</MenuItem>
      {filterableColumns.map((item, index) => (
        <MenuItem key={index}>{item}</MenuItem>
      ))}
    </MenuList>
  )

  const menuFilterOptions = (
    <IconFilter icon="Filter" label="Filter" onClick={focusInput} />
  )

  const InputFilter = (
    <Menu>
      <MenuDisclosure>
        <InternalInput
          placeholder="Filter List"
          values={values}
          onChange={handleChange}
          ref={inputRef}
        />
      </MenuDisclosure>
      {options}
    </Menu>
  )

  return (
    <OuterScope>
      {menuFilterOptions}
      {InputFilter}
      <DividerVertical mx="xxsmall" />
      <IconViewColumn icon="ViewColumn" label="ViewColumn" />
    </OuterScope>
  )
}

const IconFilter = styled(IconButton)`
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.ui4};
  cursor: text;
  padding-right: ${({ theme }) => theme.space.xsmall};
  size: ${({ theme }) => theme.space.large};
`

const IconViewColumn = styled(IconButton)`
  align-items: flex-end;
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
  input {
    padding: 0;
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
