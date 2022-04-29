/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import type { FC } from 'react'
import React, { useState } from 'react'
import { useFieldGroups } from '@looker/components-data'
import { Space, IconButton, ButtonOutline } from '@looker/components'
import { Close } from '@styled-icons/material/Close'
import { Add } from '@styled-icons/material/Add'
import type { IQuery } from '@looker/sdk'
import { FilterEntry } from '../FilterEntry'

type ActiveFiltersProps = {
  filters: IQuery['filters']
  queryId: number
  onRemoveFilter: (name: string) => void
  onUpdateFilter: (name: string, expression: string) => void
}

export const ActiveFilters: FC<ActiveFiltersProps> = ({
  filters,
  queryId,
  onRemoveFilter,
  onUpdateFilter,
}) => {
  const { fieldGroups } = useFieldGroups(queryId)

  const [filterEntries, setFilterEntries] = useState(
    Object.entries(filters || {})
  )

  const handleCreateFilter = () => {
    setFilterEntries([...filterEntries, ['', '']])
  }

  const handleDeleteFilter = (name: string, i: number) => {
    const draftFilterEntries = [...filterEntries]
    draftFilterEntries.splice(i, 1)
    setFilterEntries(draftFilterEntries)
    onRemoveFilter(name)
  }

  return (
    <>
      {filterEntries.map(([name, value], i) => {
        const filterView = name.split('.')[0]
        const fieldGroup = fieldGroups[filterView]
        const filterField = fieldGroup?.find(g => g.name === name)
        if (filterField || name === '') {
          return (
            <Space key={`${name}${i}`}>
              <IconButton
                icon={<Close />}
                label="Delete filter"
                outline
                onClick={() => handleDeleteFilter(name, i)}
              />
              <FilterEntry
                queryId={queryId}
                filterExpression={value}
                filterField={filterField}
                onUpdateFilter={onUpdateFilter}
              />
            </Space>
          )
        }
        return null
      })}
      <ButtonOutline
        iconBefore={<Add />}
        onClick={handleCreateFilter}
        type="button"
      >
        Create Filter
      </ButtonOutline>
    </>
  )
}
