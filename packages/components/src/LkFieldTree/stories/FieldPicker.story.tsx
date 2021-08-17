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
import { Aside, Box, Paragraph, ParagraphProps } from '../..'
import { TreeBranch, TreeCollection } from '../../Tree'
import { generateBorderRadius } from '../../Tree/utils/generateBorderRadius'
import { LkFieldTree } from '..'
import { FieldPickerItem } from './FieldPickerItem'

const BorderRadiusOverrideTree = styled(LkFieldTree)`
  ${({ theme }) => generateBorderRadius('medium', theme)}
`

const FieldGroupHeading = (props: ParagraphProps) => (
  <Paragraph
    color="text1"
    fontSize="xxsmall"
    fontWeight="semiBold"
    pb="xxsmall"
    pr="xxsmall"
    pt="xsmall"
    truncate
    style={{ lineHeight: '0.75rem' }}
    {...props}
  />
)

const fields = (
  <>
    <TreeBranch>
      <FieldGroupHeading>DIMENSIONS</FieldGroupHeading>
    </TreeBranch>
    <BorderRadiusOverrideTree
      color="dimension"
      selected
      label={<Box pl="xxsmall">Created</Box>}
    >
      <FieldPickerItem>Created Date</FieldPickerItem>
      <FieldPickerItem selected>Created Month</FieldPickerItem>
      <FieldPickerItem>Created Year</FieldPickerItem>
    </BorderRadiusOverrideTree>
    <FieldPickerItem>City</FieldPickerItem>
    <FieldPickerItem selected filter>
      This is a really long field name to show that truncation is working as
      desired. It's not a realistic example but it lets our tests know that
      things are working as-desired
    </FieldPickerItem>
    <FieldPickerItem>ID</FieldPickerItem>
    <TreeBranch>
      <FieldGroupHeading color="measure">MEASURES</FieldGroupHeading>
    </TreeBranch>
    <FieldPickerItem color="measure" selected>
      Sum
    </FieldPickerItem>
    <FieldPickerItem color="measure" filter>
      Max
    </FieldPickerItem>
    <TreeBranch>
      <FieldGroupHeading color="calculation">CALCULATED</FieldGroupHeading>
    </TreeBranch>
    <FieldPickerItem pivot color="calculation">
      Calc
    </FieldPickerItem>
  </>
)

export const FieldPicker = () => (
  <Aside>
    <TreeCollection>
      <BorderRadiusOverrideTree
        defaultOpen
        detail={3}
        label={
          <Box pl="xxsmall" fontWeight="bold">
            Orders
          </Box>
        }
      >
        {fields}
      </BorderRadiusOverrideTree>
      <BorderRadiusOverrideTree
        label={
          <Box pl="xxsmall" fontWeight="bold">
            Order Items
          </Box>
        }
      >
        {fields}
      </BorderRadiusOverrideTree>
      <BorderRadiusOverrideTree
        label={
          <Box pl="xxsmall" fontWeight="bold">
            Users
          </Box>
        }
      >
        {fields}
      </BorderRadiusOverrideTree>
    </TreeCollection>
  </Aside>
)
