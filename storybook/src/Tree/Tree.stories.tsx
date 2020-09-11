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
  Tree,
  TreeItem,
  TreeGroup,
  Space,
  AccordionDisclosureStyle,
  TreeItemLabel,
  SpaceVertical,
} from '@looker/components'
import styled from 'styled-components'
export { FieldPicker } from './FieldPicker.stories'

export const All = () => (
  <SpaceVertical>
    <FileSelector />
    <FileSelectorClosed />
    <Border />
    <Flat />
    <BorderRadiusOverride />
    <LongLabels />
  </SpaceVertical>
)

export default {
  component: All,
  title: 'Tree',
}

export const FileSelector = () => (
  <Tree label="thelook" icon="ExploreOutline" defaultOpen>
    <Tree visuallyAsBranch label="Orders" icon="VisibilityOutline" defaultOpen>
      <Tree visuallyAsBranch label="Orders" icon="Table" defaultOpen>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Status</TreeItem>
        <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
      </Tree>
      <Tree visuallyAsBranch label="Products" icon="Table" defaultOpen>
        <TreeItem icon="IdeDimension">Brand</TreeItem>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Department</TreeItem>
        <TreeItem icon="IdeDimension">Sku</TreeItem>
      </Tree>
      <Tree visuallyAsBranch label="Users" icon="Table" defaultOpen>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Name</TreeItem>
        <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
      </Tree>
    </Tree>
    <Tree visuallyAsBranch label="Users" icon="VisibilityOutline" defaultOpen>
      <Tree visuallyAsBranch label="Orders" icon="Table" defaultOpen>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Status</TreeItem>
        <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
      </Tree>
      <Tree visuallyAsBranch label="Users" icon="Table" defaultOpen>
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

const BorderRadiusOverrideTree = styled(Tree)`
  ${AccordionDisclosureStyle}, ${TreeItemLabel} {
    border-radius: ${({ theme }) => theme.radii.medium};
  }
`

export const BorderRadiusOverride = () => (
  <BorderRadiusOverrideTree label="Created">
    <TreeItem>Created Date</TreeItem>
    <TreeItem>Created Month</TreeItem>
    <TreeItem>Created Year</TreeItem>
    <TreeItem>Created Quarter</TreeItem>
  </BorderRadiusOverrideTree>
)

export const LongLabels = () => (
  <Tree label="Tree with long labels " icon="ExploreOutline" defaultOpen>
    <Tree label="Wrapping next" icon="VisibilityOutline" defaultOpen>
      <Tree
        label="Orders Lorem ipsum dolor sit amet, consectetur adipiscing elit. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        icon="Table"
        defaultOpen
      >
        <TreeItem icon="IdeDimension">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </TreeItem>
        <TreeItem icon="IdeDimension">
          Nam sit amet imperdiet lacus, eget ullamcorper nunc. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy.
        </TreeItem>
        <TreeItem icon="IdeDimensionGroup">
          Nunc convallis justo sed turpis interdum rutrum ac a neque. Contrary
          to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC, making it over
          2000 years old.
        </TreeItem>
      </Tree>
    </Tree>
    <Tree label="Truncated text" icon="VisibilityOutline" defaultOpen>
      <Tree
        label="Users Lorem ipsum dolor sit amet, consectetur adipiscing elit. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        icon="Table"
        truncateLabel
        defaultOpen
      >
        <TreeItem icon="IdeDimension" truncate>
          <strong>Very long text renders a tooltip.</strong> Vivamus vitae
          mauris et erat sagittis tempus. Mauris euismod aliquet arcu ut
          viverra. It has roots in a piece of classical Latin literature from 45
          BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source.
        </TreeItem>
        <TreeItem icon="IdeDimension" truncate>
          Quisque euismod risus quis sapien luctus rutrum. Cras a dui luctus,
          dictum elit vel, pellentesque nisl. Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old.
        </TreeItem>
        <TreeItem icon="IdeDimensionGroup" truncate>
          This short text should not render a tooltip
        </TreeItem>
      </Tree>
    </Tree>
  </Tree>
)
