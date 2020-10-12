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
import { Select } from '../Select'
import { InputText } from '../InputText'
import { Icon } from '../../../Icon'
import { IconButton, Button } from '../../../Button'
import { Chip } from '../../../Chip'
import { Text } from '../../../Text'
import { Popover } from '../../../Popover'
import { InputFiltersChip } from './InputFiltersChip'
import { InputFiltersChipEditor } from './InputFiltersChipEditor'

export interface FieldFilter {
  /* specify the field value */
  field: string
  /* text to be displayed in drop-down, optional, `field` is used if not specified */
  label?: string
  /* filter value/expression */
  value?: string

  options?: string[]
}

export interface InputFiltersProps {
  filters: FieldFilter[]
  hideFilterIcon?: boolean
  className?: string
}

const InputFiltersLayout: FC<InputFiltersProps> = ({
  className,
  filters,
  hideFilterIcon = false,
}) => {
  const assigned = filters.filter((filter) => filter.value)

  const [fieldEditing, setFieldEditing] = useState<undefined | string>(
    undefined
  )
  const [assignedFilters, setAssignedFilters] = useState(assigned)
  const [filterLookupName, setFilterLookupName] = useState('')

  const unassignedFilters = filters.filter(
    (filter) =>
      !assignedFilters.map((assigned) => assigned.field).includes(filter.field)
  )

  const options = unassignedFilters.map((filter) => {
    return {
      label: filter.label || filter.field,
      value: filter.field,
    }
  })

  const inputRef = useRef<null | HTMLInputElement>(null)
  const isClearable = assignedFilters.length > 0

  const clearFilters = () => {
    setFilterLookupName('')
    setAssignedFilters([])
  }

  const focusInput = () => inputRef.current && inputRef.current.focus()

  const handleFilterLookupChange = (field: string) => {
    const filter = filters.find((option) => option.field === field)
    if (filter) {
      setFilterLookupName('')
      setAssignedFilters([...assignedFilters, filter])
      setFieldEditing(filter.field)
    }
  }

  return (
    <div className={className} onClick={focusInput}>
      {!hideFilterIcon && (
        <Icon color="ui4" mr="xsmall" name="Filter" size={20} />
      )}
      {assignedFilters.map((filter, i) => {
        const editFilter = () => setFieldEditing(filter.field)

        const handleDelete = () =>
          setAssignedFilters(
            [...assignedFilters].filter(
              (assignedFilter) => assignedFilter.field !== filter.field
            )
          )

        const setFieldEditingValue = (value: string) => {
          const filterIndex = assignedFilters.findIndex(
            (filter) => filter.field === fieldEditing
          )

          const newAssignedFilters = [...assignedFilters]
          const updateFilter = { ...newAssignedFilters[filterIndex], value }
          newAssignedFilters[filterIndex] = updateFilter

          setAssignedFilters(newAssignedFilters)
        }

        const closeInputFiltersChipEditor = () => {
          setAssignedFilters(assignedFilters.filter((filter) => filter.value))
          setFilterLookupName('')
          setFieldEditing(undefined)
        }

        const filterToken = filter.value ? (
          <InputFiltersChip
            filter={filter}
            key={i}
            onClick={editFilter}
            onDelete={handleDelete}
          />
        ) : (
          <Text fontSize="small">{filter?.label || filter.field}</Text>
        )
        return filter.field === fieldEditing ? (
          <Popover
            key={i}
            isOpen={fieldEditing !== undefined}
            setOpen={closeInputFiltersChipEditor}
            content={
              <InputFiltersChipEditor
                defaultValue={filter.value}
                onChange={setFieldEditingValue}
                options={filter.options}
              />
            }
          >
            {filterToken}
          </Popover>
        ) : (
          filterToken
        )
      })}

      {!fieldEditing && (
        <Select
          autoResize
          indicator={false}
          isFilterable
          onChange={handleFilterLookupChange}
          options={options}
          placeholder="Filter List"
          ref={inputRef}
          value={filterLookupName}
        />
      )}
      {isClearable && (
        <IconButton
          icon="Close"
          label="Clear Filters"
          mr="xxsmall"
          onClick={clearFilters}
          size="xsmall"
          ml="auto"
        />
      )}
    </div>
  )
}

export const InputFilters = styled(InputFiltersLayout)`
  align-items: center;
  border: solid 1px ${({ theme }) => theme.colors.ui2};
  border-radius: ${({ theme: { radii } }) => radii.medium};
  display: flex;
  height: 36px;
  padding: ${({ theme: { space } }) => `${space.xxxsmall} ${space.xxsmall}`};
  width: 100%;

  ${Chip} {
    margin-right: ${({ theme: { space } }) => space.xsmall};
  }

  ${Select} {
    ${Icon} {
      display: none;
    }
  }

  ${InputText} {
    border: none;
    height: 28px;
    padding: 0;
    &:focus-within {
      box-shadow: none;
    }
    input {
      padding: 0;
    }
  }
`
