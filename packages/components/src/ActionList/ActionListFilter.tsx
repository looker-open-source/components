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

import styled from 'styled-components'
import React, { FC, ReactNode } from 'react'
import { Grid } from '../Layout/Grid'
import { Icon } from '../Icon'
import { Text } from '../Text'

export interface ActionListFilterProps {
  className?: string
  filterList?: ReactNode
  filterSearch?: string
  /**
   *  @default 'Filter list'
   **/
}

export const ActionListFilterLayout: FC<ActionListFilterProps> = ({
  className,
  filterSearch,
}) => {
  filterSearch = filterSearch || 'Filter list'
  return (
    <Grid className={className}>
      <IconFilter name="Filter" />
      <Text grid-area="text">{filterSearch}</Text>
      <IconViewColumn name="ViewColumn" />
    </Grid>
  )
}

export const IconFilter = styled(Icon)`
  color: ${({ theme }) => theme.colors.ui4};
  grid-area: 'filterIcon';
  justify-self: start;
  padding-right: ${({ theme }) => theme.space.xsmall};
  size: ${({ theme }) => theme.space.large};
`

export const IconViewColumn = styled(Icon)`
  color: ${({ theme }) => theme.colors.ui4};
  grid-area: 'IconViewColumn';
  justify-self: end;
  size: ${({ theme }) => theme.space.xsmall};
`

export const ActionListFilter = styled(ActionListFilterLayout)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
  border-left: none;
  border-right: none;
  border-top: 1px solid ${({ theme }) => theme.colors.ui2};
  display: grid;
  gap: 0;
  grid-template-areas: 'filterIcon text columnIcon';
  grid-template-columns: 24px auto auto;
  grid-template-rows: auto;
  padding: ${({ theme }) => theme.space.xsmall};

  ${Text} {
    color: ${({ theme }) => theme.colors.text1};
    font-size: ${({ theme }) => theme.fontSizes.small};
    justify-self: start stretch;
  }
`
