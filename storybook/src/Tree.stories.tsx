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
  ButtonTransparent,
  Grid,
  Tree,
  TreeContext,
  TreeItem,
  TreeGroup,
  IconButton,
} from '@looker/components'

export const All = () => (
  <Grid>
    <FileSelector />
    <FileSelectorClosed />
    <FieldPicker />
    <Border />
  </Grid>
)

export default {
  component: All,
  title: 'Tree',
}

const onClick = () => {
  alert("I'm a little teapot")
  return false
}

const addButton = (
  <ButtonTransparent onClick={onClick} size="xxsmall" iconBefore="Plus">
    Add
  </ButtonTransparent>
)

export const FileSelector = () => (
  <Tree label="thelook" icon="ExploreOutline" defaultOpen>
    <Tree label="Orders" icon="VisibilityOutline" defaultOpen>
      <Tree label="Orders" icon="Table" defaultOpen>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Status</TreeItem>
        <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
      </Tree>
      <Tree label="Products" icon="Table" defaultOpen>
        <TreeItem icon="IdeDimension">Brand</TreeItem>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Department</TreeItem>
        <TreeItem icon="IdeDimension">Sku</TreeItem>
      </Tree>
      <Tree label="Users" icon="Table" defaultOpen>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Name</TreeItem>
        <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
      </Tree>
    </Tree>
    <Tree label="Users" icon="VisibilityOutline" defaultOpen>
      <Tree label="Orders" icon="Table" defaultOpen>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Status</TreeItem>
        <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
      </Tree>
      <Tree label="Users" icon="Table" defaultOpen>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Name</TreeItem>
        <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
      </Tree>
    </Tree>
  </Tree>
)

export const FileSelectorClosed = () => (
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
)

const fieldDetailButtons = (
  <>
    <IconButton icon="Filter" label="Filter" />
    <IconButton icon="CircleInfoOutline" label="Info" />
    <IconButton icon="DotsVert" label="Options" />
  </>
)

export const FieldPicker = () => (
  <Tree
    defaultOpen
    detail={addButton}
    detailHoverDisclosure
    label="Custom Fields"
  >
    <TreeGroup label="DIMENSIONS">
      <TreeItem
        detail={fieldDetailButtons}
        detailAccessory
        icon="FieldNumber"
        onClick={() => alert('Clicked on Cost!')}
      >
        Cost
      </TreeItem>
      <Tree label="Created">
        <TreeItem detail={fieldDetailButtons} detailAccessory icon="Calendar">
          Created Date
        </TreeItem>
        <TreeItem detail={fieldDetailButtons} detailAccessory icon="Calendar">
          Created Month
        </TreeItem>
        <TreeItem detail={fieldDetailButtons} detailAccessory icon="Calendar">
          Created Year
        </TreeItem>
        <TreeItem detail={fieldDetailButtons} detailAccessory icon="Calendar">
          Created Quarter
        </TreeItem>
      </Tree>
      <TreeItem
        detail={fieldDetailButtons}
        detailAccessory
        icon="FieldDistance"
      >
        Location
      </TreeItem>
      <TreeItem
        detail={fieldDetailButtons}
        detailAccessory
        icon="FieldTier"
        onClick={() => alert('Clicked on Tier!')}
      >
        Tier
      </TreeItem>
      <TreeItem
        detail={fieldDetailButtons}
        detailAccessory
        icon="FieldYesNo"
        onClick={() => alert('Clicked on French Yes-No!')}
      >
        Oui ou Non
      </TreeItem>
    </TreeGroup>
    <TreeGroup color="critical" label="MEASURES">
      <TreeItem
        detail={fieldDetailButtons}
        detailAccessory
        icon="FieldNumber"
        onClick={() => alert('Clicked on Count!')}
      >
        Count
      </TreeItem>
      <TreeItem
        detail={fieldDetailButtons}
        detailAccessory
        icon="FieldNumber"
        onClick={() => alert('Clicked on Count Distinct!')}
      >
        Count Distinct
      </TreeItem>
    </TreeGroup>
  </Tree>
)

export const Border = () => (
  <Tree border label="Orders" defaultOpen>
    <Tree label="Orders" defaultOpen>
      <TreeItem>ID</TreeItem>
      <TreeItem>Status</TreeItem>
      <Tree label="Created" defaultOpen>
        <TreeItem>Created Date</TreeItem>
        <TreeItem>Created Month</TreeItem>
        <TreeItem>Created Year</TreeItem>
        <TreeItem>Created Quarter</TreeItem>
      </Tree>
    </Tree>
  </Tree>
)

export const HoverState = () => (
  <Tree
    hoverColor="keyFocus"
    selectedColor="critical"
    label="Orders"
    defaultOpen
  >
    <TreeItem selected>ID</TreeItem>
    <TreeItem>Status</TreeItem>
    <Tree label="Created" defaultOpen>
      <TreeItem>Created Date</TreeItem>
      <TreeItem>Created Month</TreeItem>
      <TreeItem>Created Year</TreeItem>
      <TreeItem>Created Quarter</TreeItem>
      <Tree label="Created" defaultOpen>
        <TreeItem>Created Date</TreeItem>
        <TreeItem>Created Month</TreeItem>
        <TreeItem>Created Year</TreeItem>
        <TreeItem>Created Quarter</TreeItem>
      </Tree>
    </Tree>
  </Tree>
)

export const Flat = () => (
  <TreeContext.Provider value={{ hoverColor: 'keyFocus' }}>
    <TreeGroup label="Inventory Items">
      <TreeItem icon="Calendar">Date</TreeItem>
      <TreeItem icon="FieldNumber" onClick={() => alert('Clicked on Cost!')}>
        Cost
      </TreeItem>
      <TreeItem icon="FieldNumber">Is Sold (Yes/No)</TreeItem>
      <TreeItem icon="FieldNumber">Another Number</TreeItem>
    </TreeGroup>
  </TreeContext.Provider>
)
