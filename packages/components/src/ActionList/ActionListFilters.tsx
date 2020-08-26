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
import React, { FC, useMemo, useState, useRef, Ref } from 'react'
import { Select } from '../Form/Inputs/Select'
import { InputText } from '../Form/Inputs'
import { Icon } from '..//Icon'

interface FilterByProps {
  value: string
}

interface ActionListFilterProps {
  className: string
  filterableItems: FilterByProps[]
}

const ActionListFilterLayout: FC<ActionListFilterProps> = ({
  className,
  filterableItems,
}) => {
  const [values, setValues] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const inputRef = useRef<null | HTMLInputElement>(null)

  function focusInput() {
    inputRef.current && inputRef.current.focus()
  }
  function handleChange(newValues: any) {
    setValues(newValues)
  }
  function handleFilter(term: string) {
    setSearchTerm(term)
  }

  const newOptions = useMemo(() => {
    if (searchTerm === '') return filterableItems
    return filterableItems.filter((option) => {
      return option.value.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }, [searchTerm, filterableItems])

  return (
    <div className={className}>
      <InnerLayout onClick={focusInput}>
        <IconFilter name="Filter" size={20} />
        <Select
          options={newOptions}
          placeholder="Filter List"
          isFilterable
          value={values}
          ref={inputRef}
          onChange={handleChange}
          onFilter={handleFilter}
        />
      </InnerLayout>
      <IconColumn name="ViewColumn" size="xsmall" />
    </div>
  )
}

const IconFilter = styled(Icon)`
  align-self: center;
  color: ${({ theme }) => theme.colors.ui4};
`

const IconColumn = styled(Icon)`
  align-self: center;
  color: ${({ theme }) => theme.colors.ui4};
`

const InnerLayout = styled.div``

export const ActionListFilters = styled(ActionListFilterLayout)`
  display: flex;
  border-top: solid 1px ${({ theme }) => theme.colors.ui2};
  border-bottom: solid 1px ${({ theme }) => theme.colors.ui2};

  ${InnerLayout} {
    display: flex;
    flex: 1;
  }

  ${Select} {
    border: none;
    &:focus-within {
      box-shadow: none;
    }
  }
`
