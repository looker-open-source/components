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
import type { ParagraphProps } from '../..'
import { Aside, Box, Paragraph } from '../..'
import { TreeBranch, TreeCollection } from '../../Tree'
import { LkFieldGroupTree, LkFieldViewTree } from '..'
import { FieldPickerItem } from './FieldPickerItem'

const FieldGroupHeading = (props: ParagraphProps) => (
  <Paragraph
    color="text1"
    fontSize="xxsmall"
    fontWeight="semiBold"
    pt="medium"
    pb="xxsmall"
    pl="xxsmall"
    truncate
    style={{ lineHeight: '0.75rem' }}
    {...props}
  />
)

const fields = (
  <>
    <TreeBranch>
      <FieldGroupHeading pt="none">DIMENSIONS</FieldGroupHeading>
    </TreeBranch>
    <LkFieldGroupTree color="dimension" selected label={<Box>Created</Box>}>
      <FieldPickerItem>Created Date</FieldPickerItem>
      <FieldPickerItem selected>Created Month</FieldPickerItem>
      <FieldPickerItem>Created Year</FieldPickerItem>
    </LkFieldGroupTree>
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
      <LkFieldViewTree defaultOpen detail={3} label={<strong>Orders</strong>}>
        {fields}
      </LkFieldViewTree>
      <LkFieldViewTree label={<strong>Order Items</strong>}>
        {fields}
      </LkFieldViewTree>
      <LkFieldViewTree label={<strong>Users</strong>}>{fields}</LkFieldViewTree>
    </TreeCollection>
  </Aside>
)
