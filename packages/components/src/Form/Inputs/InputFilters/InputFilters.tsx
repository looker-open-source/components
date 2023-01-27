/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import React, { useMemo, useState, useRef } from 'react'
import { Close } from '@styled-icons/material/Close'
import { FilterList } from '@styled-icons/material/FilterList'
import type { SelectOptionObject } from '../Select'
import { Select } from '../Select'
import { InputText, inputTextFocus, inputCSS } from '../InputText'
import { Icon } from '../../../Icon'
import { IconButton } from '../../../Button'
import { Chip } from '../../../Chip'
import { Text } from '../../../Text'
import { Popover, PopoverContent } from '../../../Popover'
import { useTranslation } from '../../../utils'
import { InputFiltersChip } from './InputFiltersChip'
import { inputFilterEditor } from './inputFilterEditor'
import type { InputFiltersProps } from './types'

const InputFiltersLayout = ({
  className,
  filters,
  hideFilterIcon = false,
  onChange,
  ...props
}: InputFiltersProps) => {
  const { t } = useTranslation('InputFilters')
  const placeholder = props.placeholder || t('Filter List')
  const [fieldEditing, setFieldEditing] = useState<undefined | string>(
    undefined
  )

  const assignedFilters = filters
    .filter(filter => filter.value || filter.field === fieldEditing)
    .sort((a, b) => {
      if (a.value === undefined) {
        return 1
      } else if (b.value === undefined) {
        return -1
      } else {
        return 0
      }
    })

  const unassignedFilters = filters.filter(
    filter =>
      !assignedFilters.map(assigned => assigned.field).includes(filter.field)
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
    onChange(filters.map(({ value, ...rest }) => rest))
  }

  const focusInput = () => inputRef.current && inputRef.current.focus()

  const handleFilterLookupChange = (field: string) => {
    const filter = filters.find(option => option.field === field)
    if (filter) {
      setFieldEditing(filter.field)
    }
  }

  return (
    <div className={className} onClick={focusInput}>
      {!hideFilterIcon && (
        <Icon
          color="ui4"
          mr="xsmall"
          mt="xxsmall"
          icon={<FilterList />}
          size={20}
        />
      )}
      <ChipWrapper>
        {assignedFilters.map((filter, i) => {
          const { editor, field, value } = filter

          const editFilter = () => setFieldEditing(field)

          const handleDelete = () =>
            onChange(
              filters.map(currentFilter => {
                if (currentFilter.field !== field) {
                  return currentFilter
                }
                const { value: _value, ...rest } = currentFilter
                return rest
              })
            )

          const setFieldEditingValue = (value?: string) => {
            const filterIndex = assignedFilters.findIndex(
              f => f.field === fieldEditing
            )

            const newFilters = [...assignedFilters, ...unassignedFilters]
            const updateFilter = { ...newFilters[filterIndex], value }
            newFilters[filterIndex] = updateFilter

            onChange(newFilters)
          }

          const closeEditor = () => setFieldEditing(undefined)

          const filterToken = value ? (
            <InputFiltersChip
              filter={filter}
              key={i}
              onClick={editFilter}
              onDelete={handleDelete}
            />
          ) : (
            <Text fontSize="small" lineHeight="xlarge">
              {filter?.label || filter.field}:
            </Text>
          )
          return filter.field === fieldEditing ? (
            <Popover
              content={
                <PopoverContent>
                  {editor
                    ? editor({
                        closeEditor,
                        filterOptions: filter,
                        onChange: setFieldEditingValue,
                        value,
                      })
                    : inputFilterEditor({
                        closeEditor,
                        filterOptions: filter,
                        onChange: setFieldEditingValue,
                        value,
                      })}
                </PopoverContent>
              }
              isOpen={fieldEditing !== undefined}
              key={i}
              placement="bottom-start"
              setOpen={closeEditor}
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
            openOnFocus
            indicator={false}
            onFilter={setFilterTerm}
            isFilterable
            onChange={handleFilterLookupChange}
            options={options}
            placeholder={placeholder}
            ref={inputRef}
          />
        )}
      </ChipWrapper>
      {isClearable && (
        <IconButton
          icon={<Close />}
          label={t('Clear Filters')}
          ml="auto"
          mt="xxsmall"
          mr="xsmall"
          onClick={clearFilters}
          size="xsmall"
        />
      )}
    </div>
  )
}

const ChipWrapper = styled.div`
  display: inline-flex;
  flex: 1;
  flex-wrap: wrap;

  @supports (gap: 4px) {
    gap: ${({ theme }) => theme.space.u1};
    ${Chip} {
      margin: 0;
    }
  }
`

export const InputFilters = styled(InputFiltersLayout)`
  ${inputCSS}
  align-items: start;
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme: { space } }) => space.u05} 0;
  padding-left: ${({ theme: { space } }) => space.u2};
  width: 100%;
  &:focus-within {
    ${inputTextFocus}
  }

  ${Select} {
    margin-left: ${({ theme: { space } }) => space.u1};
  }

  ${Select} ${Icon} {
    display: none;
  }

  ${InputText} {
    border: none;
    height: 30px;
    padding: 0;

    &:focus-within {
      box-shadow: none;
    }

    input {
      padding: 0;
    }
  }
`
