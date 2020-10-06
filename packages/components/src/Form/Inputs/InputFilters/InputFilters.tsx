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
import partition from 'lodash/partition'
import { Select } from '../Select'
import { InputText } from '../InputText'
import { Icon } from '../../../Icon'
import { IconButton, Button } from '../../../Button'
import { Chip } from '../../../Chip'
import { Text } from '../../../Text'
import { Popover } from '../../../Popover'
import { InputFilterChip } from './InputFilterChip'

export interface FieldFilter {
  /* specify the field value */
  field: string
  /* text to be displayed in drop-down, optional, `field` is used if not specified */
  label?: string
  /* filter value/expression */
  value?: string
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

  const [draftFilter, setDraftFilter] = useState<undefined | FieldFilter>()
  // const [unassignedFilters, setUnassignedFilters] = useState(options)
  const [chipValues, setChipValues] = useState(assigned)
  const [filterLookupName, setFilterLookupName] = useState('')

  const unassignedFilters = filters.filter(
    (filter) =>
      !chipValues.map((assigned) => assigned.field).includes(filter.field)
  )

  const options = unassignedFilters.map((filter) => {
    return {
      label: filter.label || filter.field,
      value: filter.field,
    }
  })

  const inputRef = useRef<null | HTMLInputElement>(null)
  const isClearable = chipValues.length > 0

  const clearFilters = () => {
    setFilterLookupName('')
    setChipValues([])
  }

  const focusInput = () => inputRef.current && inputRef.current.focus()

  const handleFilterLookupChange = (field: string) => {
    const filter = filters.find((option) => option.field === field)

    if (filter) {
      setFilterLookupName('')
      // setUnassignedFilters(
      //   unassignedFilters.filter((option) => option === filter)
      // )
      setDraftFilter({ field: filter.field, label: filter?.label })
    }
  }

  const editFilter = () => {
    alert("You can't do that. Yet!")
  }

  const handleDelete = (field: FieldFilter) => {
    // const addOption = options.filter(
    //   (value) =>
    //     (field && field.field === value.label) ||
    //     (field && field.field === value.value)
    // )
    // setUnassignedFilters([addOption[0], ...unassignedFilters])
    setChipValues([...chipValues].filter((value) => value !== field))
  }

  const handleDraft = (draft: FieldFilter, option: string) => {
    draft.value = option
    setChipValues([...chipValues, draft])
    // setUnassignedFilters(options)
  }

  const togglePopover = () => {
    setDraftFilter(undefined)
    // setUnassignedFilters(options)
  }

  const draftOptions = ['suggestion 1', 'suggestion 2', 'suggestion 3']

  return (
    <div className={className} onClick={focusInput}>
      {!hideFilterIcon && (
        <Icon color="ui4" mr="xsmall" name="Filter" size={20} />
      )}
      {chipValues &&
        chipValues.map((filter, i) => (
          <InputFilterChip
            filter={filter}
            key={i}
            onClick={editFilter}
            onDelete={handleDelete}
          />
        ))}
      <Popover
        isOpen={draftFilter !== undefined}
        setOpen={togglePopover}
        content={
          <DraftFilter
            draft={draftFilter}
            options={draftOptions}
            onClick={handleDraft}
          />
        }
      >
        <Text fontSize="small">{draftFilter?.label || draftFilter?.field}</Text>
      </Popover>

      {!draftFilter && (
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
