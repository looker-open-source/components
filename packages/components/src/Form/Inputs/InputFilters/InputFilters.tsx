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
import React, { FC, useState, useRef, MouseEvent } from 'react'
import { Select } from '../Select'
import { InputText } from '../InputText'
import { Icon } from '../../../Icon'
import { IconButton } from '../../../Button'
import { Chip } from '../../../Chip'
import { Space } from '../../../Layout'

export interface AvailableFilter {
  value: string
}

export interface InputFiltersProps {
  className?: string
  availableFilters: AvailableFilter[]
  fieldFilters?: string[]
  hideFilterIcon?: boolean
}

const InputFiltersLayout: FC<InputFiltersProps> = ({
  availableFilters,
  className,
  fieldFilters,
  hideFilterIcon = false,
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
    setValues([...values, newValues])
  }

  const editFilter = (event: MouseEvent<HTMLSpanElement>) => {
    alert("You can't do that. Yet!")
    event.stopPropagation()
  }

  return (
    <div className={className} onClick={focusInput}>
      {!hideFilterIcon && (
        <Icon mx="xsmall" name="Filter" size={20} color="ui4" />
      )}
      <Space gap="xsmall">
        {values.map((value, i) => (
          <Chip key={i} onClick={editFilter}>
            {value}
          </Chip>
        ))}

        <Select
          autoResize
          indicator={false}
          isFilterable
          onChange={handleFilterLookupChange}
          options={availableFilters}
          placeholder="Filter List"
          ref={inputRef}
          value={filterLookupName}
        />
      </Space>
      {isClearable && (
        <IconButton icon="Close" label="Clear filters" onClick={clearFilters} />
      )}
    </div>
  )
}
// padding-left: ${props.theme.space.xsmall}
export const InputFilters = styled(InputFiltersLayout)`
  align-items: center;
  border: solid 1px ${({ theme }) => theme.colors.ui2};
  border-radius: ${({ theme: { radii } }) => radii.medium};
  display: flex;
  flex: 2;

  ${Space} {
    ${(props) =>
      props.hideFilterIcon && `padding-left: ${props.theme.space.xxsmall}`}
  }

  ${Icon} {
    margin: 0 ${({ theme }) => theme.space.xsmall};
  }

  ${Select} {
    width: auto;

    ${Icon} {
      display: none;
    }
  }

  ${InputText} {
    border: none;
    padding: none;
    &:focus-within {
      box-shadow: none;
    }
  }
`
