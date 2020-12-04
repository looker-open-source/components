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
import { Story } from '@storybook/react/types-6-0'
import { Tree, TreeProps } from '../Tree'
import { TreeItem } from '../TreeItem'

const Template: Story<TreeProps> = (args) => (
  <Tree label="thelook" icon="ExploreOutline" {...args}>
    <Tree label="Orders" icon="VisibilityOutline" defaultOpen branchFontWeight>
      <Tree label="Orders" icon="Table" defaultOpen branchFontWeight>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Status</TreeItem>
        <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
      </Tree>
      <Tree label="Products" icon="Table" defaultOpen branchFontWeight>
        <TreeItem icon="IdeDimension">Brand</TreeItem>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Department</TreeItem>
        <TreeItem icon="IdeDimension">Sku</TreeItem>
      </Tree>
      <Tree label="Users" icon="Table" defaultOpen branchFontWeight>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Name</TreeItem>
        <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
      </Tree>
    </Tree>
    <Tree label="Users" icon="VisibilityOutline" defaultOpen branchFontWeight>
      <Tree label="Orders" icon="Table" defaultOpen branchFontWeight>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Status</TreeItem>
        <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
      </Tree>
      <Tree label="Users" icon="Table" defaultOpen branchFontWeight>
        <TreeItem icon="IdeDimension">ID</TreeItem>
        <TreeItem icon="IdeDimension">Name</TreeItem>
        <TreeItem icon="IdeDimensionGroup">Created</TreeItem>
      </Tree>
    </Tree>
  </Tree>
)

export const FileTree = Template.bind({})
FileTree.args = {
  defaultOpen: true,
  indicatorPosition: 'left',
}

export const FileTreeClosed = Template.bind({})
FileTreeClosed.args = {
  indicatorPosition: 'left',
}
