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

import React from 'react'
import {
  Box,
  ButtonTransparent,
  Grid,
  theme,
  Tree,
  TreeItem,
} from '@looker/components'

const onClick = () => {
  alert("I'm a little teapot")
  return false
}

const addButton = (
  <ButtonTransparent onClick={onClick} size="xxsmall" iconBefore="Plus">
    Add
  </ButtonTransparent>
)

const exploreExample = (
  <Box>
    Explore Example
    <Tree detail={addButton} label="Custom Fields">
      <TreeItem icon="FieldNumber">Cost</TreeItem>
      <Tree label="Created">
        <TreeItem icon="Calendar">Created Date</TreeItem>
        <TreeItem icon="Calendar">Created Month</TreeItem>
        <TreeItem icon="Calendar">Created Year</TreeItem>
        <TreeItem icon="Calendar">Created Quarter</TreeItem>
      </Tree>
      <TreeItem icon="FieldDistance">Location</TreeItem>
      <TreeItem icon="FieldTier">Tier</TreeItem>
      <TreeItem icon="FieldYesNo">Oui ou Non</TreeItem>
    </Tree>
  </Box>
)

const lookmlIdeExample = (
  <Box color="palette.charcoal600">
    LookML IDE Example
    <Tree label="thelook" icon="ExploreOutline">
      <Tree label="Orders" icon="VisibilityOutline">
        <Tree label="Orders" icon="Table">
          <TreeItem icon="IdeDimension">ID</TreeItem>
          <TreeItem icon="IdeDimension">Status</TreeItem>
          <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
        </Tree>
        <Tree label="Products" icon="Table">
          <TreeItem icon="IdeDimension">Brand</TreeItem>
          <TreeItem icon="IdeDimension">ID</TreeItem>
          <TreeItem icon="IdeDimension">Department</TreeItem>
          <TreeItem icon="IdeDimension">Sku</TreeItem>
        </Tree>
        <Tree label="Users" icon="Table">
          <TreeItem icon="IdeDimension">ID</TreeItem>
          <TreeItem icon="IdeDimension">Name</TreeItem>
          <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
        </Tree>
      </Tree>
      <Tree label="Users" icon="VisibilityOutline">
        <Tree label="Orders" icon="Table">
          <TreeItem icon="IdeDimension">ID</TreeItem>
          <TreeItem icon="IdeDimension">Status</TreeItem>
          <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
        </Tree>
        <Tree label="Users" icon="Table">
          <TreeItem icon="IdeDimension">ID</TreeItem>
          <TreeItem icon="IdeDimension">Name</TreeItem>
          <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
        </Tree>
      </Tree>
    </Tree>
    <Tree label="thelook2" icon="ExploreOutline">
      <Tree label="Users" icon="VisibilityOutline">
        <Tree label="Orders" icon="Table">
          <TreeItem icon="IdeDimension">ID</TreeItem>
          <TreeItem icon="IdeDimension">Status</TreeItem>
          <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
        </Tree>
        <Tree label="Users" icon="Table">
          <TreeItem icon="IdeDimension">ID</TreeItem>
          <TreeItem icon="IdeDimension">Name</TreeItem>
          <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
        </Tree>
      </Tree>
    </Tree>
  </Box>
)

const filterPickerExample = (
  <Box>
    Filter Picker Example
    <Tree
      label="Orders"
      detail={<Box color="palette.charcoal500">thelook</Box>}
    >
      <Tree label="Orders">
        <Box borderLeft={`1px solid ${theme.colors.palette.blue200}`}>
          <TreeItem>ID</TreeItem>
          <TreeItem>Status</TreeItem>
        </Box>
        <Tree label="Created">
          <Box borderLeft={`1px solid ${theme.colors.palette.blue200}`}>
            <TreeItem>Created Date</TreeItem>
            <TreeItem>Created Month</TreeItem>
            <TreeItem>Created Year</TreeItem>
            <TreeItem>Created Quarter</TreeItem>
          </Box>
        </Tree>
      </Tree>
    </Tree>
  </Box>
)

export const TreeDemo = () => {
  return (
    <Grid m="xxlarge" gap="xxlarge">
      {exploreExample}
      {lookmlIdeExample}
      {filterPickerExample}
    </Grid>
  )
}
