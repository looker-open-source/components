/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { ParagraphProps } from '../..'
import { Aside, Box2, Paragraph } from '../..'
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
    <LkFieldGroupTree color="dimension" selected label={<Box2>Created</Box2>}>
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
