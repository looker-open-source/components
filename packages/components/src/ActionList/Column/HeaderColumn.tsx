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
import { Tooltip } from '../../Tooltip'
import { Truncate } from '../../Truncate'
import { columnSize, sizeInfersTruncate } from './columnSize'
import { ColumnProps, ColumnSortDirection, ColumnType } from './column'

export interface HeaderColumnComponentProps extends ColumnProps {
  className?: string
}

const ActionListHeaderColumnLayout = forwardRef(
  (
    {
      canSort,
      className,
      title,
      titleIcon,
      id,
      size,
      sortDirection,
      type,
    }: HeaderColumnComponentProps,
    ref: Ref<HTMLTableHeaderCellElement>
  ) => {
    const { onSort } = useContext(ActionListContext)

    const handleClick = () => {
      if (onSort && canSort) {
        onSort(id, sortDirection === 'asc' ? 'desc' : 'asc')
      }
    }

    const label = titleIcon ? (
      <Tooltip content={title}>
        <Icon name={titleIcon} size="small" color="ui3" />
      </Tooltip>
    ) : size && sizeInfersTruncate(size) ? (
      <Truncate>{title}</Truncate>
    ) : (
      title
    )

    return (
      <th
        className={className}
        onClick={handleClick}
        ref={ref}
        style={{ cursor: canSort ? 'pointer' : undefined }}
      >
        <Space gap="xxsmall" reverse={type === 'number'}>
          {label}
          {sortDirection && (
            <Icon
              name={sortDirection === 'asc' ? 'CaretUp' : 'CaretDown'}
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
