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
import styled from 'styled-components'
import React, { FC, useContext } from 'react'
import { ActionListRow } from '../Item/ActionListRow'
import { ActionListContext } from '../ActionListContext'

const ActionListHeaderLayout: FC<CompatibleHTMLProps<HTMLDivElement>> = ({
  children,
  className,
  id,
}) => {
  const { allSelected, select } = useContext(ActionListContext)

  const hasCheckbox = !!select
  const onChange = () => (select ? select.onSelectAll() : undefined)

  return (
    <ActionListRow
      id={id}
      isHeaderRow
      className={className}
      hasCheckbox={hasCheckbox}
      onChange={onChange}
      checked={allSelected}
    >
      {children}
    </ActionListRow>
  )
}

export const ActionListHeader = styled(ActionListHeaderLayout)`
  background: transparent;
  color: ${(props) => props.theme.colors.text5};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};

  td,
  th {
    border-bottom: solid 1px ${(props) => props.theme.colors.ui2};
    text-align: left;
  }
`
