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

import React from 'react'
import styled from 'styled-components'
import { Box, Paragraph } from '../..'
import { TreeCollection, TreeBranch, Tree } from '..'
import { generateBorderRadius } from '../utils/generateBorderRadius'
import { FieldItem } from './FieldItem'

const BorderRadiusOverrideTree = styled(Tree)`
  ${({ theme }) => generateBorderRadius('medium', theme)}
`

const FieldGroupHeading = styled(Paragraph).attrs(({ color = 'text1' }) => ({
  color,
  fontSize: 'xxsmall',
  fontWeight: 'semiBold',
  pb: 'xxsmall',
  pr: 'xxsmall',
  pt: 'xsmall',
  truncate: true,
}))`
  line-height: 0.75rem;
`

const fields = (
  <>
    <TreeBranch>
      <FieldGroupHeading>DIMENSIONS</FieldGroupHeading>
    </TreeBranch>
    <BorderRadiusOverrideTree
      branchFontWeight
      label={<Box px="xxsmall">Created</Box>}
    >
      <FieldItem>Created Date</FieldItem>
      <FieldItem>Created Month</FieldItem>
      <FieldItem>Created Year</FieldItem>
    </BorderRadiusOverrideTree>
    <FieldItem>City</FieldItem>
    <FieldItem selected filter>
      This is a real long Field name that was country before
    </FieldItem>
    <FieldItem>ID</FieldItem>
    <TreeBranch>
      <FieldGroupHeading color="measure">MEASURES</FieldGroupHeading>
    </TreeBranch>
    <FieldItem color="measure" selected>
      Sum
    </FieldItem>
    <FieldItem color="measure" filter>
      Max
    </FieldItem>
    <TreeBranch>
      <FieldGroupHeading color="calculation">CALCULATED</FieldGroupHeading>
    </TreeBranch>
    <FieldItem pivot color="calculation">
      Calc
    </FieldItem>
  </>
)

export const FieldPicker = () => (
  <TreeCollection>
    <BorderRadiusOverrideTree
      density={-3}
      defaultOpen={true}
      detail={3}
      label={<Box px="xxsmall">Orders</Box>}
      labelBackgroundOnly
    >
      {fields}
    </BorderRadiusOverrideTree>
    <BorderRadiusOverrideTree
      density={-3}
      label={<Box px="xxsmall">Order Items</Box>}
      labelBackgroundOnly
    >
      {fields}
    </BorderRadiusOverrideTree>
    <BorderRadiusOverrideTree
      density={-3}
      label={<Box px="xxsmall">Users</Box>}
      labelBackgroundOnly
    >
      {fields}
    </BorderRadiusOverrideTree>
  </TreeCollection>
)
