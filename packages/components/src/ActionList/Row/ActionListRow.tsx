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
import React, { forwardRef, ReactNode, Ref } from 'react'
import styled from 'styled-components'
import { Flex } from '../../Layout/Flex'
import {
  ActionListCheckbox,
  ActionListCheckboxProps,
  checkListProps,
} from '../Item/ActionListCheckbox'

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

export const ActionListRowColumns = styled.td``

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
        {children}
        <ColumnType>
          <Flex justifyContent="flex-end">{secondary}</Flex>
        </ColumnType>
      </tr>
    )
  }
)

ActionListRowLayout.displayName = 'ActionListRowLayout'

export const ActionListRow = styled(ActionListRowLayout)`
  background: ${({ checked, disabled, theme }) =>
    disabled ? theme.colors.ui1 : checked ? theme.colors.keySubtle : undefined};

  &:focus,
  &:hover {
    box-shadow: ${({ theme, supportsRaised, onClick }) =>
      supportsRaised && onClick && theme.shadows[2]};
    cursor: ${({ onClick }) => onClick && 'pointer'};
    outline: none;

    /**
      The hovered ActionListItem needs to sit above its siblings (otherwise the bottom box-shadow is covered up).
      Using position relative to paint it above static siblings.
     */
    position: relative;
  }
`

ActionListRow.defaultProps = { supportsRaised: true }
