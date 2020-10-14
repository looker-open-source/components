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

import omit from 'lodash/omit'
import styled from 'styled-components'
import React, { FC, useMemo, useState, useRef } from 'react'
import { Select, SelectOptionObject } from '../Select'
import { InputText } from '../InputText'
import { Icon } from '../../../Icon'
import { IconButton } from '../../../Button'
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
  onChange: (filters: FieldFilter[]) => void
  hideFilterIcon?: boolean
  className?: string
}

const InputFiltersLayout: FC<InputFiltersProps> = ({
  className,
  filters,
  onChange,
  hideFilterIcon = false,
}) => {
  const [fieldEditing, setFieldEditing] = useState<undefined | string>(
    undefined
  )
  const [filterLookupName, setFilterLookupName] = useState('')

  const assignedFilters = filters.filter(
    (filter) => filter.value || filter.field === fieldEditing
  )
  const unassignedFilters = filters.filter(
    (filter) =>
      !assignedFilters.map((assigned) => assigned.field).includes(filter.field)
  )

  const [filterTerm, setFilterTerm] = useState('')

  const options = useMemo(
    () =>
      unassignedFilters.reduce((acc: SelectOptionObject[], filter) => {
        const option = {
          label: filter.label || filter.field,
          value: filter.field,
        }
        const optionMatchesFilter = Object.values(option).some(
          (value: string) =>
            value.toLocaleLowerCase().indexOf(filterTerm.toLocaleLowerCase()) >
            -1
        )
        if (optionMatchesFilter) {
          acc = [...acc, option]
        }
        return acc
      }, []),
    [filterTerm, unassignedFilters]
  )

  const inputRef = useRef<null | HTMLInputElement>(null)
  const isClearable = assignedFilters.length > 0

  const clearFilters = () => {
    setFilterLookupName('')
    onChange(filters.map((filter) => omit(filter, 'value')))
  }

  const focusInput = () => inputRef.current && inputRef.current.focus()

  const handleFilterLookupChange = (field: string) => {
    const filter = filters.find((option) => option.field === field)
    if (filter) {
      setFilterLookupName('')
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
          onChange(
            filters.map((currentFilter) =>
              currentFilter.field !== filter.field
                ? currentFilter
                : omit(currentFilter, 'value')
            )
          )

        const setFieldEditingValue = (value: string) => {
          const filterIndex = filters.findIndex(
            (filter) => filter.field === fieldEditing
          )

          const newFilters = [...filters]
          const updateFilter = { ...newFilters[filterIndex], value }
          newFilters[filterIndex] = updateFilter

          onChange(newFilters)
        }

        const closeInputFiltersChipEditor = () => {
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
          onFilter={setFilterTerm}
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
