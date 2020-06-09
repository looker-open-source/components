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
  Tree,
  TreeItem,
  TreeGroup,
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
    <Tree
      defaultOpen
      detail={addButton}
      detailStopPropagation
      label="Custom Fields"
    >
      <TreeGroup label="Dimensions">
        <TreeItem icon="FieldNumber" onClick={() => alert('Clicked on Cost!')}>
          Cost
        </TreeItem>
        <Tree label="Created">
          <TreeItem
            icon="Calendar"
            onClick={() => alert('Clicked on Created Date!')}
          >
            Created Date
          </TreeItem>
          <TreeItem
            icon="Calendar"
            onClick={() => alert('Clicked on Created Month!')}
          >
            Created Month
          </TreeItem>
          <TreeItem
            icon="Calendar"
            onClick={() => alert('Clicked on Created Year!')}
          >
            Created Year
          </TreeItem>
          <TreeItem
            icon="Calendar"
            onClick={() => alert('Clicked on Created Quarter!')}
          >
            Created Quarter
          </TreeItem>
        </Tree>
        <TreeItem
          icon="FieldDistance"
          onClick={() => alert('Clicked on Location!')}
        >
          Location
        </TreeItem>
        <TreeItem icon="FieldTier" onClick={() => alert('Clicked on Tier!')}>
          Tier
        </TreeItem>
        <TreeItem
          icon="FieldYesNo"
          onClick={() => alert('Clicked on French Yes-No!')}
        >
          Oui ou Non
        </TreeItem>
      </TreeGroup>
      <TreeGroup color="critical" label="Measures">
        <TreeItem icon="FieldNumber" onClick={() => alert('Clicked on Count!')}>
          Count
        </TreeItem>
        <TreeItem
          icon="FieldNumber"
          onClick={() => alert('Clicked on Count Distinct!')}
        >
          Count Distinct
        </TreeItem>
      </TreeGroup>
    </Tree>
  </Box>
)

const lookmlIdeExample = (
  <Box color="text3">
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
    <Tree border label="Orders" detail={<Box color="text4">thelook</Box>}>
      <Tree label="Orders">
        <TreeItem>ID</TreeItem>
        <TreeItem>Status</TreeItem>
        <Tree label="Created">
          <TreeItem>Created Date</TreeItem>
          <TreeItem>Created Month</TreeItem>
          <TreeItem>Created Year</TreeItem>
          <TreeItem>Created Quarter</TreeItem>
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
