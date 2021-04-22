/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import styled, { css } from 'styled-components'
import { color as colorHelper } from '@looker/design-tokens'
import { StyledIconBase } from '@styled-icons/styled-icon'
import { IconPlaceholder } from '../Icon'
import { Flex } from '../Layout'
import { ListItemDimensions } from './types'
import { listItemPadding } from './utils'

export interface ListItemLayoutProps
  extends Pick<ListItemDimensions, 'px' | 'py'> {
  className?: string
  color?: string
  labelCreator: FC<{ children: ReactNode; className: string }>
  description?: ReactNode
  detail?: ReactNode
  disabled: boolean
  icon?: ReactNode
  iconSize: string
  iconGap: string
}

const ListItemLayoutInternal: FC<ListItemLayoutProps> = ({
  children,
  className = '',
  labelCreator,
  description,
  detail,
  icon,
}) => {
  const content = (
    <>
      {icon}
      <Flex flexDirection="column" minWidth={0} flexGrow={1}>
        {children}
        {description}
      </Flex>
      {detail}
    </>
  )

  return labelCreator({
    children: content,
    className,
  })
}

export const listItemIconCSS = css<ListItemLayoutProps>`
  & > svg,
  & > ${StyledIconBase}, & > ${IconPlaceholder} {
    ${colorHelper}
    align-self: center;
    flex-grow: 0;
    flex-shrink: 0;
    height: ${({ iconSize, theme }) => theme.sizes[iconSize]};
    margin-right: ${({ iconGap, theme }) => theme.space[iconGap]};
    width: ${({ iconSize, theme }) => theme.sizes[iconSize]};
  }
`
const textColor = ['critical', 'calculation', 'measure']

export const ListItemLayout = styled(ListItemLayoutInternal).attrs(
  ({ color = 'text2', disabled }) => ({
    // Determines icon color
    color: disabled ? 'text1' : textColor.includes(color) ? color : 'text2',
  })
)<ListItemLayoutProps>`
  ${(props) => listItemPadding({ ...props })}
  ${listItemIconCSS}
`
