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

import React, { FC, useContext } from 'react'
import styled, { css } from 'styled-components'
import { ActionListContext } from '../ActionListContext'
import { Icon } from '../../Icon'

export const columnCSS = css`
  padding: ${props => props.theme.space.small};
`

export interface ActionListHeaderColumnProps {
  canSort?: boolean
  className?: string
  id: string
}

export const ActionListHeaderColumnLayout: FC<ActionListHeaderColumnProps> = ({
  canSort,
  children,
  className,
  id,
}) => {
  const { columns, doSort } = useContext(ActionListContext)
  const columnInfo = columns && columns.find(column => column.id === id)

  const handleClick = () => {
    if (canSort && doSort) {
      if (columnInfo && columnInfo.sortDirection === 'desc') {
        doSort(id, 'asc')
      } else {
        doSort(id, 'desc')
      }
    }
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
      {columnInfo && columnInfo.sortDirection ? (
        <Icon
          ml={columnInfo.type === 'string' ? 'xxsmall' : undefined}
          mr={columnInfo.type === 'number' ? 'xxsmall' : undefined}
          name={columnInfo.sortDirection === 'asc' ? 'CaretUp' : 'CaretDown'}
        ></Icon>
      ) : null}
    </div>
  )
}

export const ActionListHeaderColumn = styled(ActionListHeaderColumnLayout)`
  ${columnCSS}
  display: flex;
  align-items: center;
  cursor: ${({ canSort }) => canSort && 'pointer'};
`
