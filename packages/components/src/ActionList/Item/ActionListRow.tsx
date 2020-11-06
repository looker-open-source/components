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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import pick from 'lodash/pick'
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactNode,
  Ref,
  useContext,
} from 'react'
import styled from 'styled-components'
import { ActionListContext } from '../ActionListContext'
import {
  ActionListCheckbox,
  ActionListCheckboxProps,
  checkListProps,
} from './ActionListCheckbox'

export interface ActionListItemLayoutProps
  extends ActionListCheckboxProps,
    Omit<CompatibleHTMLProps<HTMLElement>, 'onChange' | 'checked'> {
  secondary?: ReactNode
  hasCheckbox?: boolean
  /**
   * Display checkbox as `th` instead of `td`
   * @default false
   */
  isHeaderRow?: boolean
}

const ActionListRowLayout = forwardRef(
  (props: ActionListItemLayoutProps, ref: Ref<HTMLTableRowElement>) => {
    const {
      className,
      hasCheckbox,
      children,
      isHeaderRow,
      onClick,
      onKeyDown,
      secondary,
      tabIndex,
    } = props

    const ColumnType = isHeaderRow ? 'th' : 'td'
    const { columns, columnsDisplayState } = useContext(ActionListContext)
    const getColumnSize = (index: number) => columns && columns[index].size

    const sizedChildren = Children.map(children, (child, index) => {
      if (columnsDisplayState && !columnsDisplayState[index]) {
        return null
      } else if (isValidElement(child)) {
        return cloneElement(child, { size: getColumnSize(index) })
      } else {
        return child
      }
    })

    const checkbox = hasCheckbox ? (
      <ActionListCheckbox {...pick(props, checkListProps)} />
    ) : (
      <div />
    )

    return (
      <tr
        ref={ref}
        className={className}
        onKeyDown={onKeyDown}
        tabIndex={tabIndex}
        onClick={onClick}
      >
        <ColumnType>{checkbox}</ColumnType>
        {sizedChildren}
        <ColumnType>{secondary}</ColumnType>
      </tr>
    )
  }
)

ActionListRowLayout.displayName = 'ActionListRowLayout'

export const ActionListRow = styled(ActionListRowLayout)`
  td,
  th {
    background: ${({ checked, isHeaderRow, theme: { colors } }) =>
      checked && !isHeaderRow ? colors.keySubtle : colors.background};
    border-bottom: solid 1px ${(props) => props.theme.colors.ui2};

    &:first-of-type > div {
      border-left: 1px solid transparent;
      border-right: 1px solid transparent; /* Keeps checkbox centered */
      height: 100%;
    }
  }

  &:hover {
    cursor: ${({ onClick }) => onClick && 'pointer'};
    outline: none;

    td,
    th {
      background: ${({ checked, isHeaderRow, theme: { colors } }) =>
        checked && !isHeaderRow
          ? colors.keyAccent
          : isHeaderRow
          ? undefined
          : colors.ui1};
    }
  }

  &:focus {
    outline: none;

    td:first-of-type > div {
      border-left-color: ${({ theme }) => theme.colors.key};
    }
  }
`
