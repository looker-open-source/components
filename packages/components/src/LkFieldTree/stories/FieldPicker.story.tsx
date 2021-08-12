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
import { defaultArgTypes as argTypes } from '../../../../../storybook/src/defaultArgTypes'
import { Aside, Box, Paragraph, ParagraphProps } from '../..'
import { TreeBranch, TreeCollection } from '../../Tree'
import { generateBorderRadius } from '../../Tree/utils/generateBorderRadius'
import { LkFieldTree } from '..'
import { FieldItem } from './FieldItem'

export default {
  argTypes,
  component: LkFieldTree,
  title: 'LkFieldTree',
}

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
      <FieldItem>Created Date</FieldItem>
      <FieldItem selected>Created Month</FieldItem>
      <FieldItem>Created Year</FieldItem>
    </BorderRadiusOverrideTree>
    <FieldItem>City</FieldItem>
    <FieldItem selected filter>
      This is a really long field name to show that truncation is working as
      desired. It's not a realistic example but it lets our tests know that
      things are working as-desired
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
  <Aside>
    <TreeCollection>
      <BorderRadiusOverrideTree
        density={-3}
        defaultOpen={true}
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
        density={-3}
        label={
          <Box pl="xxsmall" fontWeight="bold">
            Order Items
          </Box>
        }
      >
        {fields}
      </BorderRadiusOverrideTree>
      <BorderRadiusOverrideTree
        density={-3}
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
