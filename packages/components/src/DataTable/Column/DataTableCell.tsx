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

import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Space, SpaceVertical } from '../../Layout'
import { Link } from '../../Link'
import { Paragraph } from '../../Text'
import { Truncate } from '../../Truncate'
import { columnSize, DataTableColumnSize, noColumnSize } from './columnSize'

export interface DataTableCellProps {
  className?: string
  children: ReactNode
  detail?: ReactNode
  indicator?: ReactNode
  size?: DataTableColumnSize
}

const DataTableCellLayout: FC<DataTableCellProps> = ({
  children,
  detail,
  className,
  indicator,
  size,
}) => {
  const handleChildClick = (event) => event.stopPropagation()
  console.log('children-type: ', children.type)

  console.log(
    'children-type.displayName: ',
    children && children.type && children.type.displayName
  )

  const link =
    (children && children.type && children.type === 'a') ||
    (children && children.type && children.type.displayName === 'Link')

  let content =
    size && size !== 'nowrap' ? <Truncate>{children}</Truncate> : children

  if (detail) {
    content = (
      <SpaceVertical gap="xxxsmall">
        <span>{content}</span>
        {detail && (
          <Paragraph fontSize="xsmall" variant="subdued" truncate>
            {detail}
          </Paragraph>
        )}
      </SpaceVertical>
    )

    if (indicator) {
      content = (
        <Space gap="xsmall">
          {indicator}
          {content}
        </Space>
      )
    }
  } else if (indicator) {
    content = (
      <Space gap="xsmall">
        {indicator}
        <span>{content}</span>
      </Space>
    )
  }

  return (
    <td className={className} onClick={link && handleChildClick}>
      {content}
    </td>
  )
}

export const DataTableCell = styled(DataTableCellLayout)`
  ${({ size }) => (size ? columnSize : noColumnSize)}

  a,
  ${Link} {
    color: inherit;
    :hover,
    :focus {
      color: ${({ theme }) => theme.colors.link};
      text-decoration: underline;
    }
  }
`
