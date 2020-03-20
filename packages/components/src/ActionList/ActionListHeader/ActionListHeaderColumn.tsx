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
import React, { useContext, forwardRef, Ref, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { CompatibleHTMLProps } from '@looker/design-tokens'
import { ActionListContext } from '../ActionListContext'
import { Icon } from '../../Icon'

export const columnCSS = css`
  padding: ${props => props.theme.space.small};
`

export interface ActionListHeaderColumnProps {
  children?: ReactNode
  id: string
}

export const ActionListHeaderColumn = forwardRef(
  ({ children, id }: ActionListHeaderColumnProps, ref: Ref<HTMLDivElement>) => {
    const { columns, doSort } = useContext(ActionListContext)
    const columnInfo = columns && columns.find(column => column.id === id)

    const handleClick = () => {
      if (doSort && columnInfo && columnInfo.canSort) {
        doSort(id, columnInfo.sortDirection === 'asc' ? 'desc' : 'asc')
      }
    }

    return (
      <ActionListHeaderColumnStyle
        ref={ref}
        canSort={columnInfo && columnInfo.canSort}
        onClick={handleClick}
      >
        {children}
        {columnInfo && columnInfo.sortDirection ? (
          <Icon
            ml={columnInfo.type === 'string' ? 'xxsmall' : undefined}
            mr={columnInfo.type === 'number' ? 'xxsmall' : undefined}
            name={columnInfo.sortDirection === 'asc' ? 'CaretUp' : 'CaretDown'}
          ></Icon>
        ) : null}
      </ActionListHeaderColumnStyle>
    )
  }
)

ActionListHeaderColumn.displayName = 'ActionListHeaderColumn'

export interface ActionListHeaderColumnStyleProps
  extends CompatibleHTMLProps<HTMLDivElement> {
  canSort?: boolean
}

export const ActionListHeaderColumnStyle = styled.div<
  ActionListHeaderColumnStyleProps
>`
  ${columnCSS}
  display: flex;
  align-items: center;
  cursor: ${({ canSort }) => canSort && 'pointer'};
`
