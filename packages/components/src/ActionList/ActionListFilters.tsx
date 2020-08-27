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
import React, { FC, useState, useRef, Ref, MouseEvent } from 'react'
import { Select } from '../Form/Inputs/Select'
import { InputText } from '../Form/Inputs'
import { Icon } from '../Icon'
import { IconButton } from '../Button'
import { Chip } from '../Chip'
import { Space } from '../Layout'
import { DividerVertical } from '../Divider'

interface AvailableFilter {
  value: string
}

interface ActionListFilterProps {
  className?: string
  availableFilters: AvailableFilter[]
  fieldFilters?: string[]
}

const ActionListFilterLayout: FC<ActionListFilterProps> = ({
  availableFilters,
  className,
  fieldFilters,
}) => {
  const [values, setValues] = useState(fieldFilters || [])
  const [filterLookupName, setFilterLookupName] = useState('')

  const inputRef = useRef<null | HTMLInputElement>(null)
  const isClearable = values.length > 0

  const clearFilters = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation()
    setValues([])
  }

  function focusInput() {
    inputRef.current && inputRef.current.focus()
  }

  function handleFilterLookupChange(newValues: any) {
    setFilterLookupName(newValues)
  }

  const editFilter = (event: MouseEvent<HTMLSpanElement>) => {
    alert("You can't do that. Yet!")
    event.stopPropagation()
  }

  return (
    <div className={className}>
      <InnerLayout onClick={focusInput}>
        <Icon mx="xsmall" name="Filter" size={20} color="ui4" />
        <Space gap="xsmall">
          {values.map((value, i) => (
            <Chip key={i} onClick={editFilter}>
              {value}
            </Chip>
          ))}

          <Select
            options={availableFilters}
            placeholder="Filter List"
            indicator={false}
            isFilterable
            value={filterLookupName}
            ref={inputRef}
            autoResize
            onChange={handleFilterLookupChange}
          />
        </Space>
        {isClearable && (
          <IconButton
            icon="Close"
            label="Clear filters"
            onClick={clearFilters}
          />
        )}
      </InnerLayout>
      <ColumnSelector>
        <DividerVertical stretch />
        <IconButton label="Select columns to display" icon="ViewColumn" />
      </ColumnSelector>
    </div>
  )
}

const InnerLayout = styled.div``
const ColumnSelector = styled.div`
  align-items: center;
  display: flex;
`

export const ActionListFilters = styled(ActionListFilterLayout)`
  border-bottom: solid 1px ${({ theme }) => theme.colors.ui2};
  border-top: solid 1px ${({ theme }) => theme.colors.ui2};
  display: flex;
  padding: ${({ theme }) => theme.space.xxsmall};

  ${InnerLayout} {
    align-items: center;
    display: flex;
    flex: 2;

    ${Icon} {
      margin: 0 ${({ theme }) => theme.space.xsmall};
    }

    ${Select} {
      width: auto;

      ${Icon} {
        display: none;
      }
    }
  }

  ${InputText} {
    border: none;
    &:focus-within {
      box-shadow: none;
    }
  }
`
