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
import React, { useContext, forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { ActionListContext } from '../ActionListContext'
import { Icon } from '../../Icon'
import { Space } from '../../Layout/Space'
import { Truncate } from '../../Truncate'
import { ColumnComponentProps } from './column'
import { columnSize } from './columnSize'

export interface HeaderColumnComponentProps extends ColumnComponentProps {
  id: string
}

const ActionListHeaderColumnLayout = forwardRef(
  (
    { className, children, id }: HeaderColumnComponentProps,
    ref: Ref<HTMLTableHeaderCellElement>
  ) => {
    const { columns, onSort } = useContext(ActionListContext)
    const columnInfo = columns && columns.find((column) => column.id === id)
    const canSort = columnInfo && columnInfo.canSort

    const handleClick = () => {
      if (onSort && columnInfo && columnInfo.canSort) {
        onSort(id, columnInfo.sortDirection === 'asc' ? 'desc' : 'asc')
      }
    }

    return (
      <th
        className={className}
        onClick={handleClick}
        ref={ref}
        style={{ cursor: canSort ? 'pointer' : undefined }}
      >
        <Space gap="xxsmall" reverse={columnInfo?.type === 'number'}>
          <Truncate>{children}</Truncate>
          {columnInfo?.sortDirection && (
            <Icon
              name={
                columnInfo.sortDirection === 'asc' ? 'CaretUp' : 'CaretDown'
              }
            ></Icon>
          )}
        </Space>
      </th>
    )
  }
)

ActionListHeaderColumnLayout.displayName = 'ActionListHeaderColumnLayout'

export const ActionListHeaderColumn = styled(ActionListHeaderColumnLayout)`
  ${columnSize}
`
