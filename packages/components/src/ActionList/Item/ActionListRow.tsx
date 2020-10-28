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
import styled, { css } from 'styled-components'
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
   * @default true
   */
  supportsRaised?: boolean
  /**
   * Display checkbox as `th` instead of `td`
   * @default false
   */
  isHeaderRow?: boolean
}

// const Th = styled.th<{ alignEnd?: boolean }>`
//   ${({ alignEnd }) =>
//     alignEnd &&
//     css`
//       display: flex;
//       flex-direction: column-reverse;
//     `}
// `

// const Td = styled.td<{ alignEnd?: boolean }>`
//   ${({ alignEnd }) =>
//     alignEnd &&
//     css`
//       display: flex;
//       flex-direction: column-reverse;
//     `}
// `

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
    const { columns } = useContext(ActionListContext)
    const getColumnSize = (index: number) => columns && columns[index].size

    const sizedChildren = Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        return cloneElement(child, { size: getColumnSize(index) })
      } else {
        return child
      }
    })

    return (
      <tr
        ref={ref}
        className={className}
        onKeyDown={onKeyDown}
        tabIndex={tabIndex}
        onClick={onClick}
      >
        {hasCheckbox && (
          <ColumnType>
            <ActionListCheckbox {...pick(props, checkListProps)} />
          </ColumnType>
        )}
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

      &:first-of-type {
        border-left: 1px solid transparent;
      }
    }
  }

  &:focus {
    outline: none;

    td:first-of-type {
      border-left-color: ${({ theme }) => theme.colors.key};
    }
  }
`

ActionListRow.defaultProps = { supportsRaised: true }
