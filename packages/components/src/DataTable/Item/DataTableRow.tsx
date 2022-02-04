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

import type { CompatibleHTMLProps, Theme } from '@looker/design-tokens'
import pick from 'lodash/pick'
import type { ReactNode, Ref } from 'react'
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useContext,
} from 'react'
import styled from 'styled-components'
import { DataTableContext } from '../DataTableContext'
import type { DataTableCheckboxProps } from './DataTableCheckbox'
import { DataTableCheckbox, checkListProps } from './DataTableCheckbox'

export interface DataTableRowProps
  extends DataTableCheckboxProps,
    Omit<CompatibleHTMLProps<HTMLElement>, 'onChange' | 'checked'> {
  /**
   * Content displayed after selection checkbox (optional) and row cells.
   * Used for DataTableActions
   */
  secondary?: ReactNode
  hasCheckbox?: boolean
  /**
   * Display checkbox as `th` instead of `td`
   * @default false
   */
  isHeaderRow?: boolean
}

const DataTableRowLayout = forwardRef(
  (props: DataTableRowProps, ref: Ref<HTMLTableRowElement>) => {
    const {
      className,
      hasCheckbox,
      children,
      id,
      isHeaderRow,
      onClick,
      onKeyDown,
      secondary,
    } = props

    const ColumnType = isHeaderRow ? 'th' : 'td'
    const { columns, columnsDisplayState } = useContext(DataTableContext)
    const getColumnSize = (index: number) => columns && columns[index].size

    const sizedChildren = Children.map(children, (child, index) => {
      if (columnsDisplayState && !columnsDisplayState[index]) {
        return null
      }

      const size = getColumnSize(index)
      const cellProps =
        index === 0
          ? { id: `rowheader-${id}`, role: 'rowheader', size }
          : { size }
      return isValidElement(child) && cloneElement(child, cellProps)
    })

    const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
      return event.target instanceof HTMLAnchorElement
        ? undefined
        : onClick && onClick(event)
    }

    const suppressClickPropagation = (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation()
    }

    return (
      <tr
        ref={ref}
        className={className}
        onKeyDown={onKeyDown}
        onClick={handleOnClick}
      >
        {hasCheckbox ? (
          <ColumnType onClick={suppressClickPropagation}>
            <DataTableCheckbox {...pick(props, checkListProps)} />
          </ColumnType>
        ) : (
          <ColumnType aria-hidden="true" />
        )}
        {sizedChildren}
        <ColumnType onClick={suppressClickPropagation}>{secondary}</ColumnType>
      </tr>
    )
  }
)

DataTableRowLayout.displayName = 'DataTableRowLayout'

const getRowHoverColor = (
  theme: Theme,
  hasOnClick: boolean,
  isHeader: boolean,
  isSelected: boolean
) => {
  if (!isHeader && hasOnClick) {
    return isSelected ? theme.colors.keyAccent : theme.colors.ui1
  }
  return undefined
}

export const DataTableRow = styled(DataTableRowLayout)`
  td,
  th {
    background: ${({ checked, isHeaderRow, theme: { colors } }) =>
      checked && !isHeaderRow ? colors.keySubtle : colors.background};
    border-bottom: solid 1px ${({ theme }) => theme.colors.ui2};
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
      background: ${({ checked, isHeaderRow, onClick, theme }) =>
        getRowHoverColor(
          theme,
          Boolean(onClick),
          Boolean(isHeaderRow),
          Boolean(checked)
        )};
    }
  }

  &:focus {
    outline: none;

    td:first-of-type > div {
      border-left-color: ${({ theme }) => theme.colors.key};
    }
  }
`
