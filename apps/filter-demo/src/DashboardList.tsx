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

import React, { useMemo, useState } from 'react'
import type { IDashboard } from '@looker/sdk'
import type { SelectOptionObject } from '@looker/components'
import { FieldSelect } from '@looker/components'

interface DashboardListProps {
  dashboards: IDashboard[]
  current?: string
  loading: boolean
  selectDashboard: (id: string) => void
}

export const DashboardList: React.FC<DashboardListProps> = ({
  current = '',
  loading,
  dashboards,
  selectDashboard,
}) => {
  const [filter, setFilter] = useState('')
  const options = useMemo(
    () =>
      dashboards.reduce(
        (acc: SelectOptionObject[], { id, title }: IDashboard) => {
          if (id && title?.toUpperCase().includes(filter.toUpperCase())) {
            acc = [...acc, { label: title, value: id }]
          }
          return acc
        },
        []
      ),
    [dashboards, filter]
  )

  return (
    <FieldSelect
      label="Select a Dashboard"
      inline={window.innerWidth > 768}
      isLoading={loading}
      options={options}
      value={current}
      onChange={selectDashboard}
      isFilterable
      onFilter={setFilter}
    />
  )
}
