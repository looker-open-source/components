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
  IconButton,
  Tree,
  TreeItem,
  TreeGroup,
  Space,
  HoverDisclosure,
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
    <IconButton icon="Filter" label="Filter" onClick={() => alert('Filter')} />
    <IconButton
      icon="CircleInfoOutline"
      label="Info"
      onClick={() => alert('Info')}
    />
    <IconButton
      icon="DotsVert"
      label="Options"
      onClick={() => alert('Options')}
    />
  </>
)

const FieldLabel = ({ label }: { label: string }) => {
  return (
    <Space between px="xxsmall">
      <span>{label}</span>
      <HoverDisclosure>
        <IconButton
          icon="Sync"
          label="Pivot"
          color="key"
          onClick={(event) => {
            event.stopPropagation()
            alert('Pivot')
          }}
          onKeyDown={(event) => {
            event.stopPropagation()
          }}
          style={{
            background: '#fff',
            height: '18px',
          }}
        />
      </HoverDisclosure>
    </Space>
  )
}

export const FieldPicker = () => (
  <Tree defaultOpen detailAccessory detail={addButton} label="Custom Fields">
    <TreeGroup label="DIMENSIONS">
      <TreeItem
        detail={fieldDetailButtons}
        detailHoverDisclosure
        icon="FieldNumber"
        onClick={() => {
          alert('Clicked on Cost!')
        }}
      >
        <FieldLabel label="Cost" />
      </TreeItem>
      <Tree label="Created">
        <TreeItem detail={fieldDetailButtons} icon="Calendar">
          <FieldLabel label="Created Date" />
        </TreeItem>
        <TreeItem
          detail={fieldDetailButtons}
          detailHoverDisclosure
          icon="Calendar"
        >
          <FieldLabel label="Created Month" />
        </TreeItem>
        <TreeItem
          detail={fieldDetailButtons}
          detailHoverDisclosure
          icon="Calendar"
        >
          <FieldLabel label="Created Year" />
        </TreeItem>
        <TreeItem
          detail={fieldDetailButtons}
          detailHoverDisclosure
          icon="Calendar"
        >
          <FieldLabel label="Created Quarter" />
        </TreeItem>
      </Tree>
      <TreeItem
        detail={fieldDetailButtons}
        icon="FieldLocation"
        onClick={() => alert('Clicked on Location!')}
        detailHoverDisclosure
      >
        <FieldLabel label="Location" />
      </TreeItem>
      <TreeItem
        detail={fieldDetailButtons}
        detailHoverDisclosure
        icon="FieldTier"
        onClick={() => alert('Clicked on Tier!')}
      >
        <FieldLabel label="Tier" />
      </TreeItem>
      <TreeItem
        detail={fieldDetailButtons}
        detailHoverDisclosure
        icon="FieldYesNo"
        onClick={() => alert('Clicked on Yes No!')}
      >
        <FieldLabel label="Yes No" />
      </TreeItem>
    </TreeGroup>
    <TreeGroup color="warn" label="MEASURES">
      <TreeItem
        detail={fieldDetailButtons}
        detailHoverDisclosure
        icon="FieldNumber"
        onClick={() => alert('Clicked on Count!')}
      >
        <FieldLabel label="Count" />
      </TreeItem>
      <TreeItem
        detail={fieldDetailButtons}
        detailHoverDisclosure
        icon="FieldNumber"
        onClick={() => alert('Clicked on Count Distinct!')}
      >
        <FieldLabel label="Count Distinct" />
      </TreeItem>
    </TreeGroup>
  </Tree>
)

export const Border = () => (
  <Tree
    border
    label={
      <Space between>
        <span>Orders</span>
        <span>thelook</span>
      </Space>
    }
    defaultOpen
  >
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

export const Flat = () => (
  <TreeGroup label="Inventory Items">
    <TreeItem icon="Calendar">Date</TreeItem>
    <TreeItem icon="FieldNumber" onClick={() => alert('Clicked on Cost!')}>
      Cost
    </TreeItem>
    <TreeItem icon="FieldNumber">Is Sold (Yes/No)</TreeItem>
    <TreeItem icon="FieldNumber">Another Number</TreeItem>
  </TreeGroup>
)
